import React from "react";

const Content = () => {
  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto space-y-14">
        {/* Section 1 */}
        <section className="rounded-xl bg-white/5 backdrop-blur-sm p-6 shadow-md border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">
            Første gang med online casino? Vi hjælper dig!
          </h2>
          <p className="text-base text-gray-200 leading-relaxed">
            Tænker du på at prøve online casino, men ved ikke hvor du skal
            begynde? På{" "}
            <strong className="text-white">bedsteonlinecasinoerdk.org</strong> gør vi
            det enkelt. Vores specialister tester og anmelder de fineste danske
            casinoer — alt fra kampagner og spil til sikkerhed og pengeudbetalinger. 
            Begynd din rejse sikkert og velinformeret.
          </p>
        </section>

        {/* Section 2 */}
        <section className="rounded-xl bg-white/5 backdrop-blur-sm p-6 shadow-md border border-white/10">
          <h2 className="text-2xl font-semibold mb-3 text-amber-300">
            Top kvalitet danske online casinoer
          </h2>
          <p className="text-gray-200 mb-4">
            Vi har grundigt gennemgået og evalueret de mest troværdige casinoer i
            Danmark med særlig fokus på kampagner, brugeroplevelse, spilvalg og
            kundeservice.
          </p>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
            <p className="font-semibold text-white mb-2">
              Vores vurderingskriterier:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Kampagner inklusive velkomstbonus, gratis spins og loyalitetsprogrammer</li>
              <li>Spilkvalitet og leverandører af spilsoftware</li>
              <li>Sikre betalingsløsninger og hurtige pengeudbetalinger</li>
              <li>Omfattende udvalg af spilleautomater og bordspil</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="rounded-xl bg-white/5 backdrop-blur-sm p-6 shadow-md border border-white/10">
          <h2 className="text-2xl font-semibold mb-3 text-lime-300">
            Hvorfor du kan have tillid til os
          </h2>
          <p className="text-gray-200">
            Vores evalueringer foretages selvstændigt og upartisk. Vi har ikke
            direkte samarbejde med casinoerne og garanterer derfor ærlige
            bedømmelser. Tilladelser, brugervenlighed og spillertilfredshed er
            vores hovedfaktorer.
          </p>
          <p className="mt-4 text-gray-200">
            Vores mål? At give dig en sikker og underholdende spiloplevelse — og
            gøre det enkelt at finde det perfekte casino gennem vores sammenligning.
          </p>
        </section>

        {/* Section 4 */}
        <section className="rounded-xl bg-rose-900/20 backdrop-blur-sm p-6 border border-rose-400/20 shadow-inner">
          <h2 className="text-xl font-semibold mb-3 text-rose-400">
            Problemer med spil? Vi kan hjælpe.
          </h2>
          <p className="text-gray-300">
            Spil skal være underholdning — ikke en belastning. Ring til{" "}
            <strong>StopSpillet.dk</strong> eller kontakt dem anonymt på{" "}
            <strong>70 22 28 25</strong> for gratis og fortrolig støtte. Du
            skal være mindst 18 år gammel for at spille.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-xs text-gray-400 text-center pt-6 border-t border-white/10">
          <p>
            Ved at bruge vores service accepterer du vores privatlivspolitik.
            Indholdet udgør ikke juridisk rådgivning. Kampagner kan ændres uden
            forudgående varsel.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Content;
