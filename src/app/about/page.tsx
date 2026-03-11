import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/sections/cta-banner";
import { FacultyCard } from "@/components/ui/faculty-card";
import { CheckCircle2, Shield, Heart, Award, Clock, Lightbulb } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="A Legacy Built on Genuine Care"
                subtitle="15+ years of transforming potential into excellence in Hyderabad."
            />

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <SectionHeading title="Our Story" />
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        Tapasya Academy was founded with a single powerful vision: to provide an alternative to the mass-factory coaching models that dominate Hyderabad. We saw brilliant students getting lost in classrooms of 100+, their doubts ignored and their confidence eroded.
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        Led by <strong>Mr. Madhusudhana Reddy (Chemistry)</strong> and <strong>Mr. Srinath (Mathematics)</strong>, we built Tapasya on the foundation of the <em>Assisted Study Approach</em>. For over 15 years, we have maintained strict limits on batch sizes, ensuring every student receives the mentorship, doubt-clearing, and concept clarity they deserve.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-bg-light relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-primary">
                            <h3 className="text-2xl font-bold font-heading text-primary mb-4">Our Mission</h3>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                To provide every student with personalised, concept-first coaching that builds real understanding, confidence, and a clear pathway to their dream career.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-accent">
                            <h3 className="text-2xl font-bold font-heading text-primary mb-4">Our Vision</h3>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                To be Hyderabad's most trusted boutique coaching institute — where every student leaves not just better-prepared for exams, but truly transformed as learners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeading title="Core Values" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
                        {[
                            { title: "Integrity", icon: Shield, color: "text-blue-500" },
                            { title: "Empathy", icon: Heart, color: "text-red-500" },
                            { title: "Excellence", icon: Award, color: "text-yellow-500" },
                            { title: "Discipline", icon: Clock, color: "text-indigo-500" },
                            { title: "Innovation", icon: Lightbulb, color: "text-green-500" },
                            { title: "Small Batches", icon: CheckCircle2, color: "text-primary" },
                        ].map((value, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl bg-bg-light/50 hover:bg-bg-light transition-colors">
                                <value.icon className={`h-12 w-12 mb-4 ${value.color}`} />
                                <h4 className="text-xl font-bold font-heading text-primary">{value.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary-dark text-white relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionHeading title="Meet the Leadership" alignment="left" className="!mb-12 [&>h2]:text-white" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <FacultyCard
                            name="Mr. Madhusudhana Reddy"
                            subject="Chemistry · Founder"
                            qualification="M.Sc. Chemistry"
                            experience="20+ Years"
                            bio="A visionary educator who believes that true learning happens when concepts connect with curiosity. His unique methodology in Chemistry breaks down complex organic and physical chemistry problems into simple, intuitive steps."
                        />
                        <FacultyCard
                            name="Mr. Srinath"
                            subject="Mathematics · Co-Founder"
                            qualification="M.Sc. Mathematics"
                            experience="18+ Years"
                            bio="Known for his rigorous yet highly accessible approach to Mathematics. Srinath Sir has guided hundreds of students to crack the toughest IIT-JEE Advanced math sections through sheer conceptual clarity."
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionHeading title="Why We're Different" subtitle="Tapasya Academy vs Mass Institutes" />
                    <div className="overflow-x-auto mt-12">
                        <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-4 md:p-6 font-heading text-lg">Feature</th>
                                    <th className="p-4 md:p-6 font-heading text-lg bg-accent text-primary">Tapasya Academy</th>
                                    <th className="p-4 md:p-6 font-heading text-lg bg-primary-dark/50">Mass Institutes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {[
                                    { f: "Batch Size", t: "Small (Strictly Limited)", m: "60–100+ students per class" },
                                    { f: "Attention", t: "Individual & Guided", m: "Group / Broadcast only" },
                                    { f: "Approach", t: "Assisted Study Model", m: "Factory Lecture Model" },
                                    { f: "Doubt Clearing", t: "Daily & Personalised", m: "Scheduled & Crowded" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-bg-light transition-colors">
                                        <td className="p-4 md:p-6 font-semibold text-foreground">{row.f}</td>
                                        <td className="p-4 md:p-6 font-bold text-primary bg-accent/5">{row.t}</td>
                                        <td className="p-4 md:p-6 text-muted-foreground">{row.m}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
