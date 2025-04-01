"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function GiftRegistry() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="cbu bg-[#50675F] py-14 text-white text-center">
      <div className="container mx-auto px-4">
        <div className="animated fadeInUp max-w-xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="https://ext.same-assets.com/1762685105/656251357.svg+xml"
              alt="Regalo"
              width={50}
              height={50}
            />
          </div>
          <h4 className="text-xl font-semibold mb-3 text-[#ffffff]">REGALO</h4>
          <p className="mb-8 text-lg"> Tu presencia es lo más importante para nosotros. Si querés hacernos un regalo, podés hacerlo a través de la siguiente colaboración</p>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="btn">
                Ver Datos Bancarios
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 max-w-sm mx-auto rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#463e3b] mb-4">Datos Bancarios</h3>
                <ul className="text-left text-[#463e3b] mb-6 space-y-2">
                  <li>Nombre del Titular:  Martinez Zuviria Catalina</li>
                  <li>Tipo y número de cuenta: Cuentas en Pesos  431-358790/2
                  </li>
                  <li>CBU: 0720431388000035879022</li>
                  <li>Alias: operacionfamilia2025</li>
                  <li>DNI: 93935244</li>
                  <li>Banco Santander</li>
                </ul>

                {/* <h3 className="text-xl font-bold text-[#463e3b] mb-4">Lista de Regalos</h3>
                <ul className="text-left text-[#463e3b]">
                  <li>
                    <a
                      href="https://www.falabella.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a3b993] hover:underline"
                    >
                      Falabella Novios
                    </a>
                  </li>
                </ul> */}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
