
import React from "react";
import { Card, CardContent } from "./card";

/* ============================================================
 🗓️ CalendarSkeleton
 - Mimics the shape of the calendar while days are loading.
============================================================ */
export function CalendarSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-6 w-32 bg-muted rounded" />
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-muted/40 rounded-md"
          ></div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
 💼 SlotCardSkeleton
 - Simulates a loading appointment card.
============================================================ */
export function SlotCardSkeleton() {
  return (
    <Card className="shadow-sm bg-card/50 backdrop-blur-sm animate-pulse">
      <CardContent className="p-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-2">
          <div className="h-5 w-32 bg-muted rounded" />
          <div className="h-4 w-48 bg-muted/60 rounded" />
          <div className="flex gap-3 mt-2">
            <div className="h-4 w-20 bg-muted/50 rounded" />
            <div className="h-4 w-16 bg-muted/50 rounded" />
          </div>
        </div>

        <div className="flex items-center gap-4 justify-end flex-1">
          <div className="h-16 w-16 bg-muted rounded-full" />
          <div className="space-y-2">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-3 w-16 bg-muted/70 rounded" />
          </div>
          <div className="h-10 w-32 bg-muted rounded" />
        </div>
      </CardContent>
    </Card>
  );
}
