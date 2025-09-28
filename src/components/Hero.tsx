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
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-400/5"></div>
      </div>

      <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="block text-white mb-1 sm:mb-2">
            {siteConfig.hero.headline.split(' ').slice(0, 3).join(' ')}
          </span>
          <span className="block gradient-text">
            {siteConfig.hero.headline.split(' ').slice(3).join(' ')}
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
          {siteConfig.hero.subtext}
        </p>

        {/* Trust Keywords - Grid Layout */}
        <div className="mb-8 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {trustKeywords.map((keyword, index) => (
              <div
                key={index}
                className="trust-badge text-center hover:bg-gray-800 transition-colors duration-200 text-sm px-3 py-2 rounded-lg"
              >
                <span className="truncate">{keyword}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
          <button className="btn-primary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 hover-lift w-full sm:w-auto max-w-xs sm:max-w-none">
            Sammenlign Casinoer
          </button>
          <button className="btn-secondary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 hover-lift w-full sm:w-auto max-w-xs sm:max-w-none">
            Læs Mere
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
