import SecurityHighlights from "../components/SecurityHighlights";
import Link from "next/link";

export const metadata = {
  title: "Seguridad & Privacidad – Farmafy",
  description:
    "Conoce las medidas de seguridad y privacidad de Farmafy: cifrado en tránsito, control de acceso, backups y más.",
};

export default function SecurityPage() {
  return (
    <>
      {/* Hero compacto */}
      <section className="hero-dark">
        <div className="container min-h-[36vh] flex flex-col items-start justify-center gap-4 py-12">
          <span className="inline-flex items-center gap-2 text-sm bg-accent px-3 py-1 rounded-xl">
            🔒 Seguridad & Privacidad
          </span>
          <h1 className="text-4xl font-bold leading-tight">
            Protegemos la información de tus pacientes
          </h1>
          <p className="text-white/80 max-w-2xl">
            Farmafy implementa buenas prácticas de seguridad clínica y
            tecnológica para asegurar la confidencialidad, integridad y
            disponibilidad de los datos.
          </p>
          <div className="flex gap-3">
            <Link href="/signup" className="btn btn-primary">
              Probar gratis
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Hablar con soporte
            </Link>
          </div>
        </div>
      </section>

      {/* Bloques de seguridad */}
      <SecurityHighlights />

      {/* Extra: políticas y cumplimiento */}
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-dark">Privacidad</h3>
            <p className="text-dark/70 mt-2">
              Cumplimos con regulaciones locales e internacionales en materia de
              protección de datos. La información personal de pacientes es
              tratada con la más alta confidencialidad.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-dark">Cumplimiento</h3>
            <p className="text-dark/70 mt-2">
              Nuestra infraestructura sigue estándares de seguridad en la nube.
              Brindamos acuerdos de confidencialidad y opciones de SLA en planes
              Enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Seguridad en cada paso</h2>
          <p className="section-subtitle">
            Empieza hoy con Farmafy y confía en que tus datos están protegidos.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signup" className="btn btn-primary">
              Crear cuenta
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contactar soporte
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
