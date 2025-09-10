import Link from "next/link";

export const metadata = {
  title: "Contacto – Farmafy",
  description:
    "Ponte en contacto con el equipo de Farmafy. Resolvemos tus dudas sobre planes, soporte y seguridad.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero compacto */}
      <section className="hero-dark">
        <div className="container min-h-[36vh] flex flex-col items-start justify-center gap-4 py-12">
          <span className="inline-flex items-center gap-2 text-sm bg-accent px-3 py-1 rounded-xl">
            📩 Contacto
          </span>
          <h1 className="text-4xl font-bold leading-tight">Hablemos</h1>
          <p className="text-white/80 max-w-2xl">
            ¿Tienes preguntas sobre planes, funciones o seguridad? Escríbenos y
            con gusto te apoyamos.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="section">
        <div className="container max-w-2xl">
          <div className="card">
            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-lightGray px-3 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-medical-blue"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-lightGray px-3 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-medical-blue"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-lightGray px-3 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-medical-blue"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                aria-label="Enviar mensaje"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* CTA alternativo */}
          <div className="text-center mt-8">
            <p className="text-dark/70">
              También puedes escribirnos directamente por WhatsApp:
            </p>
            <Link
              href="https://wa.me/521234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-3"
            >
              Contactar por WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
