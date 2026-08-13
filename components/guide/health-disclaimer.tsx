import { Info } from "lucide-react";

export function HealthDisclaimer({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <p>{text}</p>
    </div>
  );
}
