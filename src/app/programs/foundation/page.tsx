import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/sections/cta-banner";
import { CheckCircle2, Rocket } from "lucide-react";

export default function FoundationPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Foundation Courses (Classes 6–10)"
                subtitle="Building the intellectual groundwork for future success."
            />

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeading title="Start Early, Start Right" alignment="left" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mb-16 items-center">
                        <div>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                                Our Foundation program is designed for ambitious middle and high school students who aim to excel in future competitive exams or secure admissions into premier coaching institutes like Fiitjee, Narayana, and Sri Chaitanya.
                            </p>
                            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                                We focus on developing analytical thinking, logical reasoning, and a deep love for mathematics and science early on, going beyond the standard school curriculum.
                            </p>
                        </div>

                        <div className="bg-bg-light p-8 rounded-3xl border border-border">
                            <Rocket className="h-10 w-10 text-accent mb-6" />
                            <h4 className="text-xl font-bold text-primary font-heading mb-4">Program Goals</h4>
                            <ul className="space-y-4">
                                {[
                                    "Preparation for NTSE, Olympiads, and KVPY",
                                    "Advanced Math and Science fundamentals",
                                    "Mental ability and logical reasoning training",
                                    "Seamless transition to Class 11/12 JEE/NEET prep",
                                    "Entrance exam prep for premier senior secondary institutes"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mr-3" />
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
