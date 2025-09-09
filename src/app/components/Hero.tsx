import Link from "next/link";

type HeroProps = {
  videoSrc?: string;
  videoPoster?: string;
  imageFallbackSrc?: string;
  title?: string;
  subtitle?: string;
};

export default function Hero({
  videoSrc = "/farmafy-hero.mp4",
  videoPoster,
  imageFallbackSrc = "/hero/hero-bg.jpg",
  title = "Recordatorios por WhatsApp, panel para médicos y reportes de adherencia",
  subtitle = "Reduce ausencias, aumenta la continuidad de tratamiento y obtén visibilidad real del seguimiento de tus pacientes.",
}: HeroProps) {
  return (
    <section className="relative hero-dark" aria-label="Introducción y llamada a la acción de Farmafy">
      {/* Fondo (video o imagen) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* VIDEO DE FONDO */}
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          poster={videoPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/*
          ALTERNATIVA: IMAGEN DE FONDO
          Descomenta este bloque y comenta el <video> si prefieres imagen.

          <img
            src={imageFallbackSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        */}

        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 z-10 bg-[color:rgba(15,14,23,0.55)]" />
      </div>

      {/* Contenido */}
      <div className="container relative z-20 min-h-[72vh] flex flex-col items-start justify-center gap-6 py-20">
        <span className="inline-flex items-center gap-2 text-sm bg-accent px-3 py-1 rounded-xl">
          <span aria-hidden="true">✅</span> <strong>Mejora la adherencia terapéutica</strong>
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">{title}</h1>

        <p className="text-white/80 text-lg max-w-2xl">{subtitle}</p>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/signup" className="btn btn-primary text-base" aria-label="Probar gratis">
            Probar gratis
          </Link>
          <Link href="/contact" className="btn btn-secondary text-base" aria-label="Solicitar demo">
            Solicitar demo
          </Link>
          <Link href="/features" className="btn text-sm hover:bg-white" style={{ border: '1px solid', borderColor:'#ffffff' }} aria-label="Ver cómo funciona">
            Ver cómo funciona
          </Link>
        </div>

        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/75">
          <li>• Configuración en minutos</li>
          <li>• Exporta reportes</li>
          {/* <li>• Sin tarjeta en prueba</li> */}
        </ul>
      </div>
    </section>
  );
}
