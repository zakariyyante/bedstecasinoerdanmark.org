import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Last updated: {siteConfig.legal.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              </p>
              <ul className="text-slate-300 mb-8 space-y-2">
                <li>• Name and contact information (email address, phone number)</li>
                <li>• Account credentials and preferences</li>
                <li>• Communications with us (emails, messages, feedback)</li>
                <li>• Information you provide in surveys or forms</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6">2. How We Use Your Information</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-slate-300 mb-8 space-y-2">
                <li>• Provide, maintain, and improve our services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send technical notices, updates, and support messages</li>
                <li>• Respond to your comments and questions</li>
                <li>• Communicate with you about products, services, and promotions</li>
                <li>• Monitor and analyze trends and usage</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6">3. Information Sharing</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except in the following circumstances:
              </p>
              <ul className="text-slate-300 mb-8 space-y-2">
                <li>• With service providers who assist us in operating our website and conducting our business</li>
                <li>• When required by law or to protect our rights and safety</li>
                <li>• In connection with a merger, acquisition, or sale of assets</li>
                <li>• With your explicit consent</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6">4. Data Security</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">5. Cookies and Tracking</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">6. Third-Party Links</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">7. Your Rights</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="text-slate-300 mb-8 space-y-2">
                <li>• Access to your personal information</li>
                <li>• Correction of inaccurate information</li>
                <li>• Deletion of your personal information</li>
                <li>• Objection to processing of your information</li>
                <li>• Data portability</li>
                <li>• Withdrawal of consent</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6">8. Children's Privacy</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">9. Changes to This Policy</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">10. Contact Us</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-slate-300">
                      {siteConfig.legal.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
