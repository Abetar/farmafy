"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header
      role="banner"
      className="sticky top-0 inset-x-0 z-50 bg-[color:#0f0e17]/95 backdrop-blur border-b border-white/10"
    >
      <nav className="container h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Farmafy inicio" onClick={close}>
          <span className="text-2xl font-bold tracking-tight text-white">
            <span className="text-medical-blue">Farma</span>
            <span className="text-health-green">fy</span>
          </span>
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-accent" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink href="/pricing">Precios</NavLink>
          <NavLink href="/features">Funciones</NavLink>
          <NavLink href="/security">Seguridad</NavLink>
          <NavLink href="/contact">Contacto</NavLink>

          <div className="h-5 w-px bg-white/20" />

          <Link
            href="/login"
            className="text-sm rounded-xl px-4 py-2 border border-white/70 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Iniciar sesión
          </Link>
          <Link href="/signup" className="btn btn-primary text-sm">
            Probar gratis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/30 text-white/90 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            {open ? (
              <path fill="currentColor" d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z" />
            ) : (
              <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-[color:#0f0e17]/95">
          <div className="container py-4 flex flex-col gap-2">
            <MobileLink href="/pricing" onClick={close}>Precios</MobileLink>
            <MobileLink href="/features" onClick={close}>Funciones</MobileLink>
            <MobileLink href="/security" onClick={close}>Seguridad</MobileLink>
            <MobileLink href="/contact" onClick={close}>Contacto</MobileLink>

            <div className="h-px w-full bg-white/10 my-2" />

            <Link href="/login" onClick={close}
              className="w-full text-sm rounded-xl px-4 py-2 border border-white/70 text-white hover:bg-white/10 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Iniciar sesión
            </Link>
            <Link href="/signup" onClick={close} className="w-full btn btn-primary text-sm text-center">
              Probar gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/85 hover:text-white transition-colors px-2 py-1 rounded">
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="py-2 text-white/90 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
