'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import HeroSection from '@/components/HeroSection'
import MainCharacterSection from '@/components/MainCharacterSection'
import PortraitSection from '@/components/PortraitSection'
import ComplimentsGame from '@/components/ComplimentsGame'
import OpenWhenLetters from '@/components/OpenWhenLetters'
import FinalReveal from '@/components/FinalReveal'
import SoundToggle from '@/components/SoundToggle'
import CursorGlow from '@/components/CursorGlow'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="relative min-h-screen">
      <CursorGlow />
      <ParticleBackground />
      <SoundToggle />
      
      <HeroSection onStart={() => setStarted(true)} />
      
      {started && (
        <>
          <MainCharacterSection />
          <PortraitSection />
          <ComplimentsGame />
          <OpenWhenLetters />
          <FinalReveal />
        </>
      )}
    </main>
  )
}
