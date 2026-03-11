import { PageHero } from "@/components/layout/page-hero";
import { AssistedStudyExplainer } from "@/components/sections/assisted-study-explainer";
import { CTABanner } from "@/components/sections/cta-banner";

export default function AssistedStudyPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="The Assisted Study Approach"
                subtitle="A proven methodology focused on individual attention and concept mastery."
            />

            <AssistedStudyExplainer />

            <CTABanner />
        </main>
    );
}
