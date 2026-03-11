import { PageHero } from "@/components/layout/page-hero";
import { LocationSection } from "@/components/sections/location-section";
import { EnquiryForm } from "@/components/ui/enquiry-form";

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Contact Us"
                subtitle="We're here to answer all your queries regarding admissions and programs."
            />

            <section className="py-24 bg-bg-light relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-primary mb-6">Send us a message</h2>
                            <p className="text-foreground/80 mb-10 leading-relaxed text-lg">
                                Whether you have a question about the fee structure, batch timings, or our assisted study methodology, our team is ready to help you out.
                            </p>

                            <EnquiryForm />
                        </div>

                        <div className="hidden lg:block relative h-full min-h-[600px] rounded-3xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
                            <div
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-center p-12 text-white">
                                <h3 className="text-4xl font-bold font-heading mb-6">"Education is not the learning of facts, but the training of the mind to think."</h3>
                                <p className="text-xl text-blue-100 font-medium">— Albert Einstein</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Render Location Section for Maps/Address */}
            <LocationSection />
        </main>
    );
}
