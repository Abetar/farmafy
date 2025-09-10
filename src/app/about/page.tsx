export const metadata = {
  title: "Nosotros – Farmafy",
  description:
    "Conoce al equipo detrás de Farmafy. Nuestra misión es mejorar la adherencia terapéutica mediante recordatorios inteligentes y paneles para médicos.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero compacto */}
      <section className="hero-dark">
        <div className="container min-h-[36vh] flex flex-col items-start justify-center gap-4 py-12">
          <span className="inline-flex items-center gap-2 text-sm bg-accent px-3 py-1 rounded-xl">
            👥 Sobre nosotros
          </span>
          <h1 className="text-4xl font-bold leading-tight">Nuestra misión</h1>
          <p className="text-white/80 max-w-2xl">
            En Farmafy creemos que la tecnología puede ser un aliado para
            médicos y pacientes. Ayudamos a mejorar la adherencia terapéutica de
            manera simple y confiable.
          </p>
        </div>
      </section>

      {/* Historia y propósito */}
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-dark mb-3">
              ¿Por qué creamos Farmafy?
            </h2>
            <p className="text-dark/70 leading-relaxed">
              La falta de adherencia a tratamientos médicos es un reto global:
              muchos pacientes olvidan sus dosis o abandonan terapias antes de
              tiempo. Esto tiene un gran impacto en la salud y en los costos del
              sistema.
            </p>
            <p className="text-dark/70 mt-4 leading-relaxed">
              Nuestro objetivo es brindar una herramienta accesible para que
              médicos y clínicas puedan mejorar la continuidad del tratamiento
              con recordatorios por WhatsApp, reportes fáciles de entender y
              paneles de seguimiento.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-dark mb-2">
              Nuestros valores
            </h3>
            <ul className="list-disc pl-5 text-dark/70 space-y-2">
              <li>Confianza y seguridad en el manejo de datos</li>
              <li>Simplicidad para médicos y pacientes</li>
              <li>Innovación constante con enfoque humano</li>
              <li>Accesibilidad para prácticas de todos los tamaños</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section bg-lightGray">
        <div className="container text-center">
          <h2 className="section-title">Nuestro equipo</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Farmafy está construido por un equipo multidisciplinario de
            ingenieros, médicos y diseñadores apasionados por mejorar la salud
            digital.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="card">
              <div className="h-24 w-24 mx-auto rounded-full bg-lightGray mb-4" />
              <h3 className="font-semibold text-dark">Nombre 1</h3>
              <p className="text-dark/70 text-sm">Rol principal</p>
            </div>
            <div className="card">
              <div className="h-24 w-24 mx-auto rounded-full bg-lightGray mb-4" />
              <h3 className="font-semibold text-dark">Nombre 2</h3>
              <p className="text-dark/70 text-sm">Rol principal</p>
            </div>
            <div className="card">
              <div className="h-24 w-24 mx-auto rounded-full bg-lightGray mb-4" />
              <h3 className="font-semibold text-dark">Nombre 3</h3>
              <p className="text-dark/70 text-sm">Rol principal</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">¿Quieres colaborar con nosotros?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Estamos en crecimiento y buscamos aliados en el sector salud y
            tecnología.
          </p>
          <a href="/contact" className="btn btn-primary mt-4">
            Contáctanos
          </a>
        </div>
      </section>
    </>
  );
}
