import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h4 className="text-lg font-semibold">Aurora Dental Care</h4>
            <p className="mt-2 text-white/70 text-sm">
              1200 Wellness Ave, Suite 210
              <br />
              San Francisco, CA 94107
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white/90">Hours</h5>
            <p className="mt-2 text-white/70 text-sm">Mon–Fri: 8:00am – 6:00pm</p>
            <p className="text-white/70 text-sm">Sat: 9:00am – 2:00pm</p>
          </div>
          <div className="md:text-right">
            <a href="tel:+1234567890" className="text-2xl font-bold text-white hover:text-cyan-300 transition-colors">
              (123) 456‑7890
            </a>
            <p className="text-white/70 text-sm">hello@auroradental.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Aurora Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
