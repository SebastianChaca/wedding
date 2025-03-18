import Image from "next/image";

export function Gallery() {
  // Array of gallery images
  const galleryImages = [
    {
      src: "https://ext.same-assets.com/1025164693/4096884196.jpeg",
      alt: "Couple photo 1"
    },
    {
      src: "https://ext.same-assets.com/573328930/2564266186.jpeg",
      alt: "Couple photo 2"
    },
    {
      src: "https://ext.same-assets.com/1737974357/1456322910.jpeg",
      alt: "Couple photo 3"
    },
    {
      src: "https://ext.same-assets.com/257100265/4137642644.jpeg",
      alt: "Couple photo 4"
    },
    {
      src: "https://ext.same-assets.com/2035694099/735915590.jpeg",
      alt: "Couple photo 5"
    },
    {
      src: "https://ext.same-assets.com/1499550558/1453045449.jpeg",
      alt: "Couple photo 6"
    },
    {
      src: "https://ext.same-assets.com/2455233341/2277717771.jpeg",
      alt: "Couple photo 7"
    },
    {
      src: "https://ext.same-assets.com/3958262445/3885354026.jpeg",
      alt: "Couple photo 8"
    }
  ];

  return (
    <section className="galeria bg-[#f9f9f9] py-12">
      <div className="container mx-auto px-4">
        <h4 className="title-galery fade-in text-[#463e3b] uppercase tracking-wide">NOSOTROS...</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-span-1 animated fadeInUp opacity-100">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
