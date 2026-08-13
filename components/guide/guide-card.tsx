import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function GuideCard({
  href,
  index,
  icon: Icon,
  title,
  description,
  image,
  cta,
  delay = 0,
}: {
  href: string;
  index?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  cta: string;
  delay?: number;
}) {
  return (
    <Link
      href={href}
      style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
      className={cn(
        "group relative flex h-full animate-in flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm fade-in slide-in-from-bottom-2 duration-300 ease-out",
        "transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-medium-blue/50 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue"
      )}
    >
      <div className="flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl bg-light-blue text-corporate-blue transition-colors group-hover:bg-corporate-blue group-hover:text-white">
          <Icon className="size-5.5" aria-hidden="true" />
        </span>
        {index && <span className="font-mono text-xs font-medium text-muted-foreground/60">{index}</span>}
      </div>

      {image && (
        <div className="relative mt-5 h-32 w-full overflow-hidden rounded-xl border border-border bg-muted">
          <ParallaxImage className="absolute inset-0">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1024px) 320px, 45vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.1]"
            />
          </ParallaxImage>
        </div>
      )}

      <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-corporate-blue">
        {cta}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
