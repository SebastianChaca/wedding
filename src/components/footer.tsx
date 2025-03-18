import Link from "next/link";

export function Footer() {
  return (
    <footer>
      {/* Contact Section */}
      <section className="contacto bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-left text-xl font-semibold mb-4 text-[#463e3b]">¿Te gustó nuestro demo?</h4>
              <p className="text-left text-[#463e3b] mb-4">¡Contactanos! Trabajamos desde Argentina al mundo.</p>
              <ul className="text-left space-y-2">
                <li className="text-[#463e3b]">
                  <Link
                    href="https://api.whatsapp.com/send?phone=543512309226&text=%C2%A1Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20de%20las%20invitaciones!%20Gracias."
                    target="_blank"
                    className="text-[#a3b993] hover:underline"
                  >
                    ¡Envianos un Whatsapp!
                  </Link>
                </li>
                <li className="text-[#463e3b]">+549 351 2309226 | +549 351 8115010</li>
                <li className="text-[#463e3b]">
                  <Link
                    href="mailto:agendalafecha@gmail.com"
                    className="text-[#a3b993] hover:underline"
                  >
                    agendalafecha@gmail.com
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-left text-xl font-semibold mb-4 text-[#463e3b]">Seguinos en Instagram</h4>
              <p className="text-left text-[#463e3b] mb-4">Para ver ejemplos de nuestro trabajo y enterarte de todas nuestras novedades.</p>
              <ul className="text-left">
                <li className="text-[#463e3b]">
                  <Link
                    href="https://www.instagram.com/agendalafecha/"
                    target="_blank"
                    className="text-[#a3b993] hover:underline"
                  >
                    agendalafecha
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Footer */}
      <section className="menu-footer bg-gray-100 py-6">
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-5">
          <li>
            <Link href="https://agendalafecha.com/" className="text-[#463e3b] hover:text-[#a3b993]">
              Ir al inicio
            </Link>
          </li>
          <li>
            <Link href="https://www.agendalafecha.com/invitaciones/clasica/" className="text-[#463e3b] hover:text-[#a3b993]">
              Ver Clásica
            </Link>
          </li>
          <li>
            <Link href="https://www.agendalafecha.com/invitaciones/premium/" className="text-[#463e3b] hover:text-[#a3b993]">
              Ver Premium
            </Link>
          </li>
          <li>
            <Link href="https://www.agendalafecha.com/invitaciones/black/" className="text-[#463e3b] hover:text-[#a3b993]">
              Ver Black
            </Link>
          </li>
          <li>
            <Link href="https://www.agendalafecha.com/invitaciones/vintage/" className="text-[#463e3b] hover:text-[#a3b993]">
              Ver Vintage
            </Link>
          </li>
          <li>
            <Link href="https://www.agendalafecha.com/invitaciones/romantica/" className="text-[#463e3b] hover:text-[#a3b993]">
              Ver Romántica
            </Link>
          </li>
        </ul>
      </section>

      {/* Copyright Footer */}
      <section className="footer bg-[#463e3b] py-4 text-white text-center text-sm">
        <div className="container mx-auto px-4">
          <p>
            Invitaciones Digitales{" "}
            <Link
              href="https://agendalafecha.com"
              target="_blank"
              className="hover:underline"
            >
              Agendá la Fecha
            </Link>{" "}
            2025. Todos los derechos reservados{" "}
            <Link
              href="https://www.instagram.com/agendalafecha/"
              target="_blank"
              className="hover:underline"
            >
              agendalafecha
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
}
