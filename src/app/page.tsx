// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroCarousel } from "@/components/sections/HeroCarousel";

export default function Page() {
  return (
    <>
      <HeroCarousel />
      <TrustSignalsSection />
      <AchievementsSection />
      <LeadFormSection />
      <FAQSection />
    </>
  );
}
