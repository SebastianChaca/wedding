import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belu & Amadeo - Invitación de Boda",
  description: "¡Nos Casamos! Belu & Amadeo te invitan a su boda.",
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
