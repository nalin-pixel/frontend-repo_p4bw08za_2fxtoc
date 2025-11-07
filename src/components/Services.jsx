import { Sparkles, Smile, ShieldCheck, Scan } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Comprehensive Exams",
    desc: "Detailed checkups with digital X‑rays and preventative care plans tailored to you.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Whitening, bonding, and veneers designed for natural, confident smiles.",
  },
  {
    icon: ShieldCheck,
    title: "Restorative Care",
    desc: "Precise fillings, crowns, and implants using biocompatible, durable materials.",
  },
  {
    icon: Scan,
    title: "3D Imaging & Scans",
    desc: "Low‑radiation imaging for accurate diagnosis and faster, more comfortable visits.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Advanced care, designed around you</h2>
          <p className="mt-3 text-white/70">
            We use leading tools and a gentle approach to make every visit efficient and stress‑free.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
