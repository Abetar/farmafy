/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0f0e17",       // Fondo principal (Hero, Footer)
        medicalBlue: "#2D9CDB", // Azul médico → CTA primarios, "Farma"
        healthGreen: "#27AE60", // Verde salud → CTA secundarios, éxito, "fy"
        accentGold: "#d4af37",  // Dorado acento → check logo, hover premium
        softPink: "#ffd1dc",    // Rosa cálido → testimonios, secciones humanas
        white: "#FFFFFF",       // Texto sobre fondo oscuro, cards limpias
        lightGray: "#F5F5F5",   // Divisores, bordes, fondos alternos
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
