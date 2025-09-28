'use client'

import { siteConfig } from '@/config/site'

export default function Hero() {
  const trustKeywords = [
    '🇩🇰 Spillemyndigheden Licenseret',
    '🛡️ Sikker Gaming',
    '⚡ Hurtige Udbetalinger',
    '💬 24/7 Dansk Support',
    '🎁 Eksklusive Bonusser',
    '📱 Mobil Venlig',
    '🔒 SSL Beskyttet',
    '⭐ Top Bedømt'
  ]

  return (
    <section className="relative py-16 bg-black">
      <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
          {siteConfig.hero.headline}
        </h1>

        {/* Trust Keywords - Simple Row */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {trustKeywords.map((keyword, index) => (
              <span
                key={index}
                className="text-sm text-gray-400 px-3 py-1 rounded-full border border-gray-700"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
