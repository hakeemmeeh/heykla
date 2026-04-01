import { AppShell } from "@/components/heykal/AppShell";
import { CtaBand } from "@/components/heykal/CtaBand";
import { ControlRoomContinuity } from "@/components/heykal/ControlRoomContinuity";
import { HeroHome } from "@/components/heykal/HeroHome";
import { HomeIndustriesTeaser } from "@/components/heykal/HomeIndustriesTeaser";
import { HomeServicesPreview } from "@/components/heykal/HomeServicesPreview";
import { InteractiveCommandScene } from "@/components/heykal/InteractiveCommandScene";
import { Testimonials } from "@/components/heykal/Testimonials";
import { TrustStrip } from "@/components/heykal/TrustStrip";
import { WhyHeykal } from "@/components/heykal/WhyHeykal";

export default function HomePage() {
  return (
    <AppShell>
      <HeroHome />
      <div className="section-fade section-fade-strong"><TrustStrip /></div>
      <div className="section-fade section-fade-soft"><HomeServicesPreview /></div>
      <div className="section-fade section-fade-strong"><InteractiveCommandScene /></div>
      <div className="section-fade section-fade-soft"><WhyHeykal /></div>
      <div className="section-fade section-fade-strong"><ControlRoomContinuity /></div>
      <div className="section-fade section-fade-soft"><Testimonials /></div>
      <div className="section-fade section-fade-soft"><HomeIndustriesTeaser /></div>
      <div className="section-fade section-fade-strong"><CtaBand /></div>
    </AppShell>
  );
}
