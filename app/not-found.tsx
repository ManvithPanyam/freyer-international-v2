import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[75vh] flex items-center justify-center bg-[#fbfcfd] text-[#0b2144] px-4 pt-32 pb-24">
        <div className="max-w-xl text-center space-y-6">
          <span className="text-[#c42f0b] text-xs font-mono tracking-[0.22em] uppercase font-bold block">
            404 &middot; Resource Not Found
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
            Page not found.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            The requested destination route does not exist or has been relocated within our network directory.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0b2144] hover:bg-[#07152b] text-white text-base font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              <span>Back to Freyer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
