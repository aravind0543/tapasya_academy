import { SectionHeading } from "@/components/ui/section-heading";
import MapEmbed from "@/components/ui/map-embed";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export function LocationSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <SectionHeading
                    title="Find Us"
                    subtitle="Drop by our campus for a free counselling session."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
                    <div className="flex flex-col gap-8 order-2 lg:order-1 px-4 lg:px-8">
                        <h3 className="text-2xl font-bold font-heading text-primary">Tapasya Academy</h3>

                        <div className="flex gap-4 items-start">
                            <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Campus Address</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Plot 116, Srinagar Colony Main Rd,<br />
                                    beside Sri Sathya Sai Nigamagamam Trust,<br />
                                    Banjara Hills, Hyderabad, Telangana 500073
                                </p>
                                <a
                                    href="https://maps.google.com/?q=Tapasya+Academy+Tuitions+Banjara+Hills+Hyderabad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-3 text-primary font-bold hover:text-accent text-sm transition-colors"
                                >
                                    Get Directions <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                            </div>
                        </div>

                        <div className="w-full h-px bg-border" />

                        <div className="flex gap-4 items-start">
                            <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Contact Numbers</h4>
                                <div className="flex flex-col gap-1 text-muted-foreground">
                                    <a href="tel:+918074498481" className="hover:text-primary transition-colors">+91 8074498481</a>
                                    <a href="tel:+919246889920" className="hover:text-primary transition-colors">+91 92468 89920</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-border" />

                        <div className="flex gap-4 items-start">
                            <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-foreground mb-1">Operating Hours</h4>
                                <div className="grid grid-cols-2 gap-4 text-muted-foreground text-sm">
                                    <div>
                                        <span className="font-semibold text-foreground block">Mon – Sat</span>
                                        5:00 AM – 9:00 PM
                                    </div>
                                    <div>
                                        <span className="font-semibold text-foreground block">Sunday</span>
                                        7:30 AM – 12:30 PM
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="order-1 lg:order-2 w-full">
                        <MapEmbed />
                    </div>
                </div>
            </div>
        </section>
    );
}
