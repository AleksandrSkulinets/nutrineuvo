import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { api } from "../lib/api";
import { AvailabilityCalendar } from "../components/calendar/AvailabilityCalendar";
import  {toast}  from "../components/ui/sonner";
import  LoadingScreen  from "../components/common/LoadingScreen";

export default function BookingLayout() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [nutritionists, setNutritionists] = useState([]);
  const [nextAvailableDate, setNextAvailableDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState("Kaikki");
  const [service, setService] = useState("Kaikki");
  const [expert, setExpert] = useState("Kaikki");
  const [tab, setTab] = useState("kaikki");

  // 🕓 Time period helper
  const getSlotPeriod = (time) => {
    const [h] = time.split(":").map(Number);
    if (h < 12) return "aamu";
    if (h < 17) return "iltapaiva";
    return "ilta";
  };

  // 🔹 Fetch available nutritionists for selected date
  useEffect(() => {
    async function fetchAvailable() {
      if (!selectedDate) return;
      setLoading(true);
      const dateStr = selectedDate.toISOString().split("T")[0];

      try {
        const res = await api(`/public/availability?date=${dateStr}`);

        if (res.success && Array.isArray(res.data) && res.data.length > 0) {
          // Group by user_id
          const grouped = res.data.reduce((acc, slot) => {
            if (!acc[slot.user_id]) {
              acc[slot.user_id] = {
                ...slot,
                fullName: slot.fullName,
                slots: [],
              };
            }
            acc[slot.user_id].slots.push({
              start: slot.start_time,
              end: slot.end_time,
              day: slot.day_of_week,
            });
            return acc;
          }, {});
          setNutritionists(Object.values(grouped));
          setNextAvailableDate(null);
        } else {
          setNutritionists([]);
          // 🔍 If none found, check next available day
          const next = await api("/public/next-available-day");
          if (next.success && next.data?.date) {
            setNextAvailableDate(next.data.date);
          }
        }
      } catch (err) {
        console.error("❌ Error fetching availability:", err);
        toast.error("Virhe haettaessa aikoja.");
      } finally {
        setLoading(false);
      }
    }

    fetchAvailable();
  }, [selectedDate]);

  // 🧭 Filter by location/service/expert/time of day
  const filteredNutritionists = nutritionists
    .filter((n) => expert === "Kaikki" || n.fullName === expert)
    .filter((n) => location === "Kaikki" || n.city === location)
    .filter(
      (n) => service === "Kaikki" || n.services_offered?.includes(service)
    )
    .map((n) => ({
      ...n,
      slots:
        tab === "kaikki"
          ? n.slots
          : n.slots.filter((s) => getSlotPeriod(s.start) === tab),
    }));

  const totalSlots = filteredNutritionists.reduce(
    (sum, n) => sum + n.slots.length,
    0
  );

  // 🧾 Handle booking click
  async function handleBooking(userId, startTime, date) {
    const isoDate = date.toISOString().split("T")[0];
    try {
      const res = await api("/bookings", {
        method: "POST",
        body: { userId, date: isoDate, time: startTime },
      });
      if (res.success) toast.success("Aika varattu onnistuneesti!");
      else toast.error("Varaus epäonnistui, yritä uudelleen.");
    } catch {
      toast.error("Virhe varauksen aikana.");
    }
  }

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4 py-4 lg:py-20 space-y-6">
        {/* --- Top Filters --- */}
        <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Valitse kaupunki" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kaikki">Kaikki kaupungit</SelectItem>
              <SelectItem value="Helsinki">Helsinki</SelectItem>
              <SelectItem value="Espoo">Espoo</SelectItem>
              <SelectItem value="Vantaa">Vantaa</SelectItem>
            </SelectContent>
          </Select>

          <Select value={service} onValueChange={setService}>
            <SelectTrigger>
              <SelectValue placeholder="Valitse palvelu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kaikki">Kaikki palvelut</SelectItem>
              <SelectItem value="konsultaatio">
                Ravitsemuskonsultaatio
              </SelectItem>
              <SelectItem value="seuranta">Seurantakäynti</SelectItem>
            </SelectContent>
          </Select>

          <Select value={expert} onValueChange={setExpert}>
            <SelectTrigger>
              <SelectValue placeholder="Valitse asiantuntija" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kaikki">Kaikki asiantuntijat</SelectItem>
              {nutritionists.map((n) => (
                <SelectItem key={n.user_id} value={n.fullName}>
                  {n.fullName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* --- Calendar + Results Layout --- */}
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Left: Smart Calendar */}
          <div className="flex items-center min-w-0 flex-col gap-2">
            <AvailabilityCalendar
              selectedDate={selectedDate}
              onDateSelect={(iso, date) => setSelectedDate(date)}
            />

            <div className="text-muted-foreground text-center text-xs">
              A minimum of 5 days is required
            </div>
          </div>

          {/* Right: Available slots */}
          <div className="space-y-4">
            {/* Date header */}
            <div className="px-2 text-sm font-medium">
              {loading ? (
                <p className="text-muted-foreground">Ladataan aikoja...</p>
              ) : totalSlots > 0 ? (
                <p className="text-foreground font-bold text-md lg:text-xl">
                  {selectedDate?.toLocaleDateString("fi-FI", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                  • {totalSlots} vapaata aikaa
                </p>
              ) : (
                <p className="text-red-500">
                  Ei vapaita aikoja valitulle päivälle.
                </p>
              )}
            </div>

            {/* Time-of-day tabs */}
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="flex gap-2 rounded-full bg-muted p-1">
                <TabsTrigger value="kaikki">Kaikki</TabsTrigger>
                <TabsTrigger value="aamu">Aamu</TabsTrigger>
                <TabsTrigger value="iltapaiva">Iltapäivä</TabsTrigger>
                <TabsTrigger value="ilta">Ilta</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Results */}
            {loading ? (
                <LoadingScreen/>
                
              
            ) : totalSlots > 0 ? (
              filteredNutritionists.map((n) =>
                n.slots.map((slot, i) => (
                  <Card key={`${n.user_id}-${i}`}>
                    <CardContent className="flex flex-row sm:items-center sm:justify-between gap-4 p-4 border-b">
                      {/* Time info */}
                      <div className="text-center text-sm font-medium">
                        <div className="text-muted-foreground">
                          {selectedDate?.toDateString() ===
                          new Date().toDateString()
                            ? "Tänään"
                            : selectedDate?.toLocaleDateString("fi-FI", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                              })}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {slot.start.slice(0, 5)}
                        </div>
                        <div className="text-muted-foreground">
                          {n.session_duration} min
                        </div>
                      </div>

                      {/* Nutritionist info */}
                      <div className="flex items-center gap-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={n.profile_photo || "/therapist-avatar.png"}
                          />
                          <AvatarFallback>
                            {n.fullName
                              .split(" ")
                              .map((p) => p[0])
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold uppercase">
                            {n.fullName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {n.country} • {n.currency}
                          </p>
                        </div>
                      </div>

                      {/* Book button */}
                      <Button
                        onClick={() =>
                          handleBooking(n.user_id, slot.start, selectedDate)
                        }
                        className="w-full sm:w-auto"
                      >
                        Varaa
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )
            ) : (
              <div className="p-6 text-center text-muted-foreground">
                Ei vapaita aikoja tälle päivälle.
              </div>
            )}

            {/* 🔎 Show next available day if today empty */}
            {!loading && totalSlots === 0 && nextAvailableDate && (
              <div className="text-center text-xs text-muted-foreground">
                Seuraava vapaa päivä:{" "}
                <span className="font-medium text-primary">
                  {new Date(nextAvailableDate).toLocaleDateString("fi-FI", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
