"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface FacultyCardProps {
    name: string;
    subject: string;
    qualification: string;
    experience: string;
    bio: string;
    imageUrl?: string;
}

export function FacultyCard({
    name,
    subject,
    qualification,
    experience,
    bio,
    imageUrl = "/images/faculty-placeholder.jpg",
}: FacultyCardProps) {
    return (
        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow bg-white flex flex-col h-full group">
            <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                {/* Replace with actual next/image when images are available */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=512&background=random`;
                    }}
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-bold text-white font-heading">{name}</h3>
                    <p className="text-accent font-medium">{subject}</p>
                </div>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
                    <div>
                        <span className="font-semibold text-foreground block">Qualification</span>
                        {qualification}
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div>
                        <span className="font-semibold text-foreground block">Experience</span>
                        {experience}
                    </div>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed flex-1">
                    {bio}
                </p>
            </CardContent>
        </Card>
    );
}
