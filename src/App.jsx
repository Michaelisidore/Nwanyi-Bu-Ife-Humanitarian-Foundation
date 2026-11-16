import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Founder from './components/sections/Founder'
import Impact from './components/sections/Impact'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Founder />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
