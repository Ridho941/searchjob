import React from 'react'
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
    </div>
  )
}

export default Home