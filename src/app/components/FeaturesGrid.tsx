export default function FeaturesGrid() {
  const features = [
    {
      title: "Recordatorios por WhatsApp",
      desc: "Envía recordatorios de dosis y citas en el canal que tus pacientes ya usan.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden
          className="text-medical-blue"
        >
          <path
            fill="currentColor"
            d="M21 15.46 18.87 14a1 1 0 0 0-1.11.06l-1.26.93a8.35 8.35 0 0 1-3.49-3.48l.93-1.26a1 1 0 0 0 .06-1.11L12.54 5a1 1 0 0 0-1.07-.51A9 9 0 0 0 3 13.5 8.79 8.79 0 0 0 4.5 18l.1.14.17.15a9 9 0 0 0 5.73 2.2h.06A9 9 0 0 0 21.5 12a1 1 0 0 0-.5-1.07zM10.5 19a7 7 0 0 1-4.2-1.41l-.1-.1A6.8 6.8 0 0 1 5 13.5a7 7 0 0 1 3.86-6.24l1 2.1-1 1.38a1 1 0 0 0-.11 1 10.29 10.29 0 0 0 4.53 4.53 1 1 0 0 0 1-.11l1.38-1 2.1 1A7 7 0 0 1 10.5 19Z"
          />
        </svg>
      ),
    },
    {
      title: "Panel para médicos",
      desc: "Métricas de adherencia por paciente, especialidad y periodo.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden
          className="text-health-green"
        >
          <path
            fill="currentColor"
            d="M3 3h18v2H3zm2 4h14v14H5zm2 2v10h10V9zM7 7h10V5H7z"
          />
        </svg>
      ),
    },
    {
      title: "Reportes exportables",
      desc: "Descarga CSV/PDF para auditorías y coordinación de equipo.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden
          className="text-accent"
        >
          <path
            fill="currentColor"
            d="M14 2H6a2 2 0 0 0-2 2v16l4-4h10a2 2 0 0 0 2-2V8zM13 3.5 18.5 9H14a1 1 0 0 1-1-1z"
          />
        </svg>
      ),
    },
    {
      title: "Configuración en minutos",
      desc: "Carga tratamientos, define horarios y comienza a monitorear.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden
          className="text-medical-blue"
        >
          <path
            fill="currentColor"
            d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm1 11.41 4.29 4.3-1.42 1.41L11 13.83V6h2Z"
          />
        </svg>
      ),
    },
    {
      title: "Roles y permisos",
      desc: "Control de acceso por médico, asistente o administrador.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden
          className="text-health-green"
        >
          <path
            fill="currentColor"
            d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-7 2-7 4v3h14v-3c0-2-3-4-7-4Z"
          />
        </svg>
      ),
    },
    {
      title: "Integraciones (beta)",
      desc: "Conecta con tus herramientas y flujo actual.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden
          className="text-accent"
        >
          <path
            fill="currentColor"
            d="M7 2h10v2H7zM3 7h18v2H3zM7 12h10v2H7zM3 17h18v2H3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title" style={{ color: "black", fontWeight: 'bold' , fontSize: '2.5rem' }}>Funciones principales</h2>
          <p className="section-subtitle">
            Todo lo necesario para mejorar la adherencia terapéutica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div className="card" key={f.title}>
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-xl font-semibold text-dark">{f.title}</h3>
              <p className="text-dark/70 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
