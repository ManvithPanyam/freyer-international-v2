export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#0b2144] text-white">
      <div className="max-w-3xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e1390f]/20 text-[#e1390f] text-sm font-semibold border border-[#e1390f]/30">
          Phase 2 — Build Preparation & Architecture Complete
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Freyer International Logistics
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          Modernization repository initialized. Architecture, Design System, Software Requirements
          Specification (SRS), and Firebase backend linkage established. Ready for Phase 3
          production implementation.
        </p>
        <div className="pt-6 border-t border-slate-700/60 flex flex-wrap justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="bg-slate-800/80 px-3 py-1.5 rounded">Next.js 16.x App Router</span>
          <span className="bg-slate-800/80 px-3 py-1.5 rounded">React 19</span>
          <span className="bg-slate-800/80 px-3 py-1.5 rounded">Tailwind CSS 4</span>
          <span className="bg-slate-800/80 px-3 py-1.5 rounded">Firebase Project Linked</span>
        </div>
      </div>
    </main>
  );
}
