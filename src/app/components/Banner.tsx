"use client";
import React from "react";
import Link from "next/link";

const Banner = ({ title }: { title: string }) => {
  const currentDate = new Date();
  const dateString = `${currentDate.getDate()} ${currentDate.toLocaleString(
    "default",
    { month: "long" }
  )} ${currentDate.getFullYear()}`;

  return (
    <section className="relative overflow-hidden py-4 sm:py-20 px-4 bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-amber-300 mb-4">
          {title}
          <span className="block text-white text-xl md:text-2xl mt-2">
            {dateString}
          </span>
        </h1>

        <p className="hidden sm:block text-white/90 max-w-3xl mx-auto text-base sm:text-lg md:text-xl mb-10">
          Find de bedste online casinoer i Danmark med troværdige kampagner og sikker
          spiloplevelse. Vi prioriterer ansvarlighed og kvalitet — altid til din
          gavn.
        </p>
      </div>
    </section>
  );
};

export default Banner;
