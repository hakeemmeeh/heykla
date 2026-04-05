import { SiteFooter } from "@/components/haikal/SiteFooter";
import { SiteHeader } from "@/components/haikal/SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:z-[300] focus:m-4 focus:inline-block focus:bg-rose focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
