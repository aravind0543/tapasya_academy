import { HeroHome } from "@/components/sections/hero-home";
import { WhyTapasya } from "@/components/sections/why-tapasya";
import { ProgramsGrid } from "@/components/sections/programs-grid";
import { StatsBar } from "@/components/sections/stats-bar";
import { TestimonialsSlider } from "@/components/sections/testimonials-slider";
import { AssistedStudyExplainer } from "@/components/sections/assisted-study-explainer";
import { LatestNews } from "@/components/sections/latest-news";
import { LocationSection } from "@/components/sections/location-section";
import { CTABanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroHome />
      <WhyTapasya />
      <ProgramsGrid />
      <StatsBar />
      <TestimonialsSlider />
      <AssistedStudyExplainer />
      <LatestNews />
      <LocationSection />
      <CTABanner />
    </main>
  );
}
