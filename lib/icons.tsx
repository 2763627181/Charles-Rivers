import {
  LayoutGrid,
  CalendarClock,
  Palette,
  ScanLine,
  Stethoscope,
  Users,
  Activity,
  Eye,
  HeartPulse,
  Brain,
  TriangleAlert,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  LayoutGrid,
  CalendarClock,
  Palette,
  ScanLine,
  Stethoscope,
  Users,
  Activity,
  Eye,
  HeartPulse,
  Brain,
  TriangleAlert,
  BookOpen,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? LayoutGrid;
}
