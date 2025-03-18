import Image from "next/image";
import Link from "next/link";

export function Ceremony() {
  return (
    <section className="ceremonia-fiesta bg-white py-12 mb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ceremony */}
          <div className="col-span-1 flex flex-col items-center animated fadeInUp">
            <div className="mb-4">
              <Image
                src="https://ext.same-assets.com/4002508196/2447978662.svg+xml"
                alt="Ceremonia"
                width={60}
                height={60}
              />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-[#463e3b]">Ceremonia</h4>
              <p className="text-[#463e3b] mb-6 leading-relaxed">
                23 de Noviembre <br />
                19:00 hs.<br />
                Iglesia Nuestra Señora del Carmen<br />
                Villa Allende, Córdoba.<br />
                Recibí debajo las indicaciones para llegar.
              </p>
              <Link
                href="https://goo.gl/maps/RcNhghscz1XGGymM8"
                target="_blank"
                className="btn"
              >
                LLEGAR A LA CEREMONIA
              </Link>
            </div>
          </div>

          {/* Reception */}
          <div className="col-span-1 flex flex-col items-center animated fadeInUp">
            <div className="mb-4">
              <Image
                src="https://ext.same-assets.com/728111315/3189612825.svg+xml"
                alt="Fiesta"
                width={60}
                height={60}
              />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-[#463e3b]">Fiesta</h4>
              <p className="text-[#463e3b] mb-6 leading-relaxed">
                Después de la ceremonia<br />
                Rincón Calina<br />
                Unquillo, Córdoba.<br />
                ¡Te esperamos!
              </p>
              <Link
                href="https://goo.gl/maps/SMuchjXPddgD6vFY6"
                target="_blank"
                className="btn"
              >
                LLEGAR A LA FIESTA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
