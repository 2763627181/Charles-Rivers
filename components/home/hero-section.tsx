"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Languages, ArrowRight } from "lucide-react";
import { useDictionary } from "@/lib/context/locale-context";
import { localeCookieName, localeNames, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { ParallaxImage } from "@/components/motion/parallax-image";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export function HeroSection() {
  const dictionary = useDictionary();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-corporate-blue">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <StaggerGroup className="flex flex-col gap-6">
          <StaggerItem>
            <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
              {dictionary.home.badge}
            </span>
          </StaggerItem>

          <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl">
            <StaggerItem as="span" className="block">
              {dictionary.home.title}
            </StaggerItem>
            <StaggerItem as="span" className="mt-1 block text-3xl font-medium text-white/80 sm:text-4xl">
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
            {(["fr", "de", "nl", "zh"] as const).map((code) => (
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
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto hidden aspect-4/3 w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <ParallaxImage
              mode="parallax"
              strength={18}
              className="h-full w-full rounded-3xl border border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm"
            >
              <Image
                src="/images/reference/home/hero-mice-trio.jpg"
                alt="Black, agouti and white laboratory mice used throughout this reference guide"
                fill
                sizes="480px"
                priority
                className="object-cover"
              />
            </ParallaxImage>
            <ParallaxImage
              mode="parallax"
              strength={34}
              className="absolute -right-6 -bottom-8 h-40 w-52 rounded-2xl border-4 border-white/90 bg-white shadow-xl"
            >
              <Image
                src="/images/reference/coat-colors/agouti.jpg"
                alt="Agouti coat color mouse"
                fill
                sizes="208px"
                className="object-cover"
              />
            </ParallaxImage>
            <ParallaxImage
              mode="parallax"
              strength={40}
              className="absolute -top-6 -left-6 h-32 w-40 rounded-2xl border-4 border-white/90 bg-white shadow-xl"
            >
              <Image
                src="/images/reference/aging/mouse/day-07.jpg"
                alt="Laboratory mouse pup at day 7"
                fill
                sizes="160px"
                className="object-cover"
              />
            </ParallaxImage>
          </div>
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
        "group inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-base font-semibold text-navy",
        "bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      )}
    >
      <Languages className="size-5 text-corporate-blue" aria-hidden="true" />
      {label}
      <ArrowRight className="size-4 text-corporate-blue transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
