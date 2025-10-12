"use client";
import { Toaster as Sonner, toast } from "sonner";

/**
 * ReactPress-compatible Shadcn-style toaster (no next-themes)
 * Use: import { toast, Toaster } from "@/components/ui/sonner"
 */
export function Toaster(props) {
  return (
    <Sonner
      position="top-right"
      richColors
      closeButton
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { toast };
