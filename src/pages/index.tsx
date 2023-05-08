import CustomizeSection from '@/components/CustomizeSection'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
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

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>
}
