import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[75vh] flex items-center justify-center bg-[#121316] text-[#F8F7F4] px-4 pt-32 pb-24">
        <div className="max-w-xl text-center space-y-6">
          <span className="text-[#e1390f] text-xs font-mono tracking-[0.22em] uppercase font-bold block">
            404 &middot; Resource Not Found
          </span>
          <h1
            className="font-bold tracking-tight text-white leading-[1.08]"
            style={{ fontSize: "var(--token-text-3xl)" }}
          >
            Page not found.
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            The requested destination route does not exist or has been relocated within our network directory.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              href="/"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Back to Freyer
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
