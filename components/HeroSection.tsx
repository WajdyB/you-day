'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HeroSectionProps {
  onStart: () => void
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  // Prevent scrolling until button is clicked
  useEffect(() => {
    if (!hasClicked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [hasClicked])

  const handleClick = () => {
    setHasClicked(true)
    onStart()
    // Smooth scroll to next section
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }, 300)
  }

  const mainText = "In a world full of ordinary…"
  const secondLine = "there is you."
  const subtitle = "And that changes everything."

  useEffect(() => {
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 4000)
    const buttonTimer = setTimeout(() => setShowButton(true), 6000)
    return () => {
      clearTimeout(subtitleTimer)
      clearTimeout(buttonTimer)
    }
  }, [])

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center z-10 px-4">
        <div className="mb-6">
          {mainText.split('').map((char, i) => (
            <motion.span
              key={`main-${i}`}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-4xl md:text-7xl font-serif text-lavender text-shadow-glow"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        
        <div className="mb-12">
          {secondLine.split('').map((char, i) => (
            <motion.span
              key={`second-${i}`}
              custom={mainText.length + i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-5xl md:text-8xl font-serif text-blush text-shadow-glow font-bold"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        {showSubtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-serif text-white/80 mb-16"
          >
            {subtitle}
          </motion.p>
        )}

        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255, 209, 102, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="px-12 py-4 bg-gradient-to-r from-lavender to-blush text-night font-semibold text-xl rounded-full cursor-glow relative overflow-hidden"
          >
            <motion.span
              className="relative z-10"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(255,255,255,0.8)',
                  '0 0 10px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click Me 💫
            </motion.span>
          </motion.button>
        )}
      </div>

      {/* Scroll indicator - only show after clicked */}
      {showButton && hasClicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-lavender rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-lavender rounded-full" />
          </motion.div>
        </motion.div>
      )}
      
      {/* Hint text if not clicked */}
      {showButton && !hasClicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-lavender/60 text-sm"
        >
          ↑ Click the button above ↑
        </motion.div>
      )}
    </section>
  )
}
