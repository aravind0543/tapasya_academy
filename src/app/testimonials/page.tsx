import { PageHero } from "@/components/layout/page-hero";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CTABanner } from "@/components/sections/cta-banner";

const ALL_TESTIMONIALS = [
    {
        quote: "Tapasya Academy played a pivotal role in providing me with extra guidance & coaching for the IIT JEE, and I am sincerely grateful for their contribution in helping me secure admission into IIT (ISM) Dhanbad.",
        author: "C. Nikhil Chenna Reddy",
        designation: "System Software Engineer, Nvidia Graphics Ltd."
    },
    {
        quote: "Tapasya and Madhu sir's exceptional guidance were the pillars on which my life's skyscraper stands. Tapasya's influence cultivated balance in thought and conduct... Madhu sir will forever be my Guru.",
        author: "Shibashish Banerjee",
        designation: "Senior Manager, Morgan Stanley, Bangalore"
    },
    {
        quote: "I studied at Tapasya Academy more than 15 years ago. The impactful classes by Madhu sir and Srinath sir shaped my career. Their love for teaching instilled a deep appreciation for concept-based learning.",
        author: "P. Shrinjay",
        designation: "M.D. Psychiatry, Father Muller Medical College"
    },
    {
        quote: "Unlike mass institutes where I was just a roll number, Tapasya Academy gave me the individual attention I needed to clear all my doubts before the NEET exam. Highly recommended!",
        author: "M. Deepika",
        designation: "MBBS Student, Osmania Medical College"
    },
    {
        quote: "The assisted study approach changed everything for my daughter. She went from struggling in 10th grade Math to scoring 98% in her Class 12 Boards. Thank you Tapasya Academy.",
        author: "K. Ramesh Rao",
        designation: "Proud Parent"
    },
    {
        quote: "Srinath Sir's math tricks and Madhu Sir's physical chemistry notes are absolute gold. They teach you to think, not just how to memorize.",
        author: "A. Varun",
        designation: "B.Tech, NIT Warangal"
    }
];

export default function TestimonialsPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Student Stories"
                subtitle="Don't just take our word for it. Hear from those whose lives we've impacted."
            />

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ALL_TESTIMONIALS.map((t, index) => (
                            <TestimonialCard key={index} {...t} />
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold font-heading text-primary mb-6">Are you a Tapasya Alumnus?</h3>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full h-12 px-8 transition-colors shadow-md"
                        >
                            Submit Your Google Review
                        </a>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
