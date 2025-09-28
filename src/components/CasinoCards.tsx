'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site'

interface Casino {
  name: string
  logo: string
  description: string
  rating: number
  minDeposit: string
  bonus: string
  link: string
}

export default function CasinoCards() {
  const [trackingParams, setTrackingParams] = useState<{gclid?: string, utm_source?: string, utm_medium?: string, utm_campaign?: string}>({})

  useEffect(() => {
    // Capture tracking parameters from URL
    const urlParams = new URLSearchParams(window.location.search)
    const params: {[key: string]: string} = {}
    
    // Capture GCLID and UTM parameters
    const trackingKeys = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    trackingKeys.forEach(key => {
      const value = urlParams.get(key)
      if (value) params[key] = value
    })
    
    setTrackingParams(params)
  }, [])

  const replaceTrackingParams = (link: string): string => {
    let processedLink = link
    
    // Replace GCLID placeholder
    if (processedLink.includes('{gclid}')) {
      processedLink = processedLink.replace('{gclid}', trackingParams.gclid || '')
    }
    
    // Replace UTM placeholders
    Object.keys(trackingParams).forEach(key => {
      const placeholder = `{${key}}`
      if (processedLink.includes(placeholder)) {
        processedLink = processedLink.replace(placeholder, trackingParams[key] || '')
      }
    })
    
    return processedLink
  }

  const handleCasinoClick = (casino: Casino) => {
    const finalLink = replaceTrackingParams(casino.link)
    window.open(finalLink, '_blank', 'noopener,noreferrer')
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="star" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="star" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" fill="url(#half-star)" />
        </svg>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="star-empty" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )
    }

    return stars
  }

  return (
    <section className="pt-24 pb-16 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            De Bedste <span className="gradient-text">Danske Casinoer</span>
          </h2>
        </div>

        {/* Casino Card - Single Featured Card */}
        <div className="max-w-4xl mx-auto">
          {siteConfig.casinos.map((casino, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-accent-500/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              onClick={() => handleCasinoClick(casino)}
            >
              {/* Badge */}
              {casino.badge && (
                <div className="absolute top-4 right-4 bg-accent-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {casino.badge}
                </div>
              )}

              <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Casino Logo & Info */}
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    <span className="text-2xl font-bold text-secondary-400">
                      {casino.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent-400 transition-colors duration-300 mb-2">
                      {casino.name}
                    </h3>
                    <p className="text-lg text-gray-300 mb-2">
                      {casino.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="rating-stars">
                        {renderStars(casino.rating)}
                      </div>
                      <span className="text-gray-300 font-semibold text-lg">
                        {casino.rating.toFixed(1)} / 10
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <button className="btn-primary text-xl px-8 py-4 group-hover:bg-accent-600 transition-all duration-300">
                    Play Now 🎯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Alle casinoer er verificerede og opdateret dagligt
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Sikre Transaktioner</span>
            <span>✓ Hurtige Udbetalinger</span>
            <span>✓ 24/7 Support</span>
            <span>✓ Ekspert Anmeldelser</span>
          </div>
        </div>
      </div>
    </section>
  )
}
