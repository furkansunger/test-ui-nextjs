import { Cards } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-20 px-10 py-40'>
      <h1 className='text-[#1B264F] text-[56px] font-bold text-center leading-[55px]'>We make creative media <br /> that <span className='text-[#506BCA]'>adds value</span></h1>

      <Cards />

      <button className='bg-[#1B264F] text-white text-[17px] tracking-widest leading-[60px] px-14 rounded-xl shadow-2xl'>Get Started</button>
    </main>
  )
}

export default Home