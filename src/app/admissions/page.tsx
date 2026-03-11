import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { EnquiryForm } from "@/components/ui/enquiry-form";
import { CheckCircle2, Phone, Calendar } from "lucide-react";

export default function AdmissionsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Admissions at Tapasya"
                subtitle="Your journey to academic excellence begins here."
            />

            <section className="py-24 bg-bg-light relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Process & Details */}
                        <div>
                            <SectionHeading title="Admission Process" alignment="left" />
                            <div className="space-y-8 mt-12 mb-12 relative before:absolute before:inset-0 before:left-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                {[
                                    { title: "Enquire", desc: "Fill out the online enquiry form or call us to express your interest." },
                                    { title: "Counselling", desc: "Attend a free one-on-one session to discuss your academic goals." },
                                    { title: "Assessment", desc: "A brief diagnostic test to understand your current baseline and gaps." },
                                    { title: "Enrolment", desc: "Secure your seat in our strictly limited batch size cohort." }
                                ].map((step, i) => (
                                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-primary text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                            {i + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-border">
                                            <h4 className="font-bold font-heading text-lg text-primary mb-2">{step.title}</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm flex items-start gap-4">
                                <Calendar className="h-8 w-8 text-accent shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg text-primary mb-2">Note on Fees & Schedules</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Fee structures and exact batch timings vary by class and program. Please submit an enquiry to receive the detailed prospectus. Scholarships are available for meritorious students based on diagnostic test performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Side Form */}
                        <div className="relative">
                            <div className="sticky top-24">
                                <EnquiryForm />

                                <div className="mt-8 text-center flex flex-col items-center justify-center">
                                    <p className="text-muted-foreground mb-4">Or speak directly to our counsellors:</p>
                                    <a href="tel:+918074498481" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors text-lg">
                                        <Phone className="mr-2 h-5 w-5" /> +91 8074498481
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
