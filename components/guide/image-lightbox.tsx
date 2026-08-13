"use client";

import { useState } from "react";
import Image from "next/image";
import { VisuallyHidden } from "radix-ui";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ImageLightbox({
  src,
  alt,
  caption,
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medium-blue"
        aria-label={alt}
      >
        {children}
      </button>
      <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none sm:rounded-2xl">
        <VisuallyHidden.Root>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden.Root>
        <div className="overflow-hidden rounded-2xl bg-navy">
          <div className="relative aspect-4/3 w-full sm:aspect-video">
            <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" quality={90} />
          </div>
          {caption && (
            <p className="border-t border-white/10 bg-navy px-5 py-3 text-sm text-white/90">{caption}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
