import Link from "next/link";

export default function SecurityHighlights() {
  const items = [
    {
      title: "Cifrado en tránsito",
      desc: "Comunicación protegida con TLS 1.2+ entre cliente y servidor.",
    },
    {
      title: "Control de acceso",
      desc: "Roles y permisos; sesiones seguras y registro de actividad.",
    },
    {
      title: "Backups y retención",
      desc: "Respaldo periódico y restauración bajo solicitud.",
    },
    {
      title: "Alojamiento confiable",
      desc: "Infraestructura en la nube con alta disponibilidad.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title" style={{ color: "black", fontWeight: 'bold' , fontSize: '2.5rem' }}>Seguridad & Privacidad</h2>
          <p className="section-subtitle">
            Buenas prácticas para proteger datos y garantizar continuidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div className="card" key={it.title}>
              <h3 className="text-lg font-semibold text-dark">{it.title}</h3>
              <p className="text-dark/70 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/security" className="btn btn-outline">
            Ver detalles de seguridad
          </Link>
        </div>
      </div>
    </section>
  );
}
