"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDictionary } from "@/lib/context/locale-context";
import { localeCookieName, localeNames, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function HeroSection() {
  const dictionary = useDictionary();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#01112B] via-[#023d63] to-[#0099DA]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />

      <Image
        src="/images/brand/charles-river-logo-mark.png"
        alt="Charles River"
        width={464}
        height={104}
        priority
        className="absolute top-6 right-6 h-7 w-auto object-contain sm:top-8 sm:right-8 sm:h-8 lg:top-10 lg:right-10 lg:h-9"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <StaggerGroup className="flex flex-col gap-6">
          <h1 className="text-4xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            <StaggerItem as="span" className="block">
              {dictionary.home.title}
            </StaggerItem>
            <StaggerItem as="span" className="block">
              {dictionary.home.titleAccent}
            </StaggerItem>
          </h1>

          <StaggerItem>
            <p className="max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {dictionary.home.description}
            </p>
          </StaggerItem>

          <StaggerItem className="mt-2 flex flex-col gap-3 sm:flex-row">
            <LanguageCta locale="en" label={localeNames.en} />
            <LanguageCta locale="es" label={localeNames.es} />
          </StaggerItem>

          <StaggerItem className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-medium text-white/50">{dictionary.language.chooseLanguage}:</span>
            {(["pt", "fr", "it", "zh"] as const).map((code) => (
              <Link
                key={code}
                href={`/${code}/guide`}
                onClick={() => setLocaleCookie(code)}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:border-white/40 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {localeNames[code]}
              </Link>
            ))}
          </StaggerItem>
        </StaggerGroup>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="mx-auto w-full max-w-xl"
        >
          <Image
            src="/images/reference/home/hero-mice-trio.jpg"
            alt="Black, agouti and white laboratory mice used throughout this reference guide"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 560px, 90vw"
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

function LanguageCta({ locale, label }: { locale: Locale; label: string }) {
  return (
    <Link
      href={`/${locale}/guide`}
      onClick={() => setLocaleCookie(locale)}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-base font-bold tracking-wide text-white uppercase",
        "bg-corporate-blue transition-all duration-200 hover:-translate-y-0.5 hover:bg-medium-blue hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      )}
    >
      {label}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
