import Image from "next/image";

export function DressCode() {
  

  return (
    <section className="dresscode bg-[#f9f9f9] py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="animated fadeInUp max-w-xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="https://ext.same-assets.com/1854994500/3403919184.svg+xml"
              alt="Dress Code"
              width={50}
              height={50}
            />
          </div>

          <h4 className="text-xl font-semibold mb-3 text-[#463e3b]">VESTIMENTA</h4>
          <p className="text-[#463e3b]">Para honrar la solemnidad de la celebración y el sagrado lugar donde se llevará a cabo, les pedimos vestir con decoro y modestia, en consonancia con el espíritu cristiano.</p>
        </div>
      </div>
    </section>
  );
}
