import CustomizeSection from '@/components/CustomizeSection'
import Hero from '@/components/Hero'
import ShareSection from '@/components/ShareSection'
import TemplateSection from '@/components/TemplateSection'


export default function Home() {
  return (
    <main>
      <Hero />
      <ShareSection />
      <CustomizeSection />
      <TemplateSection />
    </main>
  )
}
