// src/app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { StepsSection } from "@/components/sections/StepsSection";

export default function Page() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center overflow-x-hidden">
        <img
          src="/grafismo/grafismo-bg-1.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute lg:scale-86 xl:scale-100 lg:-right-48 xl:-right-20 top-60 -z-50 hidden md:block"
        />
        <HeroCarousel />
        <StepsSection />
        <TrustSignalsSection />
        <AchievementsSection />
        <LeadFormSection />
        <FAQSection />
      </div>
    </>
  );
}
