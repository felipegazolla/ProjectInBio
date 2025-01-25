import { Faq } from '@/components/landing/Faq'
import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/landing/Hero'
import { Pricing } from '@/components/landing/Pricing'
import { VideoExplanation } from '@/components/landing/VideoExplanation'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <Header />
      <Hero />
      {/* <VideoExplanation /> */}
      <Pricing />
      <Faq />
    </div>
  )
}
