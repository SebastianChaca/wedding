import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cata & Enzo  - Invitación de Boda",
  description: "¡Nos Casamos! Cata & Enzo te invitan a su boda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
