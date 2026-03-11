import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    alignment?: "left" | "center" | "right";
}

export function SectionHeading({
    title,
    subtitle,
    alignment = "center",
    className,
    ...props
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 mb-10",
                {
                    "items-start text-left": alignment === "left",
                    "items-center text-center": alignment === "center",
                    "items-end text-right": alignment === "right",
                },
                className
            )}
            {...props}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
            )}
            <div
                className={cn("h-1 w-20 bg-gradient-accent rounded-full mt-2", {
                    "mx-auto": alignment === "center",
                    "ml-auto": alignment === "right",
                })}
            />
        </div>
    );
}
