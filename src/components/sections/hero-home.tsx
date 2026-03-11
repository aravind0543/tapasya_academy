import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroHome() {
    return (
        <section className="relative min-h-[90vh] flex flex-col pt-32 pb-32 bg-primary-dark">
            {/* Background Image & Gradient Container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-hero opacity-90" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 my-auto">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                    <span>⭐ 4.7/5 Google Rating</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-display font-extrabold text-white mb-6 font-heading tracking-tight leading-tight">
                    Because You Deserve<br />to <span className="text-accent underline decoration-4 underline-offset-8">Shine.</span>
                </h1>

                <p className="text-xl md:text-2xl text-blue-50 font-medium max-w-3xl mb-10 drop-shadow">
                    Expert coaching for Classes 6–12 <br className="hidden md:block" />
                    <span className="opacity-80 text-lg">Board Exams · JEE · NEET · EAMCET</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/admissions">
                        <Button className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-foreground font-bold rounded-full h-14 px-8 text-lg hover:scale-105 transition-transform">
                            Enrol Now &rarr;
                        </Button>
                    </Link>
                    <Link href="/programs">
                        <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold rounded-full h-14 px-8 text-lg border-2">
                            Explore Programs
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Quick Stats Bar */}
            <div className="absolute bottom-0 w-full bg-white rounded-t-3xl md:rounded-t-full shadow-[0_-10px_40px_rgba(0,0,0,0.1)] py-6 z-20 translate-y-2 md:translate-y-1/2">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4 max-w-5xl mx-auto text-center divide-x-0 md:divide-x divide-border">
                        <div className="w-full sm:w-auto md:flex-1 px-4 text-primary font-bold text-sm md:text-base">
                            15+ Years of Excellence
                        </div>
                        <div className="w-full sm:w-auto md:flex-1 px-4 text-primary font-bold text-sm md:text-base">
                            Small Batch Sizes
                        </div>
                        <div className="w-full sm:w-auto md:flex-1 px-4 text-primary font-bold text-sm md:text-base">
                            CBSE · ICSE · State Board
                        </div>
                        <div className="w-full sm:w-auto md:flex-1 px-4 text-primary font-bold text-sm md:text-base">
                            IIT & NEET Achievers
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
