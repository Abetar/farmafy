import Link from "next/link";

type Feature = {
  label: string;
  included: boolean;
};

type Plan = {
  name: string;
  price: string;
  period?: string;
  highlight?: boolean;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  features: Feature[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$499 MXN",
    period: "/mes",
    description:
      "Para médicos independientes que empiezan con pocos pacientes.",
    ctaLabel: "Probar Starter",
    ctaHref: "/signup",
    features: [
      { label: "Hasta 20 pacientes activos", included: true },
      { label: "Recordatorios por WhatsApp", included: true },
      { label: "Panel para 1 médico", included: true },
      { label: "Reportes básicos (CSV)", included: true },
      { label: "Soporte estándar", included: true },
    ],
  },
  {
    name: "Pro",
    price: "$799 MXN",
    period: "/mes",
    highlight: true,
    description:
      "Ideal para médicos con práctica estable y seguimiento continuo.",
    ctaLabel: "Empezar con Pro",
    ctaHref: "/signup",
    features: [
      { label: "Hasta 40 pacientes activos", included: true },
      { label: "Recordatorios por WhatsApp", included: true },
      { label: "Panel para hasta 5 médicos", included: true },
      { label: "Reportes en CSV/PDF", included: true },
      { label: "Soporte prioritario", included: true },
    ],
  },
  {
    name: "Plus",
    price: "$1,499 MXN",
    period: "/mes",
    description:
      "Para clínicas pequeñas o médicos con gran volumen de pacientes.",
    ctaLabel: "Empezar con Plus",
    ctaHref: "/signup",
    features: [
      { label: "Hasta 100 pacientes activos", included: true },
      { label: "Recordatorios por WhatsApp", included: true },
      { label: "Panel multi-médico", included: true },
      { label: "Reportes avanzados", included: true },
      { label: "Integraciones (beta)", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para hospitales y redes clínicas con necesidades avanzadas.",
    ctaLabel: "Hablar con ventas",
    ctaHref: "/contact",
    features: [
      { label: "Límite flexible de pacientes", included: true },
      { label: "Usuarios ilimitados", included: true },
      { label: "Recordatorios por WhatsApp", included: true },
      { label: "Reportes avanzados & auditoría", included: true },
      { label: "Integraciones & API", included: true },
      { label: "SSO / SLA empresarial", included: true },
      { label: "Soporte dedicado", included: true },
    ],
  },
];

function CheckIcon({ onDark }: { onDark?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={onDark ? "text-white" : "text-health-green"}
    >
      <path
        fill="currentColor"
        d="M7.7 13.3 4.9 10.5l-1.4 1.4 4.2 4.2 9-9-1.4-1.4z"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="text-[#D14343]"
    >
      <path
        fill="currentColor"
        d="M11.4 10l4.3-4.3-1.4-1.4L10 8.6 5.7 4.3 4.3 5.7 8.6 10l-4.3 4.3 1.4 1.4 4.3-4.3 4.3 4.3 1.4-1.4z"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="section">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title" style={{ color: "white" }}>
            Planes y precios
          </h2>
          <p className="section-subtitle" style={{ color: "white" }}>
            Elige el plan que se ajuste a tu práctica. Comienza con una prueba
            gratuita y escala cuando lo necesites.
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card flex flex-col ${
                plan.highlight ? "border-accent bg-white" : ""
              }`}
              aria-label={`Plan ${plan.name}`}
            >
              {/* Header del plan */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-black">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="inline-flex items-center text-xs px-2 py-1 rounded-xl bg-accent">
                      Recomendado
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-dark">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-dark/60">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-dark/70">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="mt-2 space-y-2 text-sm flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-start gap-2 text-black"
                  >
                    {f.included ? <CheckIcon /> : <CrossIcon />}
                    <span
                      className={f.included ? "" : "text-black line-through"}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  href={plan.ctaHref}
                  className={`w-full btn ${
                    plan.highlight ? "btn-primary" : "btn-outline"
                  }`}
                  aria-label={`${plan.ctaLabel} - ${plan.name}`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-FAQ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h4 className="font-semibold mb-2 text-dark/100">
              ¿Necesito WhatsApp Business?
            </h4>
            <p className="text-dark/70 text-sm">
              Recomendado para mayor control, pero puedes comenzar con un número
              estándar y migrar más adelante.
            </p>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2 text-dark/100">
              ¿Puedo exportar mis datos?
            </h4>
            <p className="text-dark/70 text-sm">
              Sí, puedes exportar reportes en CSV/PDF en los planes de pago.
            </p>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2 text-dark/100">
              ¿Hay permanencia?
            </h4>
            <p className="text-dark/70 text-sm">
              No. Puedes cancelar cuando quieras y conservarás el acceso hasta
              el fin del periodo ya pagado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
