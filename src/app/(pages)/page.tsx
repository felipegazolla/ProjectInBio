import { Faq } from '@/components/landing/Faq'
import { Header } from '@/components/ui/Header'
import Hero from '@/components/landing/Hero'
import { Pricing } from '@/components/landing/Pricing'
import { VideoExplanation } from '@/components/landing/VideoExplanation'
import type { Metadata } from 'next'
import { getSEOTags } from '@/lib/seo'

export const metadata: Metadata = getSEOTags({
  appName: 'Project-In-Bio',
  appDescription:
    'ProjectInBio - Seus projetos e redes sociais em um único link',
  keywords: ['ProjectInBio', 'projetos', 'redes sociais', 'link'],
  appDomain: 'https://www.project-in-bio.dev/',
  canonicalUrlRelative: '/',
})

export default function Home() {
  return (
    <div className="max-w-7xl  mx-auto h-screen">
      <Header />
      <Hero />
      {/* <VideoExplanation /> */}
      <Pricing />
      <Faq />
    </div>
  )
}
