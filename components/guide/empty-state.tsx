import { SearchX } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-white py-16 text-center">
      <span className="flex size-11 items-center justify-center rounded-full bg-light-blue text-corporate-blue">
        <SearchX className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-base font-semibold text-navy">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
