import Header from '@/components/Header'
import CasinoCards from '@/components/CasinoCards'
import TrustSignals from '@/components/TrustSignals'
import WhyChooseUs from '@/components/WhyChooseUs'
import FAQ from '@/components/FAQ'
import ResponsibleGambling from '@/components/ResponsibleGambling'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <CasinoCards />
      <TrustSignals />
      <WhyChooseUs />
      <FAQ />
      <ResponsibleGambling />
      <Footer />
    </main>
  )
}
