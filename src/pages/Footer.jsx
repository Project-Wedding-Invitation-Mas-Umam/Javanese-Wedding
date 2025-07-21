import {
    Facebook,
    Instagram,
    Mail,
    Phone,
} from "lucide-react";

export default function Footer() {
    return (
        <div className="relative text-white py-20 text-center overflow-hidden">
        {/* Background image */}
            <img
                src="/images/venue-bawah.svg"
                alt="Venue Background"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
            />

            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, #3E3235 0%, rgba(106, 90, 94, 0) 100%)"
                }}
            />

            {/* Konten utama */}
            <div className="relative z-10 max-w-2xl mx-auto px-4">
                <p className="text-lg font-light">Mau Undangan seperti ini?</p>
                <p className="text-lg font-light mb-6">Dapatkan disini</p>
                <img
                    src="/images/logo-aeru.svg"
                    alt="AERU Wedding Logo"
                    className="mx-auto mb-4 w-48 h-auto"
                />

                {/* Ikon sosial media */}
                <div className="flex justify-center gap-6 mt-6">
                <a href="#" aria-label="Mail">
                    <Mail className="w-6 h-6 hover:scale-110 transition-transform" />
                </a>
                <a href="#" aria-label="Phone">
                    <Phone className="w-6 h-6 hover:scale-110 transition-transform" />
                </a>
                <a href="#" aria-label="Instagram">
                    <Instagram className="w-6 h-6 hover:scale-110 transition-transform" />
                </a>
                <a href="#" aria-label="Facebook">
                    <Facebook className="w-6 h-6 hover:scale-110 transition-transform" />
                </a>
                </div>
            </div>
        </div>
    );
}
