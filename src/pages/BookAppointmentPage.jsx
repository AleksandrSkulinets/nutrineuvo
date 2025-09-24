import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"

// Mock data
const THERAPISTS = [
  {
    id: "1",
    name: "Liisa Korhonen",
    title: "Ravitsemusterapeutti",
    location: "Helsinki",
    image: "/therapist-avatar.png",
    duration: 30,
  },
  {
    id: "2",
    name: "Mikko Virtanen",
    title: "Ravitsemusterapeutti",
    location: "Espoo",
    image: "/therapist-avatar.png",
    duration: 45,
  },
  {
    id: "3",
    name: "Anna Nieminen",
    title: "Ravitsemusterapeutti",
    location: "Vantaa",
    image: "/therapist-avatar.png",
    duration: 60,
  },
]

// Fake times
const AVAILABLE_TIMES = ["09:00", "10:30", "13:00", "14:45", "16:00", "18:30", "20:00"]

// Helper to decide time slot category
function getSlotPeriod(time) {
  const [h] = time.split(":").map(Number)
  if (h < 12) return "aamu"
  if (h < 17) return "iltapaiva"
  return "ilta"
}

export default function BookingLayout() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [location, setLocation] = useState("Kaikki")
  const [service, setService] = useState("Kaikki")
  const [expert, setExpert] = useState("Kaikki")
  const [tab, setTab] = useState("kaikki")

  const filteredTimes =
    tab === "kaikki"
      ? AVAILABLE_TIMES
      : AVAILABLE_TIMES.filter((t) => getSlotPeriod(t) === tab)

  const totalSlots = filteredTimes.length * THERAPISTS.length

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
            <SelectItem value="konsultaatio">Ravitsemuskonsultaatio</SelectItem>
            <SelectItem value="seuranta">Seurantakäynti</SelectItem>
          </SelectContent>
        </Select>

        <Select value={expert} onValueChange={setExpert}>
          <SelectTrigger>
            <SelectValue placeholder="Valitse asiantuntija" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Kaikki">Kaikki asiantuntijat</SelectItem>
            {THERAPISTS.map((t) => (
              <SelectItem key={t.id} value={t.name}>
                {t.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* --- Main Layout: Calendar + Results --- */}
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Left: Calendar */}
       <Card className="border-0 shadow-none">
          <CardContent className="p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="bg-muted rounded w-full"
            />
          </CardContent>
        </Card>

        {/* Right: Therapist list */}
        <div className="space-y-4">
          {/* Info about available slots */}
          <div className="px-2 text-sm font-medium">
            {totalSlots > 0 ? (
              <p className="text-foreground font-bold text-md lg:text-xl">
                
                {selectedDate.toLocaleDateString("fi-FI", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
                • {totalSlots} vapaata aikaa
              </p>
            ) : (
              <p className="text-red-500">Ei vapaita aikoja valitulle päivälle.</p>
            )}
          </div>

          {/* Pills (Tabs) */}
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="flex gap-2 rounded-full bg-muted p-1">
              <TabsTrigger
                value="kaikki"
                className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Kaikki
              </TabsTrigger>
              <TabsTrigger
                value="aamu"
                className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Aamu
              </TabsTrigger>
              <TabsTrigger
                value="iltapaiva"
                className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Iltapäivä
              </TabsTrigger>
              <TabsTrigger
                value="ilta"
                className="rounded-full w-full px-4 py-1 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Ilta
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Slots list */}
          {totalSlots > 0 ? (
            filteredTimes.flatMap((time, i) =>
              THERAPISTS.map((t) => (
                <Card key={`${t.id}-${i}-${time}`}>
                  <CardContent className="flex  flex-row sm:items-center sm:justify-between gap-4 p-4 border-b">
                    {/* Left side: Date + Time + Duration */}
                    <div className=" text-center text-sm font-medium">
                      <div className="text-muted-foreground">
                        {selectedDate.toDateString() ===
                        new Date().toDateString()
                          ? "Tänään"
                          : selectedDate.toLocaleDateString("fi-FI", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                            })}
                      </div>
                      <div className="text-lg font-bold text-primary">{time}</div>
                      <div className="text-muted-foreground">{t.duration} min</div>
                    </div>

                    {/* Middle: Therapist info */}
                    <div className="flex items-center gap-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={t.image} />
                        <AvatarFallback>
                          {t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {t.title} • {t.location}
                        </p>
                      </div>
                    </div>

                    {/* Right: Book button */}
                    <Button className="w-full sm:w-auto">Varaa</Button>
                  </CardContent>
                </Card>
              ))
            )
          ) : (
            <div className="p-6 text-center text-muted-foreground">
              Ei vapaita aikoja tälle päivälle.
            </div>
          )}
        </div>
      </div>
    </div>
      </section>

  )
}
