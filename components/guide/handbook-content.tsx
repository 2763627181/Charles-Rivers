import Image from "next/image";
import { BookOpen, Users2 } from "lucide-react";
import { ImageLightbox } from "@/components/guide/image-lightbox";
import { HealthDisclaimer } from "@/components/guide/health-disclaimer";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/types/dictionary";

export function HandbookContent({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-white p-6 sm:p-8 lg:grid-cols-[240px_1fr] lg:items-center">
        <ImageLightbox
          src="/images/reference/handbook/cover.jpg"
          alt={dictionary.health.handbookTitle}
          caption={dictionary.health.handbookTitle}
        >
          <div className="relative mx-auto aspect-[3/4] w-48 overflow-hidden rounded-lg border border-border shadow-md lg:w-full">
            <Image
              src="/images/reference/handbook/cover.jpg"
              alt={dictionary.health.handbookTitle}
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
        </ImageLightbox>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold text-navy">{dictionary.health.handbookTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dictionary.health.handbookDescription}</p>
          </div>
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Users2 className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
            <span>{dictionary.health.handbookAuthors}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled className="gap-2 bg-muted text-muted-foreground shadow-none hover:bg-muted">
              <BookOpen className="size-4" />
              {dictionary.health.handbookCta}
            </Button>
            <span className="text-xs font-medium text-muted-foreground">{dictionary.health.handbookUnavailable}</span>
          </div>
        </div>
      </div>

      <HealthDisclaimer text={dictionary.health.disclaimer} />
    </div>
  );
}
