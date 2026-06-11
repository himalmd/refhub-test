import Hero from '@/components/sections/Hero'
import ClientLogos from '@/components/sections/ClientLogos'
import AssessmentMethods from '@/components/sections/AssessmentMethods'
import AssessmentCategories from '@/components/sections/AssessmentCategories'
import YouTubeSection from '@/components/sections/YouTubeSection'
import SupademoSection from '@/components/sections/SupademoSection'
import Testimonials from '@/components/sections/Testimonials'
import AUTrustBadge from '@/components/sections/AUTrustBadge'
import ReferenceChecks from '@/components/sections/ReferenceChecks'
import Pricing from '@/components/sections/Pricing'
import TrustSection from '@/components/sections/TrustSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <AssessmentMethods />
      <YouTubeSection />
      <AssessmentCategories />
      <SupademoSection />
      <Testimonials />
      <AUTrustBadge />
      <Pricing />
      <TrustSection />
      <ReferenceChecks />
      <CTASection />
    </main>
  )
}
