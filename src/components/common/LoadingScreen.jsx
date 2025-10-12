// src/components/ui/LoadingScreen.jsx
import { Loader2 } from "lucide-react";

export default function LoadingScreen({ message = "Loading..." }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 text-muted-foreground">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="text-sm">{message}</p>
    </div>
  );
}
