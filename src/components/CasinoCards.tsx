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
    <section className="py-16 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            De Bedste <span className="text-accent-400">Danske Casinoer</span>
          </h2>
        </div>

        {/* Casino Card - Single Featured Card */}
        <div className="max-w-3xl mx-auto">
          {siteConfig.casinos.map((casino, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300 group cursor-pointer relative"
              onClick={() => handleCasinoClick(casino)}
            >
              {/* Badge */}
              {casino.badge && (
                <div className="absolute top-4 right-4 bg-accent-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {casino.badge}
                </div>
              )}

              <div className="flex items-center justify-between">
                {/* Casino Logo & Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-secondary-400">
                      {casino.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {casino.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">
                      {casino.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="rating-stars">
                        {renderStars(casino.rating)}
                      </div>
                      <span className="text-gray-300 font-semibold">
                        {casino.rating.toFixed(1)} / 10
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="btn-primary px-6 py-3 group-hover:bg-accent-600 transition-all duration-300">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
