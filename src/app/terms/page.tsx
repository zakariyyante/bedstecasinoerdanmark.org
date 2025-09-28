import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export default function Terms() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Please read these terms and conditions carefully before using our service.
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Last updated: {siteConfig.legal.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">2. Use License</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on our website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-slate-300 mb-8 space-y-2">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6">3. Disclaimer</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The materials on our website are provided on an 'as is' basis. We make no warranties, 
                expressed or implied, and hereby disclaim and negate all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for 
                a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">4. Limitations</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                In no event shall {siteConfig.legal.companyName} or its suppliers be liable for any 
                damages (including, without limitation, damages for loss of data or profit, or due to 
                business interruption) arising out of the use or inability to use the materials on our 
                website, even if we or our authorized representative has been notified orally or in writing 
                of the possibility of such damage.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">5. Accuracy of Materials</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                The materials appearing on our website could include technical, typographical, or 
                photographic errors. We do not warrant that any of the materials on its website are 
                accurate, complete, or current. We may make changes to the materials contained on its 
                website at any time without notice.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">6. Links</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We have not reviewed all of the sites linked to our website and are not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply 
                endorsement by us of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">7. Affiliate Relationships</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Some of the links on our website are affiliate links. This means we may receive a 
                commission if you click on the link and make a purchase. This does not affect the 
                price you pay for any product or service. We only recommend products and services 
                that we believe offer genuine value to our users.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">8. User Content</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                You are responsible for any content you submit to our website. By submitting content, 
                you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, 
                modify, and distribute your content in connection with our services.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">9. Prohibited Uses</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                You may not use our website:
              </p>
              <ul className="text-slate-300 mb-8 space-y-2">
                <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>• To submit false or misleading information</li>
                <li>• To upload or transmit viruses or any other type of malicious code</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6">10. Termination</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">11. Governing Law</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the United States, without 
                regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">12. Changes to Terms</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">13. Contact Information</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
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
