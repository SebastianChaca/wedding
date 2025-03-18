import Image from "next/image";
import Link from "next/link";

export function Instagram() {
  return (
    <section className="instagram bg-white py-14">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="https://ext.same-assets.com/1073293755/3820449567.svg+xml"
            alt="Instagram"
            width={50}
            height={50}
          />
        </div>

        <div className="animated fadeInUp max-w-xl mx-auto">
          <span className="hashtag text-xl font-semibold block mb-4 text-[#463e3b]">
            @beluyamador
          </span>
          <p className="text-[#463e3b] mb-8 leading-relaxed">
            ¡Preparate para nuestro gran día!
            Ya podés seguirnos en nuestra cuenta para ver todas las novedades del casamiento y etiquetarnos en tus fotos y videos.
          </p>

          <Link
            href="https://www.instagram.com/agendalafecha"
            target="_blank"
            className="btn"
          >
            Ver en Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
