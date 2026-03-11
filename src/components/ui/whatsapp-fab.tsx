import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
    const WHATSAPP_NUMBER = "918074498481";
    const WHATSAPP_MESSAGE = "Hi! I'm interested in enrolling at Tapasya Academy.";
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
    )}`;

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:bg-[#20BE5A] transition-all duration-300"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
}
