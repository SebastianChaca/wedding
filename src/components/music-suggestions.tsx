import Image from "next/image";
import Link from "next/link";

export function MusicSuggestions() {
  return (
    <section className="canciones bg-white py-14">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="https://ext.same-assets.com/2351773197/2939459430.svg+xml"
            alt="Canciones"
            width={50}
            height={50}
          />
        </div>

        <div className="animated fadeInUp max-w-xl mx-auto">
          <h4 className="text-xl font-semibold mb-3 text-[#463e3b]">¿QUÉ CANCIONES NO PUEDEN FALTAR?</h4>
          <p className="text-[#463e3b] mb-8 leading-relaxed">
            ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
          </p>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdx-rgnkGiTmXEdbE9mjW8X-RYHMivJfTrEOiS1js17lv6jQQ/viewform"
            target="_blank"
            className="btn"
          >
            Sugerir canción
          </Link>
        </div>
      </div>
    </section>
  );
}
