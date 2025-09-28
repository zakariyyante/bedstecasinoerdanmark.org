'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ofte Stillede <span className="gradient-text">Spørgsmål</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Find svar på almindelige spørgsmål om vores sammenligningsplatform og tjenester
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {siteConfig.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                <button
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Har du stadig spørgsmål?
            </h3>
            <p className="text-gray-300 mb-6">
              Vores supportteam er her for at hjælpe dig med at finde de svar, du har brug for
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="btn-primary"
              >
                Kontakt Support
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="btn-secondary"
              >
                Ring til Os
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
