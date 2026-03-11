import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    className?: string;
}

export function PageHero({
    title,
    subtitle,
    backgroundImage = "/images/hero-bg.jpg",
    className,
}: PageHeroProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 text-center px-4 overflow-hidden",
                className
            )}
        >
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                <div className="absolute inset-0 bg-primary/90 md:bg-primary/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 font-heading drop-shadow-md">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-blue-50 font-medium max-w-2xl drop-shadow">
                        {subtitle}
                    </p>
                )}
                <div className="h-1 w-24 bg-gradient-accent rounded-full mt-8 opacity-80" />
            </div>
        </div>
    );
}
