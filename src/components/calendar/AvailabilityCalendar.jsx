import * as React from "react";
import { cn } from "../../lib/utils";
import { Calendar } from "../../components/ui/calendar";
import { api } from "../../lib/api";
import { Loader2 } from "lucide-react";

export function AvailabilityCalendar({
  onDateSelect,
  selectedDate, // ✅ NEW prop
  rangeDays = 30,
  className,
}) {
  const [availableDates, setAvailableDates] = React.useState(new Set());
  const [internalSelected, setInternalSelected] = React.useState(new Date());
  const [loading, setLoading] = React.useState(true);
  const hasInitialized = React.useRef(false);

  React.useEffect(() => {
    async function fetchAvailableDays() {
      try {
        setLoading(true);
        const start = new Date();
        const end = new Date();
        end.setDate(end.getDate() + rangeDays);

        const res = await api(
          `/public/available-days?start=${start
            .toISOString()
            .slice(0, 10)}&end=${end.toISOString().slice(0, 10)}`
        );

        if (res.success && Array.isArray(res.data)) {
          const available = new Set(res.data);
          setAvailableDates(available);

          const todayISO = new Date().toISOString().slice(0, 10);
          const firstAvailableISO =
            available.has(todayISO) || available.size === 0
              ? todayISO
              : Array.from(available)[0];

          const initialDate = new Date(`${firstAvailableISO}T00:00:00`);

          if (!hasInitialized.current) {
            hasInitialized.current = true;
            onDateSelect?.(firstAvailableISO, initialDate); // ✅ notify parent
          }
        } else {
          setAvailableDates(new Set());
        }
      } catch (err) {
        console.error("❌ [AvailabilityCalendar] Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAvailableDays();
  }, [rangeDays, onDateSelect]);

  function handleSelect(date) {
    if (!date) return;
    const iso = date.toISOString().slice(0, 10);
    setInternalSelected(date);
    onDateSelect?.(iso, date);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const availableAsDates = Array.from(availableDates).map(
    (iso) => new Date(`${iso}T00:00:00`)
  );

  return (
    <div className="relative">
<Calendar
      mode="single"
      selected={selectedDate || internalSelected} // ✅ external takes priority
      onSelect={handleSelect}
      showOutsideDays
      className={cn("  rounded-lg border bg-background p-3 shadow-sm", className)}
      disabled={(date) => {
        const iso = date.toISOString().slice(0, 10);
        return !availableDates.has(iso);
      }}
      modifiers={{
        available: availableAsDates,
      }}
      modifiersClassNames={{
        available:
          "bg-green-100 text-green-900 hover:bg-green-200 rounded-md font-medium",
      }}
    />
    </div>
    
  );
}
