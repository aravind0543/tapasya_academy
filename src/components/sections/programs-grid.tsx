import { SectionHeading } from "@/components/ui/section-heading";
import { ProgramCard } from "@/components/ui/program-card";
import { BookOpen, Target, Award } from "lucide-react";

const PROGRAMS = [
    {
        title: "Regular Curriculum",
        description: "Expert coaching for Classes 6–12 across CBSE, ICSE, IB, and State Boards. Focus on chapter-wise conceptual clarity and board exam excellence.",
        icon: BookOpen,
        badges: ["Classes 6-12", "CBSE", "ICSE", "State Board"],
        href: "/programs/regular-curriculum"
    },
    {
        title: "Competitive Exams",
        description: "Rigorous preparation for JEE Main/Advanced, NEET UG, and EAMCET. We build exam temperament and problem-solving speed.",
        icon: Target,
        badges: ["JEE Main/Adv", "NEET", "EAMCET"],
        href: "/programs/competitive-exams"
    },
    {
        title: "Foundation Courses",
        description: "Early conceptual base building for Classes 6–10. Prepares students for competitive coaching institute admissions like Fiitjee and Narayana.",
        icon: Award,
        badges: ["Classes 6-10", "Olympiad", "NTSE Prep"],
        href: "/programs/foundation"
    }
];

export function ProgramsGrid() {
    return (
        <section className="py-24 bg-bg-light relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <SectionHeading
                    title="Our Programs"
                    subtitle="Tailored learning paths for every stage of your academic journey."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {PROGRAMS.map((program, index) => (
                        <ProgramCard key={index} {...program} />
                    ))}
                </div>
            </div>
        </section>
    );
}
