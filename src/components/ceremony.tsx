import Image from "next/image";
import Link from "next/link";

export function Ceremony() {
//   2 página: Ceremonia: 13 de diciembre/20.30hs/ Iglesia Nuestra Señora Señora de Loreto/Av Fuerza Aérea Argentina 6500/Recibí debajo las indicaciones para llegar
// Fiesta:Después de la ceremonia/La Quinta Casona/Celso Barrios 3490, Córdoba 

  return (
    <section className="ceremonia-fiesta bg-[#FFFFF] py-12 mb-5">
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
                13 de Diciembre <br />
                20:30 hs.<br />
                Iglesia Nuestra Señora Señora de Loreto<br />
                Av Fuerza Aérea Argentina 6500.<br />
                Recibí debajo las indicaciones para llegar.
              </p>
              <Link
                href="https://www.google.com/maps/place/Av.+Fuerza+Aerea+Argentina+6500,+X5010+C%C3%B3rdoba/@-31.4323771,-64.2773856,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a1d886563e8f:0x88d93849bf091db3!8m2!3d-31.4323771!4d-64.2748107!16s%2Fg%2F11y3305j80?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D"
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
                La Quinta Casona<br />
                Celso Barrios 3490, Córdoba.<br />
                ¡Te esperamos!
              </p>
              <Link
                href="https://www.google.com/maps/place/Celso+Barrios+3490,+X5014+C%C3%B3rdoba/@-31.4587248,-64.1556743,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a32df996b257:0xc566748c254dcf2d!8m2!3d-31.4587248!4d-64.1530994!16s%2Fg%2F11csl85s5x?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D"
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
