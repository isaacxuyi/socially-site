import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import Plans from './Componets/Plans/Plans'
import Title from './Componets/Title/Title'
import About from './Componets/About/About'
import OurCreators from './Componets/Our Creators/OurCreators'
import Testimonials from './Componets/Testimonials/Testimonials'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our Plans'  title='What We Offer'/>
      <Plans/>
      <About/>
      <Title subTitle='Gallary'  title='Our Creators'/>
      <OurCreators/>
      <Title subTitle='TESTIMONIALS'  title='What Creators says'/>
      <Testimonials/>
      <Title subTitle='contact us'  title='Get in touch'/>
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
