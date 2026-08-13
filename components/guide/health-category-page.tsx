import { SectionHeader } from "@/components/guide/section-header";
import { HealthDisclaimer } from "@/components/guide/health-disclaimer";
import { EmergencyWarning } from "@/components/guide/emergency-warning";
import { HealthExplorer } from "@/components/guide/health-explorer";
import { clinicalSigns, getSignsByCategory } from "@/data/health";
import type { HealthCategory } from "@/types/health";
import type { Dictionary } from "@/types/dictionary";

export function HealthCategoryPage({
  category,
  dictionary,
}: {
  category: HealthCategory | "all";
  dictionary: Dictionary;
}) {
  const signs = category === "all" ? clinicalSigns : getSignsByCategory(category);
  const title =
    category === "all"
      ? dictionary.health.title
      : dictionary.health.categories[
          ({
            "head-body": "headBody",
            eyes: "eyes",
            "repro-digest": "reproDigest",
            neurological: "neurological",
            emergency: "emergency",
          } as const)[category]
        ];

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader eyebrow={dictionary.nav.health} title={title} description={dictionary.health.subtitle} />
      {category === "emergency" && <EmergencyWarning text={dictionary.health.emergencyWarning} />}
      <HealthDisclaimer text={dictionary.health.disclaimer} />
      <HealthExplorer signs={signs} activeCategory={category} />
    </div>
  );
}
