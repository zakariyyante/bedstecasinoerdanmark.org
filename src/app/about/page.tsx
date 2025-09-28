import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

export default function About() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">{siteConfig.name}</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We're dedicated to helping you make informed decisions and save money on the products and services you need most.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                At {siteConfig.name}, we believe that everyone deserves access to accurate, unbiased information 
                when making purchasing decisions. Our mission is to simplify the comparison process by providing 
                comprehensive reviews, verified deals, and expert recommendations.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We carefully evaluate products and services across various categories, testing features, 
                analyzing pricing, and gathering real customer feedback. Our team of experts works tirelessly 
                to ensure that our recommendations are based on thorough research and genuine value.
              </p>

              <ul className="text-slate-300 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  Comprehensive product and service testing
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  Real customer review analysis
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  Exclusive deal verification and negotiation
                </li>
                <li className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">✓</span>
                  Regular updates and market monitoring
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
                  <p className="text-slate-300">
                    We're completely transparent about our affiliate relationships and how we make money. 
                    This doesn't affect our recommendations or the prices you pay.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Accuracy</h3>
                  <p className="text-slate-300">
                    All our information is regularly updated and verified. We take pride in providing 
                    accurate, current data to help you make the best decisions.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Independence</h3>
                  <p className="text-slate-300">
                    Our editorial team operates independently from our business partnerships. 
                    We only recommend products and services we genuinely believe offer value.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-3">User Focus</h3>
                  <p className="text-slate-300">
                    Every decision we make is guided by what's best for our users. 
                    Your success and satisfaction are our top priorities.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Have questions about our platform or need help finding the right product or service? 
                We're here to help! Reach out to us anytime.
              </p>
              
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Email Us</h3>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Call Us</h3>
                    <a 
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      {siteConfig.contact.phone}
                    </a>
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
