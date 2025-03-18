"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function ConfirmAttendance() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const calendarLinks = [
    {
      name: "Google",
      icon: "https://ext.same-assets.com/2634723415/2476183622.svg+xml",
      url: "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20251123T190000Z%2F20251123T235900Z&text=Boda%20de%20Belu%20y%20Amadeo&text=Boda%20de%20Belu%20y%20Amadeo"
    },
    {
      name: "Outlook",
      icon: "https://ext.same-assets.com/4128904591/1303355424.svg+xml",
      url: "https://outlook.live.com/calendar/0/action/compose?allday=false&enddt=2025-11-23T23%3A59%3A00Z&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2025-11-23T19%3A00%3A00Z&subject=Boda%20de%20Belu%20y%20Amadeo"
    },
    {
      name: "Microsoft 365",
      icon: "https://ext.same-assets.com/2436653026/3918092692.svg+xml",
      url: "https://outlook.office.com/calendar/action/compose?allday=false&enddt=2025-11-23T23%3A59%3A00Z&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2025-11-23T19%3A00%3A00Z&subject=Boda%20de%20Belu%20y%20Amadeo"
    },
    {
      name: "Apple",
      icon: "https://ext.same-assets.com/46838204/2747269317.svg+xml",
      url: "data:text/calendar;charset=utf-8,BEGIN%3AVCALENDAR%0AVERSION%3A2.0%0ABEGIN%3AVEVENT%0AURL%3AEvento%0ADTSTART%3A20251123T190000Z%0ADTEND%3A20251123T235900Z%0ASUMMARY%3ABoda%20de%20Belu%20y%20Amadeo%0AEND%3AVEVENT%0AEND%3AVCALENDAR"
    },
    {
      name: "Yahoo",
      icon: "https://ext.same-assets.com/1649693988/4131168596.svg+xml",
      url: "https://calendar.yahoo.com/?dur=&et=20251123T205900Z&st=20251123T160000Z&title=Boda%20de%20Belu%20y%20Amadeo&v=60"
    }
  ];

  return (
    <section className="confirmar bg-hero-pattern bg-cover bg-center py-16 relative">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animated fadeInUp max-w-xl mx-auto">
          <h4 className="text-2xl font-semibold mb-3 text-white">CONFIRMACIÓN DE ASISTENCIA</h4>
          <p className="text-white mb-6 leading-relaxed">
            Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe9YQMx7pJ7roFnvzgB353ytHGRUEOI_339DoK6--8r9jtZwg/viewform"
            target="_blank"
            className="btn bg-[#a3b993] mb-10 inline-block"
          >
            Confirmar asistencia
          </Link>

          <div className="mt-12 pt-6 border-t border-white border-opacity-30">
            <p className="text-white mb-4">¡Agendá la fecha en tu calendario!</p>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="btn bg-[#dbb384] inline-flex items-center">
                  <Image
                    src="https://ext.same-assets.com/296808585/563982904.svg+xml"
                    alt="Calendario"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  AGENDAR EVENTO
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white p-6 max-w-sm mx-auto rounded-lg">
                <h3 className="text-xl font-bold text-[#463e3b] mb-4 text-center">Agregar al calendario</h3>
                <div className="space-y-4">
                  {calendarLinks.map((calendar, index) => (
                    <a
                      key={index}
                      href={calendar.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                    >
                      <Image
                        src={calendar.icon}
                        alt={calendar.name}
                        width={24}
                        height={24}
                        className="mr-3"
                      />
                      <span className="text-[#463e3b]">{calendar.name}</span>
                    </a>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
