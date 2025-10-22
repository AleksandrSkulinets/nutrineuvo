"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { PublicAPI } from "../lib/endpoints/public";
import { formatInTimeZone } from "date-fns-tz";
import {
  Clock,
  VideoIcon,
  CreditCardIcon,
  ShieldIcon,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { CalendarSkeleton, SlotCardSkeleton } from "../components/ui/skeletons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { ClockIcon } from "lucide-react";

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
    const { t } = this.props;
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <Card className="max-w-md w-full shadow-lg border-0 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center space-y-4">
              <CheckCircle2 className="w-10 h-10 text-destructive mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">
                {t("booking.errorTitle")}
              </h3>
              <p className="text-muted-foreground">
                {t("booking.errorMessage")}
              </p>
              <Button onClick={() => window.location.reload()}>
                {t("booking.reload")}
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
  const { t } = useTranslation();
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
        toast.error(t("booking.calendarLoadingError"));
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
  }, [t]);

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

  /* ---------------------- Fetch slots ---------------------- */
  useEffect(() => {
    if (!(selectedDate instanceof Date) || isNaN(selectedDate.getTime()))
      return;
    setLoadingSlots(true);
    const dateISO = toLocalISO(selectedDate);

    PublicAPI.getAvailableSlots(dateISO)
      .then((res) => setNutritionists(res?.data?.data || []))
      .catch(() => {
        setNutritionists([]);
        toast.error(t("booking.calendarLoadingError"));
      })
      .finally(() => setLoadingSlots(false));
  }, [selectedDate, t]);

  /* ---------------------- Fetch services ---------------------- */
  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await PublicAPI.getAvailableServices();
        setServices(res?.data?.data || []);
      } catch {
        toast.error(t("booking.calendarLoadingError"));
      }
    }
    fetchServices();
  }, [t]);

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

  /* ---------------------- Booking ---------------------- */
  const handleSlotBooking = async (slot, n) => {
    if (!slot?.slot_id || isBooking) return;
    try {
      setIsBooking(true);
      setSelectedSlot(slot.slot_id);
      await new Promise((r) => setTimeout(r, 800));
      toast.success(t("booking.bookingSuccess", { name: n.name }));
    } catch {
      toast.error(t("booking.bookingError"));
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
    <ErrorBoundary t={t}>
      <section className="min-h-screen mt-20">
        <main className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
          <div className="space-y-8 p-3">
            {/* ===== Filters ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("booking.selectService")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kaikki">
                    {t("booking.allServices")}
                  </SelectItem>
                  {services.length > 0 ? (
                    services.map((s, i) => (
                      <SelectItem key={`service-${i}-${s}`} value={s}>
                        {s}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem disabled>{t("booking.noServices")}</SelectItem>
                  )}
                </SelectContent>
              </Select>

              <Select value={expert} onValueChange={setExpert}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("booking.selectExpert")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kaikki">
                    {t("booking.allExperts")}
                  </SelectItem>
                  {nutritionists.length > 0 ? (
                    nutritionists.map((n, i) => (
                      <SelectItem key={`expert-${i}`} value={n.name}>
                        {n.name}
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem disabled>{t("booking.noExperts")}</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            {/* ===== Calendar + Slots ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
              {/* Calendar */}
              {loadingDays ? (
                <CalendarSkeleton />
              ) : (
                <Card className="border-none shadow-none mx-auto w-full max-w-sm sm:max-w-md">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => date < today}
                    className="rounded-lg border w-full"
                    modifiers={{ available: isAvailableModifier }}
                    modifiersClassNames={{
                      available:
                        "bg-primary/10 text-primary font-semibold hover:bg-primary/20",
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
                      ? `${totalSlots} ${t("booking.availableSlots")}`
                      : t("booking.noSlots")}
                  </div>
                </Card>
              )}

              {/* Slots */}
              <div className="space-y-6">
                <Tabs value={tab} onValueChange={setTab}>
                  <TabsList className="flex gap-2 rounded-full bg-muted p-1">
                    {[
                      { key: "kaikki", label: t("booking.all") },
                      { key: "aamu", label: t("booking.morning") },
                      { key: "iltapäivä", label: t("booking.afternoon") },
                      { key: "ilta", label: t("booking.evening") },
                    ].map(({ key, label }) => (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="rounded-full px-4 m-auto  py-1.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        {label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                {loadingSlots ? (
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
                          key={`${n.nutritionist_id}-${slot.slot_id}`}
                          className="shadow-sm bg-card p-2 hover:shadow-md transition-all border border-border rounded-xl"
                        >
                          {/* HEADER */}
                          <CardHeader className="flex flex-row sm:flex-row justify-between sm:items-center gap-3 p-4 border-b border-border/50">
                            <h3 className="text-base font-semibold text-card-foreground text-center sm:text-left">
                              {slot.service_type}
                            </h3>

                            <div className="flex  items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                                <Clock className="h-4 w-4 text-primary" />
                              </div>
                              <span className="font-medium text-card-foreground">
                                {slot.start_time}–{slot.end_time}
                              </span>
                            </div>
                          </CardHeader>
                          {/* FOOTER */}
                          <CardHeader className="flex flex-row sm:flex-row items-center justify-between gap-4 p-4 ">
                            <div className="flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                                <ShieldIcon
                                  className={`h-4 w-4 ${
                                    slot.accepts_insurance
                                      ? "text-emerald-600"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              </div>
                              <Badge
                                variant="secondary"
                                className={`px-2 py-0.5 text-xs rounded-md ${
                                  slot.accepts_insurance
                                    ? "bg-primary/80"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {slot.accepts_insurance
                                  ? t("booking.insuranceAccepted")
                                  : t("booking.insuranceNotAccepted")}
                              </Badge>
                            </div>
                            <CardDescription className="text-2xl sm:text-1xl font-bold text-card-foreground leading-none">
                              {display.userLocal}
                            </CardDescription>
                          </CardHeader>
                          {/* CONTENT */}
                          <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                            {/* LEFT: Nutritionist info */}
                            <div className="flex items-center sm:items-start justify-between sm:justify-start gap-3 sm:gap-4 flex-1 w-full">
                              {/* Avatar */}
                              <Avatar className="h-14 w-14 sm:h-16 sm:w-16 border shadow-sm flex-shrink-0">
                                <AvatarImage src={n.image} alt={n.name} />
                                <AvatarFallback>
                                  {String(n.name || "")
                                    .split(" ")
                                    .map((x) => x?.[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>

                              {/* Info */}
                              <div className="flex flex-col text-center sm:text-left">
  {/* Name + role */}
  <CardTitle className="text-sm sm:text-base font-semibold">
    {n.name}
  </CardTitle>
  <CardDescription className="text-xs text-muted-foreground">
    {t("booking.nutritionist")}
  </CardDescription>

  {/* Country + Currency */}
  <CardDescription className="flex items-center justify-center sm:justify-start gap-1 text-[11px] text-muted-foreground mt-1">
    {n.country} • {n.currency}
  </CardDescription>

  {/* Consultation type */}
  <CardDescription className="flex items-center justify-center sm:justify-start gap-1 text-xs font-medium mt-1.5">
    {slot.consultation_type === "VIDEO" ? (
      <>
        <VideoIcon className="h-3.5 w-3.5 text-blue-500" />
        <span className="text-blue-600">
          {t("booking.remoteConsultation")}
        </span>
      </>
    ) : (
      <>
        <Clock className="h-3.5 w-3.5 text-emerald-600" />
        <span className="text-emerald-600">
          {t("booking.inPersonConsultation")}
        </span>
      </>
    )}
  </CardDescription>
</div>

                            </div>

                            {/* RIGHT: Duration + Price */}
                            <div className="flex flex-row sm:flex-col justify-between sm:gap-1 gap-3 sm:items-end items-center flex-shrink-0 text-sm font-medium sm:text-right">
                              <CardDescription className="text-muted-foreground text-xs sm:text-sm">
                                {slot.duration_min} min
                              </CardDescription>
                              {slot.price && (
                                <CardDescription className="text-base font-semibold text-primary">
                                  €{slot.price}
                                </CardDescription>
                              )}
                            </div>
                          </CardContent>

                          <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t border-border/50">
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

                            <Button
                              onClick={() => handleSlotBooking(slot, n)}
                              disabled={
                                isBooking && selectedSlot === slot.slot_id
                              }
                              className="w-full sm:w-auto min-w-[150px] h-9 text-sm font-medium"
                            >
                              {isBooking && selectedSlot === slot.slot_id
                                ? t("booking.booking")
                                : t("booking.bookNow")}
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })
                  )
                ) : (
                  <p className="text-center text-muted-foreground mt-8">
                    {t("booking.noSlots")}
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
