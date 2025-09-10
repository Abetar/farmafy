import Pricing from "../components/Pricing";
import Link from "next/link";

export const metadata = {
  title: "Precios – Farmafy",
  description:
    "Planes y precios de Farmafy: Starter, Pro, Plus y Enterprise. Elige el plan que mejor se adapte a tu práctica.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero compacto de la página de Precios */}
      <section className="hero-dark">
        <div className="container min-h-[36vh] flex flex-col items-start justify-center gap-4 py-12">
          <span className="inline-flex items-center gap-2 text-sm bg-accent px-3 py-1 rounded-xl">
            💳 Precios
          </span>
          <h1 className="text-4xl font-bold leading-tight">
            Planes simples para empezar y escalar
          </h1>
          <p className="text-white/80 max-w-2xl">
            Elige entre Starter, Pro, Plus o Enterprise según el volumen de
            pacientes y el nivel de soporte que necesites.
          </p>
          <div className="flex gap-3">
            <Link href="/signup" className="btn btn-primary">
              Probar gratis
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Hablar con ventas
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de planes (usa tu componente ya creado) */}
      <Pricing />
    </>
  );
}
