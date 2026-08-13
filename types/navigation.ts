import type { Dictionary } from "@/types/dictionary";

export interface NavLink {
  href: string;
  labelKey: keyof Dictionary["nav"];
  icon: string;
}

export interface HealthCategoryLink {
  href: string;
  category: "all" | "head-body" | "eyes" | "repro-digest" | "neurological" | "emergency" | "handbook";
  labelKey: keyof Dictionary["health"]["categories"];
  icon: string;
}
