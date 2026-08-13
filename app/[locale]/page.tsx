import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/home/hero-section";
import { QuickAccess } from "@/components/home/quick-access";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <HeroSection />
      <QuickAccess />
    </>
  );
}
