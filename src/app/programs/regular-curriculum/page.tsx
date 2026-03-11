import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/sections/cta-banner";
import { CheckCircle2, Book, Award } from "lucide-react";

export default function RegularCurriculumPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Regular Curriculum (Classes 6–12)"
                subtitle="Master your board exams with deep conceptual clarity."
            />

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeading title="Board Exams Mastery" alignment="left" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        <div>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                Our Regular Curriculum program is designed to build a rock-solid foundation for students across CBSE, ICSE, IB, and State Boards. We go beyond mere syllabus completion; we focus on genuine understanding that translates into excellent board exam scores.
                            </p>

                            <h4 className="text-xl font-bold text-primary font-heading mt-8 mb-4">Subjects Covered</h4>
                            <ul className="space-y-3 mb-8">
                                {["Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "English", "Commerce (Classes 11-12)"].map((sub, i) => (
                                    <li key={i} className="flex items-center">
                                        <Book className="h-5 w-5 text-accent mr-3" />
                                        <span className="font-medium text-foreground">{sub}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-bg-light p-8 rounded-3xl border border-border">
                            <h4 className="text-xl font-bold text-primary font-heading mb-6">Program Features</h4>
                            <ul className="space-y-4">
                                {[
                                    "Strictly small batch sizes for personal attention",
                                    "Chapter-wise concept notes and summaries",
                                    "Weekly and monthly assessment tests",
                                    "Previous years' paper solving and analysis",
                                    "Doubt clearing sessions before exams",
                                    "Regular parent-teacher progress tracking"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-success shrink-0 mr-3" />
                                        <span className="text-foreground text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
