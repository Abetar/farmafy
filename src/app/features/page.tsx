import FeaturesGrid from "../components/FeaturesGrid";
import SecurityHighlights from "../components/SecurityHighlights";
import Link from "next/link";

export const metadata = {
  title: "Funciones – Farmafy",
  description:
    "Recordatorios por WhatsApp, panel para médicos y reportes de adherencia. Descubre las funciones clave de Farmafy.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero compacto para la página de Features */}
      <section className="hero-dark">
        <div className="container min-h-[36vh] flex flex-col items-start justify-center gap-4 py-12">
          <span className="inline-flex items-center gap-2 text-sm bg-accent px-3 py-1 rounded-xl">
            🚀 Funciones
          </span>
          <h1 className="text-4xl font-bold leading-tight">
            Todo para mejorar la adherencia terapéutica
          </h1>
          <p className="text-white/80 max-w-2xl">
            Automatiza recordatorios por WhatsApp, monitorea el progreso y
            comparte reportes con tu equipo.
          </p>
          <div className="flex gap-3">
            <Link href="/signup" className="btn btn-primary">
              Probar gratis
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Solicitar demo
            </Link>
          </div>
        </div>
      </section>

      {/* Grid principal de features (componentes que ya tienes) */}
      <FeaturesGrid />

      {/* Sección “Cómo funciona” en 3 pasos */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">¿Cómo funciona?</h2>
            <p className="section-subtitle">
              En tres pasos estás listo para empezar a medir y mejorar la
              adherencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-dark">1. Configura</h3>
              <p className="text-dark/70 mt-2">
                Registra pacientes y define tratamientos: dosis, horarios y
                duración.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-dark">2. Automatiza</h3>
              <p className="text-dark/70 mt-2">
                Activa recordatorios por WhatsApp y personaliza mensajes por
                paciente.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-dark">3. Monitorea</h3>
              <p className="text-dark/70 mt-2">
                Visualiza paneles de adherencia y exporta reportes para tu
                equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seguridad & Privacidad (confianza clínica) */}
      <SecurityHighlights />

      {/* CTA final */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Comienza en minutos</h2>
          <p className="section-subtitle">
            Prueba sin compromiso y descubre cómo mejorar la continuidad de tus
            pacientes.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signup" className="btn btn-primary">
              Probar gratis
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              Ver precios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
