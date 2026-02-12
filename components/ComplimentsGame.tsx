'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

const compliments = [
  "Your energy shifts the entire room.",
  "You don't even try to be unforgettable. You just are.",
  "Your mind is dangerously beautiful.",
  "You are the calm and the chaos.",
  "People don't forget you. They can't.",
  "Your laugh could light up the darkest corners.",
  "You make ordinary moments feel extraordinary.",
  "Your strength is magnetic.",
]

interface Orb {
  id: number
  x: number
  y: number
  revealed: boolean
  compliment: string
}

export default function ComplimentsGame() {
  const [orbs, setOrbs] = useState<Orb[]>([])
  const [revealedCount, setRevealedCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    
    const newOrbs = compliments.map((compliment, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      revealed: false,
      compliment,
    }))
    setOrbs(newOrbs)

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleOrbClick = (id: number) => {
    setOrbs(prev => prev.map(orb => 
      orb.id === id ? { ...orb, revealed: true } : orb
    ))
    setRevealedCount(prev => {
      const newCount = prev + 1
      if (newCount === compliments.length) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
      }
      return newCount
    })
  }

  const allRevealed = revealedCount === compliments.length

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-serif text-center mb-8 text-lavender text-shadow-glow"
      >
        Catch What Makes You Rare
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass px-6 py-3 rounded-full mb-16"
      >
        <p className="text-xl text-blush">
          You've unlocked <span className="text-gold font-bold">{revealedCount}</span> /{' '}
          {compliments.length} reasons you're extraordinary
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl h-[600px]">
        {orbs.map((orb) => (
          <div key={orb.id}>
            {!orb.revealed ? (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  x: [0, 20, -20, 0],
                  y: [0, -20, 20, 0],
                }}
                transition={{
                  scale: { delay: orb.id * 0.1 },
                  x: { duration: 4 + orb.id, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 3 + orb.id, repeat: Infinity, ease: 'easeInOut' },
                }}
                onClick={() => handleOrbClick(orb.id)}
                className="absolute cursor-pointer group"
                style={{
                  left: `${orb.x}%`,
                  top: `${orb.y}%`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  className="relative"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-lavender to-blush opacity-70 blur-sm absolute inset-0" />
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-lavender to-blush flex items-center justify-center relative">
                    <motion.span
                      animate={{ 
                        textShadow: [
                          '0 0 10px rgba(255,255,255,0.5)',
                          '0 0 20px rgba(255,255,255,1)',
                          '0 0 10px rgba(255,255,255,0.5)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-3xl"
                    >
                      ✨
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute"
                style={{
                  left: `${orb.x}%`,
                  top: `${orb.y}%`,
                }}
              >
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                  className="glass p-4 md:p-6 rounded-2xl border border-gold/30 max-w-xs"
                  style={{ boxShadow: '0 0 30px rgba(255, 209, 102, 0.3)' }}
                >
                  <p className="text-white text-sm md:text-base font-medium text-center">
                    "{orb.compliment}"
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {allRevealed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-16 text-center"
        >
          <motion.p
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 209, 102, 0.5)',
                '0 0 40px rgba(255, 209, 102, 0.8)',
                '0 0 20px rgba(255, 209, 102, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-3xl md:text-5xl font-serif text-gold"
          >
            Imagine needing a Valentine<br />when you are the gift.
          </motion.p>
        </motion.div>
      )}
    </section>
  )
}
