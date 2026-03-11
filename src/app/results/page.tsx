import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsSlider } from "@/components/sections/testimonials-slider";
import { CTABanner } from "@/components/sections/cta-banner";
import { Award, Star, TrendingUp } from "lucide-react";

export default function ResultsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Results & Achievements"
                subtitle="Proof of our commitment to student excellence."
            />

            {/* Banner Stats */}
            <section className="py-16 bg-primary-dark border-b-4 border-accent">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                        <div className="flex flex-col items-center p-6">
                            <Award className="h-12 w-12 text-accent mb-4" />
                            <h3 className="text-4xl font-bold font-heading mb-2">350+</h3>
                            <p className="text-lg text-blue-100">IIT / NIT Selections</p>
                        </div>
                        <div className="flex flex-col items-center p-6 border-y md:border-y-0 md:border-x border-white/20">
                            <TrendingUp className="h-12 w-12 text-success mb-4" />
                            <h3 className="text-4xl font-bold font-heading mb-2">95%+</h3>
                            <p className="text-lg text-blue-100">Board Exam Top Scorers</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <Star className="h-12 w-12 text-yellow-400 mb-4" />
                            <h3 className="text-4xl font-bold font-heading mb-2">200+</h3>
                            <p className="text-lg text-blue-100">NEET / Medical Identifiers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Alumni / Testimonials */}
            <TestimonialsSlider />

            <CTABanner />
        </main>
    );
}
