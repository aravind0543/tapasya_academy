import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/sections/cta-banner";
import { CheckCircle2, Target, Focus } from "lucide-react";

export default function CompetitiveExamsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Competitive Exams (JEE & NEET)"
                subtitle="Rigorous, strategic preparation for India's toughest entrance exams."
            />

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeading title="Engineering & Medical Entrances" alignment="left" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mb-16">
                        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                            <Target className="h-12 w-12 text-blue-600 mb-6" />
                            <h3 className="text-2xl font-bold font-heading text-primary mb-4">JEE Main & Advanced</h3>
                            <p className="text-foreground/80 mb-6">Comprehensive preparation for admission into IITs, NITs, and IIITs. We focus on advanced problem-solving techniques and time management.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 shrink-0" /> Continuous mock tests</li>
                                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 shrink-0" /> Advanced conceptual clarity</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                            <Focus className="h-12 w-12 text-green-600 mb-6" />
                            <h3 className="text-2xl font-bold font-heading text-primary mb-4">NEET UG & EAMCET</h3>
                            <p className="text-foreground/80 mb-6">Targeted training for medical and state engineering entrances. We emphasize speed, accuracy, and rigorous biology/chemistry revision.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-600 mr-2 shrink-0" /> NCERT line-by-line mastery</li>
                                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-600 mr-2 shrink-0" /> Negative marking mitigation techniques</li>
                            </ul>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-foreground/80">
                        <h3 className="text-2xl font-bold text-primary font-heading">Our Unique Approach</h3>
                        <p>
                            Unlike mass institutes that rely on rote memorisation of formulas, we teach the derivation and fundamental principles first. Once the concept is clear, we introduce shortcut methods and time-saving techniques. This two-pronged approach ensures students can tackle unfamiliar problems during the actual exam without panicking.
                        </p>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
