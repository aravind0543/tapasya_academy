import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const TESTIMONIALS = [
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
    }
];

export function TestimonialsSlider() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <SectionHeading
                    title="What Our Achievers Say"
                    subtitle="Real stories from students who transformed their potential into success."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {TESTIMONIALS.map((t, index) => (
                        <TestimonialCard key={index} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
