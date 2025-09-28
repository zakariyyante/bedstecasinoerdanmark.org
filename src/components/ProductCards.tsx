'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/site'

interface Product {
  name: string
  logo: string
  description: string
  rating: number
  link: string
}

export default function ProductCards() {
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

  const handleProductClick = (product: Product) => {
    const finalLink = replaceTrackingParams(product.link)
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
    <section className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Top Rated <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Compare the best services based on expert reviews, customer feedback, and exclusive deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.products.map((product, index) => (
            <div
              key={index}
              className="card hover-lift group cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Logo */}
              <div className="p-8 text-center border-b border-gray-700">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
                  <span className="text-2xl font-bold text-secondary-400">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-secondary-300 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>

              {/* Rating */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-center mb-2">
                  <div className="rating-stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-gray-300 font-medium">
                    {product.rating}
                  </span>
                </div>
                <p className="text-center text-gray-400 text-sm">
                  Based on 1,000+ reviews
                </p>
              </div>

              {/* Description/Offer */}
              <div className="p-6">
                <p className="text-center text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  {product.description}
                </p>
                
                {/* CTA Button */}
                <button className="w-full btn-primary group-hover:bg-primary-600 transition-all duration-300">
                  Get This Deal
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            All deals are verified and updated daily
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Secure Transactions</span>
            <span>✓ Money Back Guarantee</span>
            <span>✓ 24/7 Support</span>
            <span>✓ Expert Reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
