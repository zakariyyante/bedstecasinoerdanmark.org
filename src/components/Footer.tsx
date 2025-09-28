'use client'

import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom py-8">
        {/* Simple Footer Content */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-accent-300 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-white">{siteConfig.name}</span>
          </Link>
          <p className="text-gray-400 text-sm mb-6">
            <strong>onlinecasinosdansk</strong> hjælper dig med at finde de bedste danske online casinoer.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
              <span>ROFUS</span>
              <span>StopSpillet</span>
              <span>18+</span>
              <span>eCOGRA</span>
              <span>BeGambleAware</span>
            </div>
            <p className="text-gray-500 text-xs">
              Dette websted indeholder ikke spil med rigtige penge. Det er kun til underholdning og information. Du skal være 18+ år.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4">
          <div className="text-center text-gray-400 text-sm">
            © {currentYear} onlinecasinosdansk. Alle rettigheder forbeholdes.
          </div>
        </div>
      </div>
    </footer>
  )
}