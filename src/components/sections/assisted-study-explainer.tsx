import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
    "Customised daily study plans",
    "One-on-one doubt clearing sessions",
    "Regular concept tracking & testing",
    "Mentorship beyond classroom hours",
    "Parent-teacher progress transparently shared"
];

export function AssistedStudyExplainer() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Using a solid color or gradient as placeholder until images are provided */}
                            <div className="aspect-[4/3] w-full bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-primary/5 pattern-dots" />
                                <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white max-w-sm">
                                    <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                                        <span className="text-2xl font-bold font-heading text-primary">A+</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary font-heading mb-2">Guided Learning Path</h4>
                                    <p className="text-sm text-muted-foreground">Every student receives a tailored approach to master difficult concepts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <SectionHeading
                            title="What is Assisted Study?"
                            alignment="left"
                            className="mb-8"
                        />

                        <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                            Assisted Study is a <strong className="text-primary font-semibold">personalised academic support system</strong>. It's not just extra tuition or group coaching — it's a guided learning partnership.
                        </p>

                        <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                            For students who feel lost in large classrooms of 60-100+ students, our approach ensures nobody falls behind. We identify specific learning gaps and continuously work to close them.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {BENEFITS.map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle2 className="h-6 w-6 text-success shrink-0 mr-3" />
                                    <span className="text-foreground font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/programs/assisted-study">
                            <Button className="bg-primary hover:bg-primary-light text-white font-bold rounded-full h-12 px-8">
                                Read More About Our Approach &rarr;
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
