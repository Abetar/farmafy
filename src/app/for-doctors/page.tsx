import Link from "next/link";

export const metadata = {
  title: "Para médicos – Farmafy",
  description:
    "Descubre cómo Farmafy ayuda a médicos a mejorar la adherencia de sus pacientes con recordatorios por WhatsApp y reportes de seguimiento.",
};

export default function ForDoctorsPage() {
  return (
    <>
      {/* Hero compacto */}
      <section className="hero-dark">
        <div className="container min-h-[36vh] flex flex-col items-start justify-center gap-4 py-12">
          <span className="inline-flex items-center gap-2 text-sm bg-accent px-3 py-1 rounded-xl">
            🩺 Para médicos
          </span>
          <h1 className="text-4xl font-bold leading-tight">
            Aumenta la continuidad de tus pacientes
          </h1>
          <p className="text-white/80 max-w-2xl">
            Con Farmafy, olvídate de llamadas manuales y recordatorios
            improvisados. Tus pacientes reciben notificaciones automáticas y tú
            accedes a métricas claras.
          </p>
          <div className="flex gap-3">
            <Link href="/signup" className="btn btn-primary">
              Empezar gratis
            </Link>
            <Link
              href="/pricing"
              className="btn text-white rounded-full border border-white px-4 py-2 text-base font-medium hover:bg-white/10"
              style={{ color: 'white', borderRadius: '9999px', border: '1px solid white', padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: '500' }}
            >
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Beneficios para tu práctica</h2>
            <p className="section-subtitle">
              Farmafy está diseñado para médicos que buscan eficiencia y mejor
              seguimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-dark mb-2">
                Más adherencia
              </h3>
              <p className="text-dark/70">
                Notificaciones automáticas reducen el abandono de tratamientos.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-dark mb-2">
                Panel de seguimiento
              </h3>
              <p className="text-dark/70">
                Visualiza métricas por paciente y exporta reportes fácilmente.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-dark mb-2">
                Ahorra tiempo
              </h3>
              <p className="text-dark/70">
                Menos tareas administrativas, más tiempo para tus consultas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonio corto */}
      <section className="section bg-lightGray">
        <div className="container text-center max-w-3xl">
          <p className="text-lg italic text-dark/80">
            “Desde que implementamos Farmafy, nuestros pacientes cumplen mucho
            mejor con su tratamiento. El panel nos da una visión clara sin
            esfuerzo extra.”
          </p>
          <p className="mt-3 font-semibold text-dark">
            — Dr. Juan Pérez, Cardiología
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Empieza hoy mismo</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Regístrate en minutos, configura recordatorios y da un salto en la
            calidad de tu práctica.
          </p>
          <div className="flex gap-3 justify-center mt-4">
            <Link href="/signup" className="btn btn-primary">
              Crear cuenta
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Solicitar demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
