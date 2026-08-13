import { TriangleAlert } from "lucide-react";

export function EmergencyWarning({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-danger/25 bg-red-50 px-4 py-3.5 text-sm text-red-900">
      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-danger/15 text-danger">
        <TriangleAlert className="size-3.5" aria-hidden="true" />
      </span>
      <p className="font-medium">{text}</p>
    </div>
  );
}
