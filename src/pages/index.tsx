import CustomizeSection from '@/components/landingPage/CustomizeSection'
import Hero from '@/components/landingPage/Hero'
import Layout from '@/components/landingPage/Layout'
import ShareSection from '@/components/landingPage/ShareSection'
import TemplateSection from '@/components/landingPage/TemplateSection'

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

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}
