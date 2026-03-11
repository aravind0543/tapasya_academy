import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FacultyCard } from "@/components/ui/faculty-card";
import { CTABanner } from "@/components/sections/cta-banner";

// Note: In a real app, you'd pull this from a CMS or data file
const FACULTY = [
    {
        name: "Mr. Madhusudhana Reddy",
        subject: "Chemistry · Founder",
        qualification: "M.Sc. Chemistry",
        experience: "20+ Years",
        bio: "A visionary educator who believes that true learning happens when concepts connect with curiosity. His unique methodology in Chemistry breaks down complex organic and physical chemistry problems into simple, intuitive steps."
    },
    {
        name: "Mr. Srinath",
        subject: "Mathematics · Co-Founder",
        qualification: "M.Sc. Mathematics",
        experience: "18+ Years",
        bio: "Known for his rigorous yet highly accessible approach to Mathematics. Srinath Sir has guided hundreds of students to crack the toughest IIT-JEE Advanced math sections through sheer conceptual clarity."
    },
    {
        name: "Mrs. K. Lakshmi",
        subject: "Physics",
        qualification: "M.Sc. Physics, B.Ed.",
        experience: "15+ Years",
        bio: "Passionate about making complex physical phenomena easy to grasp. She specializes in board exam preparations and building strong mechanical foundations for JEE aspirants."
    },
    {
        name: "Dr. A. Sharma",
        subject: "Biology",
        qualification: "Ph.D. Biological Sciences",
        experience: "12+ Years",
        bio: "Expert in NEET Zoology and Botany. Dr. Sharma's detailed schematic teaching ensures students remember massive amounts of biological data with ease."
    }
];

export default function FacultyPage() {
    return (
        <main className="flex min-h-screen flex-col w-full">
            <PageHero
                title="Our Faculty"
                subtitle="Mentors selected for subject mastery and teaching empathy."
            />

            <section className="py-24 bg-bg-light relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <SectionHeading
                        title="Learn from the Best"
                        subtitle="Meet the experienced educators who will guide your journey."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {FACULTY.map((faculty, i) => (
                            <FacultyCard key={i} {...faculty} />
                        ))}
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-2xl border border-border shadow-sm text-center max-w-3xl mx-auto">
                        <h4 className="text-xl font-bold font-heading text-primary mb-4">Our Screening Process</h4>
                        <p className="text-muted-foreground">
                            At Tapasya Academy, we don't just hire lecturers; we bring in mentors. Every faculty member undergoes a rigorous selection process testing not only their academic brilliance but their ability to connect with students, simplify complex topics, and show genuine patience during doubt-clearing sessions.
                        </p>
                    </div>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
