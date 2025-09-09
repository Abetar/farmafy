import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-dark mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="text-xl font-bold">
              <span className="text-medical-blue">Farma</span>
              <span className="text-health-green">fy</span>
              <span className="sr-only">Farmafy</span>
            </div>
            <p className="text-sm text-white/80">
              Recordatorios por WhatsApp, panel para médicos y reportes de
              adherencia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Producto</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/features" className="hover:underline">
                  Funciones
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/for-doctors" className="hover:underline">
                  Para médicos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/about" className="hover:underline">
                  Nosotros
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/legal/privacy" className="hover:underline">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:underline">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:underline">
                  Seguridad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Farmafy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/legal/privacy"
              className="text-white/70 hover:underline"
            >
              Privacidad
            </Link>
            <Link href="/legal/terms" className="text-white/70 hover:underline">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
