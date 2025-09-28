import { siteConfig } from '@/config/site'

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Derfor kan du <span className="gradient-text">stole på os</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Vores anmeldelser udføres uafhængigt og objektivt. Vi samarbejder ikke direkte med casinoerne 
              og sikrer derfor ærlig vurdering. Licens, brugervenlighed og spillertilfredshed er vores nøglefaktorer.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              {siteConfig.whyChooseUs.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Sammenlign Casinoer
              </button>
              <button className="btn-secondary">
                Læs Vores Anmeldelser
              </button>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8">

            {/* Visual Element */}
                <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Vores Mission
                </h3>
                <p className="text-gray-400">
                  At give dig en sikker og sjov spiloplevelse — og gøre det nemt at vælge det rette casino via vores sammenligning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
