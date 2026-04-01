import { SiteFooter } from "@/components/heykal/SiteFooter";
import { SiteHeader } from "@/components/heykal/SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:z-[300] focus:m-4 focus:inline-block focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground"
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
