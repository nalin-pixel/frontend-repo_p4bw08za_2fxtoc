import { Calendar, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#home" className="text-white font-semibold text-lg tracking-tight">
              Aurora Dental Care
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
              <a
                href="tel:+1234567890"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
