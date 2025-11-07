export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Patients love the experience</h2>
          <p className="mt-3 text-white/70">Real stories from people who trust us with their smiles.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "The most relaxing dental visit I've ever had. The team is kind and precise.",
              name: "Amelia",
            },
            {
              quote:
                "Beautiful results and zero stress. Truly modern dentistry.",
              name: "Jordan",
            },
            {
              quote:
                "From booking to follow‑up, everything feels simple and professional.",
              name: "Priya",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-white/90">“{t.quote}”</p>
              <p className="mt-4 text-sm text-white/60">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
