import Footer from './Footer'
import Navbar from './Navbar'

type Layout = {
    children: React.ReactNode,
}

const Layout = ({ children }: Layout) => {
  return (
    <>
        <Navbar />
        <main>{ children }</main>
        <Footer />
    </>
  )
}

export default Layout