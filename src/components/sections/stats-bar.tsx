import { StatCounter } from "@/components/ui/stat-counter";

export function StatsBar() {
    return (
        <section className="bg-primary-dark text-white py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
                    <StatCounter end={15} suffix="+" label="Years of Excellence" />
                    <StatCounter end={500} suffix="+" label="Students Guided" />
                    <StatCounter end={4} suffix=".7★" label="Google Rating" duration={2} />
                    <StatCounter end={100} suffix="%" label="Personal Attention" />
                </div>
            </div>
        </section>
    );
}
