import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto p-4 text-sm md:text-base leading-relaxed text-white bg-black">
        <h1 className="text-2xl font-bold mb-4">Privatlivspolitik</h1>

        <p className="mb-4">
          Hos <strong>Onlinecasinosdansk.com</strong> prioriterer vi dit
          privatliv højt. På denne side forklarer vi, hvordan vi håndterer og
          beskytter oplysninger, der indsamles i forbindelse med dit besøg på
          vores hjemmeside.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Oplysningstyper vi indsamler
        </h2>
        <p className="mb-4">
          Vi registrerer kun et begrænset sæt informationer for at forbedre
          brugeroplevelsen:
          <ul className="list-disc ml-6 mt-2">
            <li>Tekniske data såsom IP-adresse og browseroplysninger</li>
            <li>Sideinteraktion og navigationsmønstre</li>
            <li>Eventuel kontaktinformation, du frivilligt deler</li>
            <li>Foretrukne indstillinger og sprogvalg</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-2">Brug af cookies</h2>
        <p className="mb-4">
          Vores platform anvender <strong>ikke</strong> cookies til
          personidentificerbar sporing. Vi respekterer din digitale anonymitet
          og anvender kun teknologi, der er nødvendig for funktionalitet og
          performance.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Statistik og eksterne værktøjer
        </h2>
        <p className="mb-4">
          Til analyseformål benytter vi tjenester som f.eks.{" "}
          <strong>Google Analytics</strong>. Disse værktøjer indsamler
          anonymiserede oplysninger såsom trafikkilder og brugeradfærd for at
          hjælpe os med at optimere hjemmesiden. Der overføres ikke personlige
          data til tredjepart.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Formålet med dataindsamling
        </h2>
        <p className="mb-4">
          Oplysninger anvendes udelukkende til:
          <ul className="list-disc ml-6 mt-2">
            <li>At analysere og forbedre webstedets funktioner</li>
            <li>At forstå vores brugeres behov og præferencer</li>
            <li>At sikre stabilitet og teknisk drift</li>
            <li>At tilbyde relevant og brugervenligt indhold</li>
          </ul>
        </p>

        <p className="mt-6">
          Ved at benytte <strong>Onlinecasinosdansk.com</strong> accepterer du
          vores retningslinjer for privatliv. Du er velkommen til at kontakte os
          via formularen på hjemmesiden, hvis du har spørgsmål til vores
          databehandling eller ønsker indsigt i dine oplysninger.
        </p>
      </div>
    </div>
  );
};

export default page;
