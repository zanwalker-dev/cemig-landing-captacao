// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TrustSignalsSection />
      <AchievementsSection />
      <LeadFormSection />
      <FAQSection />
    </>
  );
}
