import { AppShell } from "@/components/haikal/AppShell";
import { CtaBand } from "@/components/haikal/CtaBand";
import { ControlRoomContinuity } from "@/components/haikal/ControlRoomContinuity";
import { HeroHome } from "@/components/haikal/HeroHome";
import { HomeIndustriesTeaser } from "@/components/haikal/HomeIndustriesTeaser";
import { HomeServicesPreview } from "@/components/haikal/HomeServicesPreview";
import { InteractiveCommandScene } from "@/components/haikal/InteractiveCommandScene";
import { Testimonials } from "@/components/haikal/Testimonials";
import { TrustStrip } from "@/components/haikal/TrustStrip";
import { WhyHaikal } from "@/components/haikal/WhyHaikal";

export default function HomePage() {
  return (
    <AppShell>
      <HeroHome />
      <div className="section-fade section-fade-strong"><TrustStrip /></div>
      <div className="section-fade section-fade-soft"><HomeServicesPreview /></div>
      <div className="section-fade section-fade-strong"><InteractiveCommandScene /></div>
      <div className="section-fade section-fade-soft"><WhyHaikal /></div>
      <div className="section-fade section-fade-strong"><ControlRoomContinuity /></div>
      <div className="section-fade section-fade-soft"><Testimonials /></div>
      <div className="section-fade section-fade-soft"><HomeIndustriesTeaser /></div>
      <div className="section-fade section-fade-strong"><CtaBand /></div>
    </AppShell>
  );
}
