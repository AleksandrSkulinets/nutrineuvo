"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
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
import { VideoIcon } from "lucide-react";
import { CreditCardIcon } from "lucide-react";
import { ShieldIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
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
  const [services, setServices] = useState([]);
  const [service, setService] = useState("Kaikki");
  const [expert, setExpert] = useState("Kaikki");

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

  /* ---------------------- Fetch all available services (for filters) ---------------------- */
  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await PublicAPI.getAvailableServices();
        const data = res?.data?.data || [];
        console.groupCollapsed("📦 [PublicAPI] Available services");
        console.table(data);
        console.groupEnd();
        setServices(data);
      } catch (err) {
        console.error("❌ [BookingLayout] Failed to load services", err);
        toast.error("Palveluiden lataus epäonnistui.");
      }
    }

    fetchServices();
  }, []);

  /* ---------------------- Filters ---------------------- */
  const filteredNutritionists = nutritionists
    .filter((n) => n && Array.isArray(n.slots))
    .map((n) => ({
      ...n,
      slots: n.slots.filter((slot) => {
        const matchPeriod =
          tab === "kaikki" ||
          (slot?.start_time && getSlotPeriod(slot.start_time) === tab);

        const matchService =
          service === "Kaikki" || slot?.service_type === service;

        return matchPeriod && matchService;
      }),
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
      <section className=" min-h-screen  mt-20">
        <main className="p-12">
          <div className="flex-1 space-y-6 p-6 ">
            <div className="grid gap-4  sm:grid-cols-2 lg:grid-cols-3">
              <Select value={service} onValueChange={setService}>
                <SelectTrigger>
                  <SelectValue placeholder="Valitse palvelu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="opt-all-services" value="Kaikki">
                    Kaikki palvelut
                  </SelectItem>

                  {services.length > 0 ? (
                    services.map((s, i) => (
                      <SelectItem key={`service-${i}-${s}`} value={s}>
                        {s}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem key="opt-no-services" disabled>
                      Ei palveluita
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>

              <Select value={expert} onValueChange={setExpert}>
                <SelectTrigger>
                  <SelectValue placeholder="Valitse asiantuntija" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="opt-all-experts" value="Kaikki">
                    Kaikki asiantuntijat
                  </SelectItem>

                  {nutritionists.length > 0 ? (
                    nutritionists.map((n, i) => (
                      <SelectItem
                        key={`expert-${i}-${n.nutritionist_id}`}
                        value={n.name}
                      >
                        {n.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem key="opt-no-experts" disabled>
                      Ei asiantuntijoita
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
              {loadingDays ? (
                <CalendarSkeleton />
              ) : (
                <Card className="border-none shadow-none mx-auto">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => date < today}
                    className=" rounded-lg border"
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
                  <div className="text-muted-foreground text-center text-xs mt-2">
                    {selectedDate?.toLocaleDateString("fi-FI", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <div className="text-muted-foreground text-center text-xs">
                    {totalSlots > 0
                      ? `${totalSlots} vapaata aikaa saatavilla`
                      : "Ei vapaita aikoja tällä päivällä"}
                  </div>
                </Card>
              )}

              <div className="space-y-6 ms-6">
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList className="flex gap-2 rounded-full bg-muted p-1">
                    <TabsTrigger
                      className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                      value="kaikki"
                    >
                      Kaikki
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                      value="aamu"
                    >
                      Aamu
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                      value="iltapäivä"
                    >
                      Iltapäivä
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                      value="ilta"
                    >
                      Ilta
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

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
                      const utc = buildUTCSlot(
                        selectedDate,
                        slot.start_time,
                        n.timezone
                      );
                      const display = displayInUserZone(utc, n.timezone);

                      return (
                        <Card
                          key={`${n.nutritionist_id}-${
                            slot.slot_id
                          }-${selectedDate.toISOString()}`}
                          className="shadow-sm bg-card hover:shadow-md hover:scale-[1.01] transition-all duration-200 border border-border rounded-xl"
                        >
                          {/* HEADER: Service + Insurance */}
                          <CardHeader className="flex flex-row justify-between p-4 border-b border-border/50">
                            <div>
                              <h3 className="text-lg font-semibold text-card-foreground">
                                {slot.service_type}
                              </h3>
                            </div>
                            <div className="flex items-center gap-1 text-xs sm:text-sm">
                              <ShieldIcon
                                className={`h-4 w-4 ${
                                  slot.accepts_insurance
                                    ? "text-emerald-600"
                                    : "text-muted-foreground"
                                }`}
                              />
                              <span
                                className={`${
                                  slot.accepts_insurance
                                    ? "text-emerald-600 font-medium"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {slot.accepts_insurance
                                  ? "Vakuutus hyväksytään"
                                  : "Ei vakuutusta"}
                              </span>
                            </div>
                          </CardHeader>

                          {/* MAIN: Nutritionist + Slot info */}
                          <CardContent className="p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
                            {/* LEFT: Nutritionist */}
                            <div className="flex items-center gap-4 flex-1">
                              <Avatar className="h-16 w-16 border shadow-sm">
                                <AvatarImage src={n.image} alt={n.name} />
                                <AvatarFallback>
                                  {String(n.name || "")
                                    .split(" ")
                                    .map((x) => x?.[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>

                              <div className="flex flex-col">
                                <h4 className="font-semibold text-card-foreground">
                                  {n.name}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  Ravitsemusterapeutti
                                </p>
                                <p className="text-xs text-primary/80 font-medium">
                                  Etävastaanotto
                                </p>
                              </div>
                            </div>

                            {/* RIGHT: Slot info */}
                            <div className="flex flex-col sm:items-end items-center flex-1 text-sm font-medium">
                              <div className="text-3xl font-bold text-card-foreground leading-none">
                                {display.userLocal}
                              </div>
                              <div className="text-muted-foreground mt-1">
                                {slot.duration_min} min
                              </div>
                              {slot.price && (
                                <div className="text-base font-semibold text-primary mt-1">
                                  €{slot.price}
                                </div>
                              )}
                            </div>
                          </CardContent>

                          {/* FOOTER: Payment + Button */}
                          <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-border/50">
                            {/* Payment methods */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                              {slot.payment_methods?.map((method, i) => (
                                <Badge
                                  key={`method-${i}`}
                                  variant="secondary"
                                  className="text-xs flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground"
                                >
                                  <CreditCardIcon className="h-3.5 w-3.5 text-primary" />
                                  {method}
                                </Badge>
                              ))}
                            </div>

                            {/* Booking button */}
                            <Button
                              onClick={() => handleSlotBooking(slot, n)}
                              disabled={
                                isBooking && selectedSlot === slot.slot_id
                              }
                              className="min-w-[160px] h-9 text-sm font-medium"
                            >
                              {isBooking && selectedSlot === slot.slot_id
                                ? "Varataan..."
                                : "Varaa aika"}
                            </Button>
                          </CardFooter>
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
        </main>
      </section>
    </ErrorBoundary>
  );
}
