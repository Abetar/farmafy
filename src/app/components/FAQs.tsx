type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "¿Necesito WhatsApp Business para usar Farmafy?",
    a: "Es recomendable para mayor control y escalabilidad, pero puedes iniciar con un número estándar y migrar más adelante.",
  },
  {
    q: "¿Cómo se gestiona la privacidad y la seguridad de datos?",
    a: "Usamos cifrado en tránsito (TLS), control de acceso por roles y respaldos periódicos. Consulta la sección de Seguridad para más detalles.",
  },
  {
    q: "¿Puedo exportar mis datos?",
    a: "Sí, puedes exportar reportes en CSV/PDF en los planes de pago. En Enterprise hay auditorías avanzadas.",
  },
  {
    q: "¿Hay contrato o permanencia mínima?",
    a: "No. Puedes cancelar cuando quieras y conservarás el acceso hasta finalizar el período ya pagado.",
  },
  {
    q: "¿Ofrecen soporte?",
    a: "Sí. Hay soporte estándar en Starter y prioridad en planes Pro/Plus. En Enterprise el soporte es dedicado con SLA.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Crea tu cuenta, registra pacientes y configura recordatorios. En minutos podrás visualizar métricas de adherencia.",
  },
];

export default function FAQs() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle">
            Respuestas rápidas sobre uso, seguridad y facturación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, idx) => (
            <details key={idx} className="card group open:shadow-card">
              <summary
                className="cursor-pointer list-none text-left flex items-center justify-between gap-4"
                aria-controls={`faq-panel-${idx}`}
                aria-expanded="false"
              >
                <span className="text-lg font-semibold text-dark">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 rounded-full border border-lightGray w-6 h-6 grid place-items-center text-dark/70 group-open:rotate-45 transition-transform"
                  title="Expandir"
                >
                  +
                </span>
              </summary>

              <div id={`faq-panel-${idx}`} className="mt-3 text-dark/75">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
