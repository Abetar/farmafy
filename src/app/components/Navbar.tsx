"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`sticky top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur border-b border-default shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Farmafy inicio">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-medical-blue">Farma</span>
            <span className="text-health-green">fy</span>
          </span>
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
        </Link>

        {/* Links desktop */}
        <div className="hidden sm:flex items-center gap-4">
          <NavLink href="/pricing" isScrolled={isScrolled}>Precios</NavLink>
          <NavLink href="/features" isScrolled={isScrolled}>Funciones</NavLink>
          <NavLink href="/security" isScrolled={isScrolled}>Seguridad</NavLink>
          <NavLink href="/contact" isScrolled={isScrolled}>Contacto</NavLink>

          <div className={`h-5 w-px ${isScrolled ? "bg-lightGray" : "bg-white/30"}`} />

          {/* Iniciar sesión: ghost claro sobre hero, outline normal al scrollear */}
          {isScrolled ? (
            <Link href="/login" className="btn btn-outline text-sm">
              Iniciar sesión
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-sm rounded-xl px-4 py-2 border transition-colors
                         border-white/70 text-white hover:bg-white/10 focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Iniciar sesión
            </Link>
          )}

          <Link href="/signup" className="btn btn-primary text-sm">
            Probar gratis
          </Link>
        </div>

        {/* Mobile action */}
        <div className="sm:hidden">
          <Link href="/signup" className="btn btn-primary text-sm">
            Probar gratis
          </Link>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm px-2 py-1 rounded transition-colors ${
        isScrolled
          ? "text-dark/70 hover:text-medical-blue"
          : "text-white/85 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
