import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary-dark text-white/80 pt-16 pb-8 border-t-4 border-accent">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
                            <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                T
                            </div>
                            <span className="text-2xl font-bold font-heading tracking-tight text-white">
                                Tapasya Academy
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6">
                            Assisted-study coaching institute for Classes 6-12, JEE Main/Advanced, NEET, and Board Exams. Dedicated to personal mentorship and concept-first learning.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* About Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wide">About</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/faculty" className="hover:text-accent transition-colors">Our Faculty</Link></li>
                            <li><Link href="/results" className="hover:text-accent transition-colors">Results & Achievers</Link></li>
                            <li><Link href="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
                            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Programs Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Programs</h4>
                        <ul className="space-y-4">
                            <li><Link href="/programs/regular-curriculum" className="hover:text-accent transition-colors">Regular Curriculum (6-12)</Link></li>
                            <li><Link href="/programs/competitive-exams" className="hover:text-accent transition-colors">JEE / NEET / EAMCET</Link></li>
                            <li><Link href="/programs/foundation" className="hover:text-accent transition-colors">Foundation Courses</Link></li>
                            <li><Link href="/programs/assisted-study" className="hover:text-accent transition-colors">Assisted Study Approach</Link></li>
                            <li><Link href="/admissions" className="hover:text-accent transition-colors">Admissions</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading tracking-wide">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="h-5 w-5 text-accent shrink-0" />
                                <span>
                                    Plot 116, Srinagar Colony Main Rd, beside Sri Sathya Sai Nigamagamam Trust, Banjara Hills, Hyderabad 500073
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="h-5 w-5 text-accent shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+918074498481" className="hover:text-accent transition-colors">+91 8074498481</a>
                                    <a href="tel:+919246889920" className="hover:text-accent transition-colors">+91 92468 89920</a>
                                </div>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Clock className="h-5 w-5 text-accent shrink-0" />
                                <div className="flex flex-col">
                                    <span>Mon–Sat: 5:00 AM – 9:00 PM</span>
                                    <span>Sun: 7:30 AM – 12:30 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© {new Date().getFullYear()} Tapasya Academy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
