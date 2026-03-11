"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

interface StatCounterProps {
    end: number;
    label: string;
    suffix?: string;
    duration?: number;
}

export function StatCounter({ end, label, suffix = "", duration = 2 }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 font-heading">
                {count}
                {suffix}
            </div>
            <div className="text-sm md:text-base text-blue-100 font-medium">
                {label}
            </div>
        </div>
    );
}
