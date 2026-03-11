import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABanner() {
    return (
        <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6 tracking-tight">
                    Ready to Begin Your Journey?
                </h2>
                <p className="text-xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto">
                    Admissions open for all classes. Limited seats per batch — because we guarantee personal attention.
                </p>
                <Link href="/admissions">
                    <Button className="bg-accent hover:bg-accent-dark text-foreground font-bold rounded-full h-14 px-10 text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all">
                        Book a Free Counselling Session
                    </Button>
                </Link>
            </div>
        </section>
    );
}
