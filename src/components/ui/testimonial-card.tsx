import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    author: string;
    designation: string;
}

export function TestimonialCard({ quote, author, designation }: TestimonialCardProps) {
    return (
        <Card className="h-full bg-bg-light border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 flex flex-col h-full">
                <Quote className="h-10 w-10 text-accent/40 mb-4" />
                <p className="text-lg italic font-quote text-foreground/90 mb-8 flex-1">
                    "{quote}"
                </p>
                <div>
                    <h4 className="font-bold font-heading text-primary">{author}</h4>
                    <p className="text-sm text-muted-foreground">{designation}</p>
                </div>
            </CardContent>
        </Card>
    );
}
