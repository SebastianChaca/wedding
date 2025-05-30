import Image from "next/image";

export function Header() {
  return (
    <section className="portada relative h-screen bg-hero-pattern bg-cover bg-center flex justify-center items-center">
      <div className="logo-portada fade-in-portada text-center">
        {/* <div className="relative w-80 mx-auto">
          <Image
            src="https://ext.same-assets.com/1264116772/2327274104.png"
            alt="Belu & Amadeo"
            width={320}
            height={200}
            className="mx-auto"
          />
        </div> */}
        {/* <h1 className="mt-4 text-[#463e3b]  parisienne-regular" style={{fontSize:'70px'}}>
          Cata y Enzo 
        </h1> */}
        <h1 className="mt-4 text-[#463e3b] parisienne-regular text-[70px]">
            <span className="block sm:inline">Cata </span>
            <span className="block sm:inline">y </span>
            <span className="block sm:inline">Enzo</span>
        </h1>
        <h1 className="mt-8 text-[#463e3b] uppercase tracking-widest font-light" style={{fontSize:'25px'}}>
          ¡NOS CASAMOS!
        </h1>
        <div className="scroll-down"></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
    </section>
  );
}
