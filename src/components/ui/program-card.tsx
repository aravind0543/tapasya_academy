import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProgramCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    badges: string[];
    href: string;
}

export function ProgramCard({ title, description, icon: Icon, badges, href }: ProgramCardProps) {
    return (
        <Card className="flex flex-col h-full bg-white hover:shadow-xl transition-all duration-300 border-border/50 group hover:-translate-y-1">
            <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-bold font-heading">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="bg-blue-50 text-primary-light hover:bg-blue-100 font-medium">
                            {badge}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Link href={href} className="flex items-center text-primary font-bold hover:text-accent group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    );
}
