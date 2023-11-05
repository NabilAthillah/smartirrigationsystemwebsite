import DashboardHero from '@/components/DashboardHero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className='max-w-screen bg-white'>
        <Navbar />
        <DashboardHero />
    </main>
  )
}

export default page