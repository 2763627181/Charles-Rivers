"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/lib/context/locale-context";
import type { AgingStage } from "@/types/aging";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "@/components/motion/parallax-image";

export function AgingCard({ stage, delay = 0 }: { stage: AgingStage; delay?: number }) {
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
        className={cn(
          "group flex animate-in flex-col overflow-hidden rounded-xl border border-border bg-white text-left shadow-sm fade-in slide-in-from-bottom-2 duration-300 ease-out",
          "transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-medium-blue/50 hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue"
        )}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-muted">
          {stage.image ? (
            <ParallaxImage className="absolute inset-0">
              <Image
                src={stage.image}
                alt={stage.label[locale]}
                fill
                sizes="(min-width: 1280px) 13vw, (min-width: 768px) 22vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </ParallaxImage>
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-1.5 bg-light-blue text-corporate-blue">
              <ImageOff className="size-5" aria-hidden="true" />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-1 p-3">
          <span className="text-sm font-semibold text-navy">{stage.label[locale]}</span>
          {stage.description && (
            <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {stage.description[locale]}
            </span>
          )}
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg gap-0 overflow-hidden p-0 sm:rounded-2xl">
          <VisuallyHidden.Root>
            <DialogTitle>{stage.label[locale]}</DialogTitle>
          </VisuallyHidden.Root>
          <div className="relative aspect-4/3 w-full bg-muted">
            {stage.image ? (
              <Image src={stage.image} alt={stage.label[locale]} fill sizes="512px" className="object-cover" />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-2 bg-light-blue text-corporate-blue">
                <ImageOff className="size-8" aria-hidden="true" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 p-5">
            <div className="flex items-center gap-2">
              <Badge className="border-transparent bg-corporate-blue text-white">{stage.label[locale]}</Badge>
            </div>
            {stage.description && (
              <p className="text-sm leading-relaxed text-foreground">{stage.description[locale]}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
