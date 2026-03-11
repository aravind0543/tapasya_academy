"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Programs",
        href: "/programs",
        dropdown: [
            { name: "Regular Curriculum (6-12)", href: "/programs/regular-curriculum" },
            { name: "Competitive Exams", href: "/programs/competitive-exams" },
            { name: "Foundation Courses", href: "/programs/foundation" },
            { name: "Assisted Study", href: "/programs/assisted-study" },
        ],
    },
    { name: "Results", href: "/results" },
    { name: "Faculty", href: "/faculty" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative">
                    <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        T
                    </div>
                    <span className={cn("text-xl font-bold font-heading tracking-tight", scrolled ? "text-primary" : "text-white")}>
                        Tapasya Academy
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className={cn(
                                    "flex items-center text-sm font-semibold transition-colors hover:text-accent",
                                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                                        ? "text-accent"
                                        : scrolled
                                            ? "text-foreground"
                                            : "text-white/90"
                                )}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="ml-1 h-4 w-4 opacity-70" />}
                            </Link>

                            {/* Dropdown */}
                            {link.dropdown && (
                                <div className="absolute top-full -left-4 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                                    <div className="bg-white rounded-xl shadow-xl border p-2 w-64 flex flex-col gap-1">
                                        {link.dropdown.map((drop) => (
                                            <Link
                                                key={drop.name}
                                                href={drop.href}
                                                className="px-4 py-3 rounded-lg text-sm text-foreground hover:bg-bg-light hover:text-primary transition-colors font-medium"
                                            >
                                                {drop.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block relative z-50">
                    <Link href="/admissions">
                        <Button className={cn(
                            "rounded-full font-bold px-6",
                            scrolled ? "bg-accent hover:bg-accent-dark text-foreground" : "bg-white text-primary hover:bg-transparent hover:text-white hover:border hover:border-white border border-transparent"
                        )}>
                            Enrol Now &rarr;
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden z-50 relative p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <X className="h-6 w-6 text-foreground" />
                    ) : (
                        <Menu className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
                    )}
                </button>

                {/* Mobile Drawer */}
                <div
                    className={cn(
                        "fixed inset-0 bg-white z-40 flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 lg:hidden overflow-y-auto",
                        isOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <div className="flex flex-col gap-6">
                        {NAV_LINKS.map((link) => (
                            <div key={link.name} className="flex flex-col gap-3">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-2xl font-bold font-heading",
                                        pathname === link.href ? "text-accent" : "text-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdown && (
                                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-accent/20">
                                        {link.dropdown.map((drop) => (
                                            <Link
                                                key={drop.name}
                                                href={drop.href}
                                                className={cn(
                                                    "text-lg font-medium",
                                                    pathname === drop.href ? "text-primary" : "text-muted-foreground"
                                                )}
                                            >
                                                {drop.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto pt-8">
                        <Link href="/admissions" className="block w-full">
                            <Button className="w-full bg-primary hover:bg-primary-light text-white font-bold rounded-full h-14 text-lg">
                                Enrol Now &rarr;
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
