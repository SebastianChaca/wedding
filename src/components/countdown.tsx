"use client";

import { useState, useEffect } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: November 23, 2025 at 19:00 (7 PM)
    const targetDate = new Date('2025-11-23T19:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        // The day has arrived
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Calculate initially
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cuenta-regresiva bg-white py-10" id="cuenta-regresiva">
      <div className="container mx-auto px-4">
        <p className="text-center text-[#463e3b] mb-3 font-medium">Bienvenidos a nuestra boda</p>

        <div className="flex flex-row justify-center items-center gap-1 mt-4">
          <div className="flex flex-col items-center w-16">
            <p className="num_cuenta text-2xl md:text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</p>
            <p className="text_cuenta text-xs md:text-sm text-gray-600">días</p>
          </div>
          <p className="text-xl md:text-3xl font-bold">:</p>
          <div className="flex flex-col items-center w-16">
            <p className="num_cuenta text-2xl md:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</p>
            <p className="text_cuenta text-xs md:text-sm text-gray-600">hs</p>
          </div>
          <p className="text-xl md:text-3xl font-bold">:</p>
          <div className="flex flex-col items-center w-16">
            <p className="num_cuenta text-2xl md:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</p>
            <p className="text_cuenta text-xs md:text-sm text-gray-600">min</p>
          </div>
          <p className="text-xl md:text-3xl font-bold">:</p>
          <div className="flex flex-col items-center w-16">
            <p className="num_cuenta text-2xl md:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</p>
            <p className="text_cuenta text-xs md:text-sm text-gray-600">seg</p>
          </div>
        </div>
      </div>
    </section>
  );
}
