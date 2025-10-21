"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Skeleton } from "../components/ui/skeleton";
import { PublicAPI } from "../lib/endpoints/public";
import { formatInTimeZone } from "date-fns-tz";
import { Clock, Euro, Timer, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { CalendarSkeleton, SlotCardSkeleton } from "../components/ui/skeletons";


/* ---------------------- Helpers ---------------------- */
function getSlotPeriod(time) {
  const [h] = String(time).split(":").map(Number);
  if (h < 12) return "aamu";
  if (h < 17) return "iltapäivä";
  return "ilta";
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function toLocalISO(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function buildUTCSlot(selectedDate, localTime, tz) {
  const [hour, minute] = localTime.split(":").map(Number);
  const local = new Date(selectedDate);
  local.setHours(hour, minute, 0, 0);
  return new Date(
    local.toLocaleString("en-US", { timeZone: tz, hour12: false })
  );
}

function displayInUserZone(slotDateUTC, nutritionistTz) {
  const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    userLocal: formatInTimeZone(slotDateUTC, userTz, "HH:mm"),
    therapistLocal: formatInTimeZone(slotDateUTC, nutritionistTz, "HH:mm"),
    userTz,
  };
}

/* ---------------------- Error Boundary ---------------------- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <Card className="max-w-md w-full shadow-lg border-0 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-destructive mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">
                Jokin meni pieleen
              </h3>
              <p className="text-muted-foreground">
                Kalenterin latauksessa tapahtui virhe. Päivitä sivu ja yritä
                uudelleen.
              </p>
              <Button onClick={() => window.location.reload()}>
                Päivitä sivu
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ---------------------- Main Page ---------------------- */
export default function BookingLayout() {
  const [selectedDate, setSelectedDate] = useState(startOfToday());
  const [availableDays, setAvailableDays] = useState([]);
  const [nutritionists, setNutritionists] = useState([]);
  const [tab, setTab] = useState("kaikki");
  const [loadingDays, setLoadingDays] = useState(true);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  /* ---------------------- Fetch available days ---------------------- */
  useEffect(() => {
    let mounted = true;

    async function fetchDays() {
      try {
        const res = await PublicAPI.getAvailableDays();
        const days = res?.data?.data || [];
        const clean = Array.from(
          new Set(
            days
              .map((d) => {
                const [y, m, dd] = d.split("-").map(Number);
                return toLocalISO(new Date(y, m - 1, dd));
              })
              .filter(Boolean)
          )
        );
        if (mounted) setAvailableDays(clean);
      } catch {
        if (mounted) setAvailableDays([]);
        toast.error("Kalenterin lataaminen epäonnistui.");
      } finally {
        if (mounted) setLoadingDays(false);
      }
    }

    fetchDays();
    const interval = setInterval(fetchDays, 60000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  /* ---------------------- Auto-select valid day ---------------------- */
  useEffect(() => {
    if (!availableDays.length) return;
    const todayKey = toLocalISO(startOfToday());
    if (availableDays.includes(todayKey)) {
      setSelectedDate(startOfToday());
    } else {
      const next = availableDays.find((d) => d > todayKey);
      if (next) {
        const [y, m, dd] = next.split("-").map(Number);
        setSelectedDate(new Date(y, m - 1, dd));
      }
    }
  }, [availableDays]);

  /* ---------------------- Fetch slots for selected day ---------------------- */
  useEffect(() => {
    if (!(selectedDate instanceof Date) || isNaN(selectedDate.getTime()))
      return;
    setLoadingSlots(true);
    const dateISO = toLocalISO(selectedDate);

    PublicAPI.getAvailableSlots(dateISO)
      .then((res) => {
        const data = res?.data?.data || [];
        setNutritionists(data);
      })
      .catch(() => {
        setNutritionists([]);
        toast.error("Aikojen lataaminen epäonnistui.");
      })
      .finally(() => setLoadingSlots(false));
  }, [selectedDate]);

  /* ---------------------- Filters ---------------------- */
  const filteredNutritionists = nutritionists
    .filter((n) => n && Array.isArray(n.slots))
    .map((n) => ({
      ...n,
      slots:
        tab === "kaikki"
          ? n.slots
          : n.slots.filter(
              (slot) =>
                slot?.start_time && getSlotPeriod(slot.start_time) === tab
            ),
    }))
    .filter((n) => n.slots.length > 0);

  const totalSlots = filteredNutritionists.reduce(
    (sum, n) => sum + n.slots.length,
    0
  );

  /* ---------------------- Slot booking ---------------------- */
  const handleSlotBooking = async (slot, n) => {
    if (!slot?.slot_id || isBooking) return;
    try {
      setIsBooking(true);
      setSelectedSlot(slot.slot_id);
      await new Promise((r) => setTimeout(r, 800));
      toast.success(
        `Aika ${slot.start_time} varattu onnistuneesti ravitsemusterapeutilta ${n.name}.`
      );
    } catch {
      toast.error("Ajan varaaminen epäonnistui. Yritä uudelleen.");
    } finally {
      setIsBooking(false);
      setSelectedSlot(null);
    }
  };

  const today = startOfToday();
  const handleDateSelect = (date) => {
    if (!date || isNaN(date.getTime()) || date < today) return;
    setSelectedDate(new Date(date));
  };
  const isAvailableModifier = (date) =>
    availableDays.includes(toLocalISO(date));

  /* ---------------------- UI ---------------------- */
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 my-20 to-background">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-[400px_1fr] max-w-7xl mx-auto">
            {/* LEFT: Calendar */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Valitse päivä
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
  {loadingDays ? (
    <CalendarSkeleton />
  ) : (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={handleDateSelect}
      disabled={(date) => date < today}
      modifiers={{ available: isAvailableModifier }}
      modifiersClassNames={{
        available:
          "bg-primary/10 text-primary font-semibold hover:bg-primary/20",
      }}
      classNames={{
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        day_today:
          "text-foreground font-bold underline underline-offset-2",
      }}
    />
  )}
</CardContent>

              </Card>
            </div>

            {/* RIGHT: Slots */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedDate?.toLocaleDateString("fi-FI", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </h2>
                  <p className="text-primary font-semibold mt-1">
                    {totalSlots > 0
                      ? `${totalSlots} vapaata aikaa saatavilla`
                      : "Ei vapaita aikoja tällä päivällä"}
                  </p>
                </CardContent>
              </Card>

              <Tabs value={tab} onValueChange={setTab}>
                <TabsList className="grid w-full grid-cols-4 bg-muted/50">
                  <TabsTrigger value="kaikki">Kaikki</TabsTrigger>
                  <TabsTrigger value="aamu">Aamu</TabsTrigger>
                  <TabsTrigger value="iltapäivä">Iltapäivä</TabsTrigger>
                  <TabsTrigger value="ilta">Ilta</TabsTrigger>
                </TabsList>
              </Tabs>

             <div className="space-y-4">
  {loadingSlots ? (
    // 🩶 Show multiple realistic slot skeletons instead of one big block
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <SlotCardSkeleton key={i} />
      ))}
    </div>
  ) : filteredNutritionists.length > 0 ? (
    filteredNutritionists.flatMap((n) =>
      n.slots.map((slot) => {
        const utc = buildUTCSlot(selectedDate, slot.start_time, n.timezone);
        const display = displayInUserZone(utc, n.timezone);

        return (
          <Card
            key={slot.slot_id}
            className="shadow-md bg-card/80 backdrop-blur-sm hover:scale-[1.01] transition"
          >
            <CardContent className="p-6 flex flex-col lg:flex-row gap-6">
              {/* LEFT: Slot info */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="text-2xl font-bold text-primary">
                    {display.userLocal}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs flex items-center gap-1"
                  >
                    <Timer className="h-3 w-3" />
                    {slot.service_type || "Ravitsemusneuvonta"}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    {slot.duration_min} min
                  </span>
                  {slot.price && (
                    <span className="flex items-center gap-1">
                      <Euro className="h-4 w-4 text-primary" />
                      {slot.price} €
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT: Nutritionist & Booking */}
              <div className="flex items-center gap-4 justify-end flex-1">
                <Avatar className="h-16 w-16 border">
                  <AvatarImage src={n.image} alt={n.name} />
                  <AvatarFallback>
                    {String(n.name || "")
                      .split(" ")
                      .map((x) => x?.[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{n.name}</h3>
                  {n.location && (
                    <p className="text-sm text-muted-foreground">
                      {n.location}
                    </p>
                  )}
                </div>
                <Button
                  onClick={() => handleSlotBooking(slot, n)}
                  disabled={isBooking && selectedSlot === slot.slot_id}
                  className="min-w-[140px]"
                >
                  {isBooking && selectedSlot === slot.slot_id
                    ? "Varataan..."
                    : "Varaa aika"}
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })
    )
  ) : (
    <p className="text-center text-muted-foreground mt-8">
      Ei vapaita aikoja valitulle päivälle.
    </p>
  )}
</div>

            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
