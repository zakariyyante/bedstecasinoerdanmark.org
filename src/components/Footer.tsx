import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-accent-300 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold gradient-text">{siteConfig.name}</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                <strong>onlinecasinosdansk</strong> hjælper dig med at finde de bedste danske online casinoer. Vi fokuserer på troværdighed, bonusser og underholdning — helt gratis og sikkert.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Hjem
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Om Os
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Anmeldelser
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privatlivspolitik
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Vilkår & Betingelser
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Ansvarsfraskrivelse
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Affiliate Disclosure
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Kontakt Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-400">
                    {siteConfig.legal.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Licens & Sikkerhed */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Licens & Sikkerhed</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="text-gray-400 text-sm">ROFUS</span>
                  <span className="text-gray-400 text-sm">StopSpillet</span>
                  <span className="text-gray-400 text-sm">18+</span>
                  <span className="text-gray-400 text-sm">eCOGRA</span>
                  <span className="text-gray-400 text-sm">BeGambleAware</span>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">Vilkår & Betingelser</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privatlivspolitik</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm">SSL Secure</a>
                </div>
              </div>

              {/* Ansvarsfraskrivelse */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Ansvarsfraskrivelse</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dette websted indeholder ikke spil med rigtige penge. Det er kun til underholdning og information. Du skal være 18+ år. Har du problemer med spil, besøg StopSpillet.dk for rådgivning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} onlinecasinosdansk. Alle rettigheder forbeholdes.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Opdateret: {siteConfig.legal.lastUpdated}</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Alle systemer operationelle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
