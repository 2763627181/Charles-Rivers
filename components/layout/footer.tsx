import Image from "next/image";
import type { Dictionary } from "@/types/dictionary";
import { LanguageSelector } from "@/components/layout/language-selector";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <Image
            src="/images/brand/charles-river-logo-mark-navy.png"
            alt="Charles River"
            width={464}
            height={104}
            className="h-6 w-auto object-contain"
          />
          <p className="mt-2 text-sm text-muted-foreground">{dictionary.footer.tagline}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{dictionary.footer.referenceNote}</p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <LanguageSelector />
          <p className="text-xs text-muted-foreground">{dictionary.footer.rightsNote}</p>
        </div>
      </div>
    </footer>
  );
}
