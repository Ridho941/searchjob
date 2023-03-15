import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Kategori from '../components/Kategori'
import Lowongan from '../components/Lowongan'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Kategori />
        <Lowongan />
        <Footer />
    </div>
  )
}

export default Home