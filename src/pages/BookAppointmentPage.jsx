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
import { Clock, Euro, Timer } from "lucide-react";

/**
 * 🧩 Safe polyfill for zonedTimeToUtc
 * Converts local date/time string in a given timezone to a UTC Date object
 * Works in all environments (no named export issues)
 */
function safeZonedTimeToUtc(localDateTimeString, timeZone) {
  const date = new Date(localDateTimeString);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Extract the offset-corrected parts
  const parts = formatter.formatToParts(date);
  const lookup = Object.fromEntries(parts.map((p) => [p.type, p.value]));

  const isoLocal = `${lookup.year}-${lookup.month}-${lookup.day}T${lookup.hour}:${lookup.minute}:${lookup.second}`;
  return new Date(isoLocal + "Z"); // create as UTC
}

// ----------------- Error Boundary -----------------
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("❌ Error caught by boundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 my-20 to-background">
          <div className="container mx-auto px-6 py-12">
            <Card className="max-w-md mx-auto shadow-lg border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-destructive"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Jotain meni pieleen
                  </h3>
                  <p className="text-muted-foreground">
                    Kalenterissa tapahtui virhe. Yritä päivittää sivu.
                  </p>
                  <Button
                    onClick={() => window.location.reload()}
                    className="mt-4"
                  >
                    Päivitä sivu
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ----------------- Helpers -----------------
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

// --- timezone helpers ---
function buildUTCSlot(selectedDate, localTime, tz) {
  const dateStr = toLocalISO(selectedDate);
  const localDateTime = `${dateStr}T${localTime}`;
  return safeZonedTimeToUtc(localDateTime, tz);
}

function displayInUserZone(slotDateUTC, nutritionistTz) {
  const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    userLocal: formatInTimeZone(slotDateUTC, userTz, "HH:mm"),
    therapistLocal: formatInTimeZone(slotDateUTC, nutritionistTz, "HH:mm"),
    userTz,
  };
}

// ----------------- Page -----------------
export default function BookingLayout() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  });
  const [availableDays, setAvailableDays] = useState([]);
  const [nutritionists, setNutritionists] = useState([]);
  const [tab, setTab] = useState("kaikki");
  const [loadingDays, setLoadingDays] = useState(true);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  // 🕓 Debug: log user timezone
  useEffect(() => {
    console.log(
      "🌍 User timezone:",
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );
  }, []);

  // Fetch available days
  // 🕒 POLLING FETCH FOR AVAILABLE DAYS
  useEffect(() => {
    let isMounted = true;

    async function fetchDays() {
      try {
        const res = await PublicAPI.getAvailableDays();
        const days = res?.data?.data || [];

        const localized = days.map((d) => {
          if (!d) return null;
          const [year, month, day] = d.split("-").map(Number);
          return toLocalISO(new Date(year, month - 1, day));
        });

        const clean = Array.from(new Set(localized.filter(Boolean)));
        if (isMounted) {
          setAvailableDays(clean);
          console.log("🔁 Updated available days:", clean);
        }
      } catch (err) {
        console.error("❌ Failed to load available days:", err);
        if (isMounted) setAvailableDays([]);
      } finally {
        if (isMounted) setLoadingDays(false);
      }
    }

    // Initial fetch
    fetchDays();

    // 🔁 Re-fetch every 30 seconds
    const interval = setInterval(fetchDays, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // ⏱ When available days are loaded, ensure selectedDate is valid
  useEffect(() => {
    if (!availableDays.length) return;
    const todayKey = toLocalISO(startOfToday());

    // If today has slots, keep today selected
    if (availableDays.includes(todayKey)) {
      setSelectedDate(startOfToday());
    } else {
      // Otherwise pick the next available date
      const nextAvailable = availableDays.find((d) => d > todayKey);
      if (nextAvailable) {
        const [y, m, dd] = nextAvailable.split("-").map(Number);
        setSelectedDate(new Date(y, m - 1, dd));
      }
    }
  }, [availableDays]);

  // Fetch slots when date changes
  useEffect(() => {
    if (!(selectedDate instanceof Date) || isNaN(selectedDate.getTime()))
      return;
    setLoadingSlots(true);
    const dateISO = toLocalISO(selectedDate);
    console.log("📅 Fetching slots for:", dateISO);

    PublicAPI.getAvailableSlots(dateISO)
      .then((res) => {
        const data = res?.data?.data || [];
        console.log("🧠 Raw API data:", data);

        const debugRows = data.flatMap((n) =>
          n.slots.map((s) => {
            const utc = buildUTCSlot(selectedDate, s.start_time, n.timezone);
            const display = displayInUserZone(utc, n.timezone);
            return {
              nutritionist: n.name,
              start_time: s.start_time,
              timezone: n.timezone,
              utc: utc.toISOString(),
              user_local: `${display.userLocal} (${display.userTz})`,
              therapist_local: `${display.therapistLocal} (${n.timezone})`,
            };
          })
        );

        console.table(debugRows);
        setNutritionists(data);
      })
      .catch((err) => {
        console.error("❌ Failed to load slots:", err);
        setNutritionists([]);
      })
      .finally(() => setLoadingSlots(false));
  }, [selectedDate]);

  // Filter by time of day
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

  const today = startOfToday();
  const availableSet = new Set(availableDays);

  const handleDateSelect = (date) => {
    if (!date || isNaN(date.getTime())) return;
    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (d < today) return;
    setSelectedDate(d);
  };

  const isAvailableModifier = (date) => {
    const key = toLocalISO(date);
    return availableDays.includes(key);
  };

  const handleSlotBooking = async (slot, n) => {
    if (!slot?.slot_id) return;
    if (isBooking) return;
    try {
      setIsBooking(true);
      setSelectedSlot(slot.slot_id);
      await new Promise((r) => setTimeout(r, 800));
      console.log("✅ booked", {
        slot,
        n,
        date: toLocalISO(selectedDate),
      });
    } catch (e) {
      console.error("❌ booking failed", e);
    } finally {
      setIsBooking(false);
      setSelectedSlot(null);
    }
  };
  // 🧩 DEBUG LOGGING
  useEffect(() => {
    console.group("🧭 Calendar Debug Snapshot");
    console.log(
      "🕓 User timezone:",
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    console.log("📅 Today:", today, "→", toLocalISO(today));
    console.log(
      "📆 Selected date:",
      selectedDate,
      "→",
      toLocalISO(selectedDate)
    );
    console.log("✅ Available days (raw):", availableDays);
    console.log("✅ Available days count:", availableDays.length);

    // Show what's considered available for next 3 days
    const next3 = Array.from({ length: 3 }).map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const iso = toLocalISO(d);
      return {
        date: iso,
        available: availableDays.includes(iso),
        resultFromModifier: isAvailableModifier(d),
      };
    });
    console.table(next3);
    console.groupEnd();
  }, [availableDays, selectedDate]);

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
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Valitse päivä
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {loadingDays ? (
                    <div className="space-y-4">
                      <Skeleton className="h-auto w-auto" />
                      <Skeleton className="h-auto w-auto" />
                    </div>
                  ) : (
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < today}
                      modifiers={{
                        available: isAvailableModifier,
                      }}
                      modifiersClassNames={{
                        available:
                          "bg-primary/10 text-primary font-semibold border-primary/20 hover:bg-primary/20",
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
                    {totalSlots} vapaata aikaa saatavilla
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
                  <Skeleton className="h-64 w-full" />
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
                          key={slot.slot_id}
                          className="shadow-md bg-card/80 backdrop-blur-sm hover:scale-[1.01] transition"
                        >

<CardContent className="p-6 flex flex-col lg:flex-row gap-6">
  {/* LEFT: Appointment info */}
  <div className="flex-1 space-y-2">
    <div className="flex items-center gap-2 flex-wrap">
      <div className="text-2xl font-bold text-primary">
        {display.userLocal}
      </div>
      <Badge
        variant="outline"
        className="text-xs capitalize flex items-center gap-1"
      >
        <Timer className="h-3 w-3" />
        {slot.service_type || "Ravitsemusneuvonta"}
      </Badge>
    </div>

    <p className="text-sm text-muted-foreground">
      ({n.name} local: {display.therapistLocal})
    </p>

    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
      <span className="flex items-center gap-1">
        <Timer className="h-4 w-4 text-primary" />
        {slot.start_time}–{slot.end_time}
      </span>
      <span className="flex items-center gap-1">
        <Clock className="h-4 w-4 text-primary" />
        {slot.duration_min} min
      </span>
      {slot.price && (
        <span className="flex items-center gap-1">
          <Euro className="h-4 w-4 text-primary" />
          {slot.price} {n.currency || "EUR"}
        </span>
      )}
    </div>
  </div>

  {/* RIGHT: Nutritionist + Booking */}
  <div className="flex-1 flex items-center gap-4 justify-end">
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
      <p className="text-muted-foreground text-sm">{n.timezone}</p>
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
                    Ei vapaita aikoja
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
