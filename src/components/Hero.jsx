import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-[#0a0f1a] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/90 via-[#0a0f1a]/70 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            Modern • Gentle • Precise
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Dentistry designed for comfort and long‑term health
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            We combine advanced technology with a calming experience. From routine checkups to cosmetic care, our team delivers meticulous, patient‑first dentistry.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-flex justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-white/70">
            <div>
              <p className="text-2xl font-bold text-white">1,200+</p>
              <p className="text-xs uppercase tracking-wide">Smiles Restored</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-xs uppercase tracking-wide">Patient Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">15+</p>
              <p className="text-xs uppercase tracking-wide">Years of Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
