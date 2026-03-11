import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/sections/cta-banner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
    {
        q: "What classes and boards do you cover?",
        a: "We cover Classes 6 through 12. For regular curriculum, we cater to CBSE, ICSE, IB, and State Boards (Telangana/AP)."
    },
    {
        q: "What is your batch size policy?",
        a: "Unlike mass coaching institutes that pack 60-100 students in a room, our batches are strictly limited. This small batch size is non-negotiable and ensures personalized attention for every single student."
    },
    {
        q: "How is Tapasya different from Narayana or Sri Chaitanya?",
        a: "Those institutes operate on a scale-focused factory model. Tapasya Academy is a boutique, relationship-driven institute. We use an Assisted Study approach where teachers actively mentor students, clear doubts personally, and adapt to individual learning paces rather than just broadcasting lectures."
    },
    {
        q: "Do you offer online classes?",
        a: "Our primary strength lies in in-person, personalized mentorship, which requires physical presence. However, during special circumstances or for specific doubt-clearing sessions, we do incorporate hybrid/online mechanisms."
    },
    {
        q: "What is the fee structure?",
        a: "Fees vary depending on the class (6th vs 12th) and the program (Regular vs JEE/NEET). Please contact us or submit an enquiry to get the detailed fee structure for your specific requirement."
    },
    {
        q: "Can my child join mid-year?",
        a: "Yes, based on seat availability in the respective batch. We provide special 'bridge sessions' for mid-year joiners to help them catch up with the curriculum already covered."
    },
    {
        q: "Do you provide study material?",
        a: "Absolutely. We provide comprehensive study materials, chapter-wise concept notes, formula sheets, and mock test papers tailored to the specific board or competitive exam."
    },
    {
        q: "How do you track student progress?",
        a: "Progress is tracked through daily assisted study observations, weekly conceptual tests, and monthly comprehensive exams. Detailed progress reports are shared transparently with parents on a regular basis."
    },
    {
        q: "Is there a scholarship test for admission?",
        a: "Yes, we conduct a diagnostic assessment during the admission counselling phase. Deserving and meritorious students can qualify for fee scholarships based on their performance in this test."
    }
];

export default function FAQPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our programs, methodology, and admissions."
            />

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-4xl">
                    <SectionHeading title="Got Questions? We've Got Answers" />

                    <div className="mt-12">
                        <Accordion className="w-full">
                            {FAQS.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                                    <AccordionTrigger className="text-left text-lg font-bold font-heading text-primary hover:text-accent data-[state=open]:text-accent py-6">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
