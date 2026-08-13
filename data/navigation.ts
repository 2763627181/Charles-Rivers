import type { HealthCategoryLink, NavLink } from "@/types/navigation";

export const primaryNav: NavLink[] = [
  { href: "/guide", labelKey: "guide", icon: "LayoutGrid" },
  { href: "/guide/aging", labelKey: "aging", icon: "CalendarClock" },
  { href: "/guide/coat-colors", labelKey: "coatColors", icon: "Palette" },
  { href: "/guide/ear-identification", labelKey: "earId", icon: "ScanLine" },
  { href: "/guide/health", labelKey: "health", icon: "Stethoscope" },
  { href: "/guide/sexing", labelKey: "sexing", icon: "Users" },
];

export const healthCategoryNav: HealthCategoryLink[] = [
  { href: "/guide/health", category: "all", labelKey: "all", icon: "LayoutGrid" },
  { href: "/guide/health/head-body", category: "head-body", labelKey: "headBody", icon: "Activity" },
  { href: "/guide/health/eyes", category: "eyes", labelKey: "eyes", icon: "Eye" },
  { href: "/guide/health/repro-digest", category: "repro-digest", labelKey: "reproDigest", icon: "HeartPulse" },
  { href: "/guide/health/neurological", category: "neurological", labelKey: "neurological", icon: "Brain" },
  { href: "/guide/health/emergency", category: "emergency", labelKey: "emergency", icon: "TriangleAlert" },
  { href: "/guide/health/handbook", category: "handbook", labelKey: "handbook", icon: "BookOpen" },
];
