export default function ResponsibleGambling() {
  return (
    <section className="section-padding bg-red-900/20 border-t border-red-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-red-900/30 rounded-2xl p-8 border border-red-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Har du problemer med spil? Få hjælp.
            </h2>
            <p className="text-red-200 mb-6 leading-relaxed">
              Spil skal være sjovt — ikke en byrde. Kontakt <strong>StopSpillet.dk</strong> eller ring anonymt til <strong>70 22 28 25</strong> for gratis og fortrolig rådgivning. Du skal være mindst 18 år for at spille.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://stopspillet.dk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-red-600 hover:bg-red-700"
              >
                Besøg StopSpillet.dk
              </a>
              <a
                href="tel:70222825"
                className="btn-secondary"
              >
                Ring 70 22 28 25
              </a>
            </div>
            
            <div className="mt-6 text-sm text-red-300">
              <p>Ved brug af vores tjeneste accepterer du vores privatlivspolitik. Indholdet er ikke juridisk rådgivning. Tilbud kan ændres uden varsel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
