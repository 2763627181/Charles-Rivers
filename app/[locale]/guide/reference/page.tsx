import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";
import { SectionHeader } from "@/components/guide/section-header";
import { ReferenceGallery } from "@/components/guide/reference-gallery";

export default async function ReferencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader eyebrow={dictionary.nav.guide} title={dictionary.reference.title} description={dictionary.reference.subtitle} />
      <ReferenceGallery />
    </div>
  );
}
