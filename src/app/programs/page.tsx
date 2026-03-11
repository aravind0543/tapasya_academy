import { PageHero } from "@/components/layout/page-hero";
import { ProgramsGrid } from "@/components/sections/programs-grid";
import { CTABanner } from "@/components/sections/cta-banner";

export default function ProgramsOverviewPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Programs Tailored for Every Stage of Your Journey"
                subtitle="From strong middle-school foundations to top-tier competitive exam success."
            />

            {/* We can re-use the ProgramsGrid section from the homepage which showcases all 3 main tiles */}
            <div className="pt-12 pb-24 bg-white relative">
                <ProgramsGrid />
            </div>

            <CTABanner />
        </main>
    );
}
