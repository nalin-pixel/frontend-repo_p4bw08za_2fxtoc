export default function CTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 backdrop-blur">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready for a calmer kind of dental visit?</h3>
            <p className="mt-3 text-white/70">
              Book your first appointment in minutes. We’ll send a quick confirmation and help with insurance.
            </p>
            <form
              className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We’ll reach out to finalize your appointment.");
              }}
            >
              <input
                type="text"
                required
                placeholder="Full name"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="tel"
                required
                placeholder="Phone number"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="inline-flex justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
              >
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
