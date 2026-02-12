'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FinalReveal() {
  const [showReplay, setShowReplay] = useState(false)

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Spotlight effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div 
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(205, 180, 219, 0.3), transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* First line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-6xl font-serif text-white/90 mb-12 leading-relaxed"
        >
          You don't need someone
          <br />
          to prove your worth.
        </motion.p>

        {/* Pause animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
        >
          {/* Second line */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 3, duration: 1 }}
            className="text-3xl md:text-6xl font-serif text-lavender/90 mb-16 leading-relaxed"
          >
            Anyone lucky enough to know you
            <br />
            already wins.
          </motion.p>

          {/* Final golden text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 5, duration: 1 }}
            onAnimationComplete={() => setShowReplay(true)}
          >
            <motion.h1
              animate={{
                textShadow: [
                  '0 0 20px rgba(255, 209, 102, 0.5)',
                  '0 0 60px rgba(255, 209, 102, 0.8)',
                  '0 0 20px rgba(255, 209, 102, 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl md:text-8xl font-serif text-gold mb-8"
            >
              Happy You Day.
            </motion.h1>

            {/* Floating sparkles */}
            <div className="relative h-32">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-20, -100],
                    x: [0, (Math.random() - 0.5) * 100],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeOut'
                  }}
                  className="absolute left-1/2 top-0 text-2xl"
                >
                  ✨
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Replay button */}
          {showReplay && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReplay}
              className="mt-8 px-10 py-4 glass border border-lavender/30 rounded-full text-lavender hover:text-blush transition-colors text-lg font-semibold"
            >
              Replay the Experience ↻
            </motion.button>
          )}
        </motion.div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 6, duration: 2 }}
          className="mt-20 text-white/40 text-sm italic"
        >
          You are seen. You are valued. You are extraordinary.
        </motion.p>
      </div>
    </section>
  )
}
