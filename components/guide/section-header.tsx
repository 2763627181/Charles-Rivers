import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <Reveal className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-light-blue px-3 py-1 text-xs font-semibold tracking-wide text-corporate-blue uppercase">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{title}</h1>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={cn("max-w-2xl text-base leading-relaxed text-muted-foreground", align === "center" && "mx-auto")}>
            {description}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
