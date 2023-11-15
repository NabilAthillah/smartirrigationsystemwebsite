"use client"
import DashboardHero from '@/components/DashboardHero'
import HistoryModal from '@/components/HistoryModal'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  function openHistory(){
    setIsHistoryVisible(true);
  }

  function closeHistory(){
    setIsHistoryVisible(false);
  }

  return (
    <main className='max-w-screen bg-white'>
        <Navbar />
        <DashboardHero openHistory={openHistory}/>
        {isHistoryVisible &&
         <HistoryModal closeHistory={closeHistory}/>
        }
    </main>
  )
}

export default page