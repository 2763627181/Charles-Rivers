import { GuideSidebar } from "@/components/layout/guide-sidebar";
import { BreadcrumbNav } from "@/components/layout/breadcrumb-nav";

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-[1440px]">
      <GuideSidebar />
      <div className="min-w-0 flex-1">
        <BreadcrumbNav />
        <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
      </div>
    </div>
  );
}
