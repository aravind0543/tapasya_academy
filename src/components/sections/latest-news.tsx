import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

const NEWS = [
    {
        title: "Summer Intensive Batches Starting Soon",
        date: "May 15, 2024",
        excerpt: "Join our intensive bridge courses designed to give students a head start for the upcoming academic year. Limited seats per batch.",
    },
    {
        title: "NEET UG 2024 Crash Course Announcement",
        date: "April 02, 2024",
        excerpt: "Final push for medical aspirants! Enrol in our 45-day focused revision program with weekly mock tests and personal doubt-clearing sessions.",
    },
    {
        title: "Congratulations to our CBSE Toppers!",
        date: "March 28, 2024",
        excerpt: "We are proud to announce that 15 of our students secured over 95% in the recent board examinations. See their stories here.",
    }
];

export function LatestNews() {
    return (
        <section className="py-24 bg-bg-light relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <SectionHeading
                    title="What's Happening"
                    subtitle="Latest news, announcements, and updates from Tapasya Academy."
                    alignment="left"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {NEWS.map((item, index) => (
                        <Link href="/blog" key={index} className="group">
                            <Card className="h-full hover:shadow-lg transition-shadow border-none bg-white">
                                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                                        <Calendar className="mr-2 h-4 w-4" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl font-bold font-heading mb-3 text-primary group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                                        {item.excerpt}
                                    </p>
                                    <div className="mt-6 text-accent font-bold text-sm tracking-wide uppercase flex items-center">
                                        Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
