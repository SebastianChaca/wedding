"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Accommodations() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="alojamientos bg-[#f9f9f9] py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="animated fadeInUp max-w-xl mx-auto">
          <h4 className="text-xl font-semibold mb-3 text-[#463e3b]">INFO ÚTIL</h4>
          <p className="text-[#463e3b] mb-6 leading-relaxed">
            Te dejamos sugerencias de alojamientos y traslados para que aproveches ese fin de semana al máximo.
          </p>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="btn-alt">
                VER MÁS
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 max-w-md mx-auto rounded-lg">
              <div className="text-left">
                <h3 className="text-xl font-bold text-[#463e3b] mb-4">Hoteles</h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <span className="font-semibold block">Nombre Hotel 1</span>
                    Contacto / Página Web
                  </li>
                  <li>
                    <span className="font-semibold block">Nombre Hotel 2</span>
                    Contacto / Página Web
                  </li>
                  <li>
                    <span className="font-semibold block">Nombre Hotel 3</span>
                    Contacto / Página Web
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-[#463e3b] mb-4">Traslados</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-semibold block">Título 1</span>
                    Contacto
                  </li>
                  <li>
                    <span className="font-semibold block">Título 2</span>
                    Contacto
                  </li>
                  <li>
                    <span className="font-semibold block">Título 3</span>
                    Contacto
                  </li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
