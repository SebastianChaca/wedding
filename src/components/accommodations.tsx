"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Accommodations() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // página:Info util: Alojamientos y traslados: Hoteles:
  // Hotel Premier
  // Apartamento Las Rosas/Complejo Tempo
  // Brothers Hostel
  // Hospedaje Casa Azul
  // La Casa Grande Link House
  // Altira Colonia de los Lecheros
  // Traslado
  // Auto express
  // Remis El Sol 
  // Taxis Villa Allende
  // Remis Corva coop Itda
  return (
    <section className="alojamientos bg-[#DFEBE7] py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="animated fadeInUp max-w-xl mx-auto">
          <h4 className="text-xl font-semibold mb-3 text-[#463e3b]">INFO ÚTIL</h4>
          <p className="text-[#463e3b] mb-6 leading-relaxed">
            Te dejamos sugerencias de alojamientos y traslados para que aproveches ese fin de semana al máximo.
          </p>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="btn">
                VER MÁS
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 max-w-md mx-auto rounded-lg">
              <div className="text-left">
                <h3 className="text-xl font-bold text-[#463e3b] mb-4">Hoteles</h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <span className="font-semibold block">Hotel Premier</span>
                    {/* Contacto / Página Web */}
                  </li>
                  <li>
                    <span className="font-semibold block">Apartamento Las Rosas/Complejo Tempo</span>
                    {/* Contacto / Página Web */}
                  </li>
                  <li>
                    <span className="font-semibold block">Brothers Hostel</span>
                    {/* Contacto / Página Web */}
                  </li>
                  <li>
                    <span className="font-semibold block">Hospedaje Casa Azul</span>
                    {/* Contacto / Página Web */}
                  </li>
                  <li>
                    <span className="font-semibold block"> La Casa Grande Link House</span>
                    {/* Contacto / Página Web */}
                  </li>
                  <li>
                    <span className="font-semibold block">Altira Colonia de los Lecheros</span>
                    {/* Contacto / Página Web */}
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-[#463e3b] mb-4">Traslados</h3>
                <ul className="space-y-3">
                  <li>
                    <span className="font-semibold block">Auto express</span>
                    {/* Contacto */}
                  </li>
                  <li>
                    <span className="font-semibold block">Remis El Sol</span>
                    {/* Contacto */}
                  </li>
                  <li>
                    <span className="font-semibold block">Taxis Villa Allende</span>
                    {/* Contacto */}
                  </li>
                  <li>
                    <span className="font-semibold block">Remis Corva coop Itda</span>
                    {/* Contacto */}
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
