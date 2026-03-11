import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Trophy, Lightbulb } from "lucide-react";

const PILLARS = [
    {
        title: "Small Batches",
        description: "Individual attention guaranteed. We never compromise on batch size limits to ensure focus.",
        icon: Users,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "Assisted Study",
        description: "Not just teaching — we guide, mentor, and bridge learning gaps outside class hours.",
        icon: BookOpen,
        color: "text-green-500",
        bg: "bg-green-50",
    },
    {
        title: "Proven Results",
        description: "Our alumni are at IITs, NITs, AIIMS, and top corporate firms like Morgan Stanley.",
        icon: Trophy,
        color: "text-accent-dark",
        bg: "bg-yellow-50",
    },
    {
        title: "Concept-First",
        description: "Deep concept clarity before shortcuts. We build real understanding for lifetime retention.",
        icon: Lightbulb,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
];

export function WhyTapasya() {
    return (
        <section className="py-24 bg-white relative z-10 pt-32 md:pt-40">
            <div className="container mx-auto px-4 max-w-7xl">
                <SectionHeading
                    title="Why Tapasya Academy?"
                    subtitle="Built on Four Pillars of Excellence"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {PILLARS.map((pillar, index) => (
                        <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 bg-bg-light/50">
                            <CardContent className="p-8 text-center flex flex-col items-center">
                                <div className={`h-16 w-16 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3 text-primary">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {pillar.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
