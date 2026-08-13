import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { SectionHeader } from "@/components/guide/section-header";
import { AgingExplorer } from "@/components/guide/aging-explorer";
import type { Species } from "@/types/common";

export default async function AgingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ species?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const { species } = await searchParams;
  const initialSpecies: Species = species === "rat" ? "rat" : "mouse";

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader eyebrow={dictionary.nav.guide} title={dictionary.aging.title} description={dictionary.aging.subtitle} />
      <AgingExplorer initialSpecies={initialSpecies} />
    </div>
  );
}
