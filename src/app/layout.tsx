export const metadata = {
  title: "Farmafy – Adherencia a tratamientos por WhatsApp",
  description:
    "Mejora la adherencia a tratamientos con recordatorios por WhatsApp, paneles para médicos y reportes accionables.",
};

import "./globals.css";
import Navbar  from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
