'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function PortraitSection() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 200, 221, 0.2), rgba(205, 180, 219, 0.1), transparent)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* Sealed Letter */
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-serif text-lavender text-shadow-glow mb-6"
              >
                A Memory Sealed With Love
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-white/60 mb-12 italic"
              >
                Some moments deserve to be opened slowly
              </motion.p>

              {/* Letter Envelope */}
              <motion.button
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpened(true)}
                className="relative group cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-lavender via-blush to-gold rounded-3xl opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Envelope */}
                <div className="relative glass rounded-2xl p-12 md:p-16 border-2 border-lavender/30 group-hover:border-blush/50 transition-all duration-300">
                  {/* Envelope flap decoration */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[50px] border-t-blush/30" />
                  
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="text-8xl md:text-9xl mb-6"
                  >
                    💌
                  </motion.div>
                  
                  <p className="text-2xl md:text-3xl font-serif text-white/80 mb-4">
                    Open Me
                  </p>
                  
                  <motion.p
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-gold text-sm md:text-base"
                  >
                    Click to reveal ✨
                  </motion.p>

                  {/* Decorative sparkles */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl pointer-events-none"
                      style={{
                        top: `${25 + i * 20}%`,
                        left: i % 2 === 0 ? '-10%' : 'auto',
                        right: i % 2 === 1 ? '-10%' : 'auto',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-lg opacity-60" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold rounded-tr-lg opacity-60" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold rounded-bl-lg opacity-60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold rounded-br-lg opacity-60" />
              </motion.button>
            </motion.div>
          ) : (
            /* Opened Letter with Photo */
            <motion.div
              key="photo"
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="flex flex-col items-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-serif text-lavender text-shadow-glow mb-4"
              >
                A Moment Worth Keeping
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-white/60 mb-12 italic"
              >
                When two worlds collide beautifully
              </motion.p>

              {/* Portrait Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative inline-block"
              >
                {/* Floating particles around image */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl pointer-events-none"
                    style={{
                      top: `${Math.cos((i * Math.PI * 2) / 8) * 50 + 50}%`,
                      left: `${Math.sin((i * Math.PI * 2) / 8) * 50 + 50}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  >
                    ✨
                  </motion.div>
                ))}

                {/* Elegant Frame */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {/* Outer glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-lavender via-blush to-gold rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute -inset-1 rounded-3xl opacity-75"
                    animate={{
                      background: [
                        'linear-gradient(45deg, #CDB4DB, #FFC8DD, #FFD166)',
                        'linear-gradient(90deg, #FFC8DD, #FFD166, #CDB4DB)',
                        'linear-gradient(135deg, #FFD166, #CDB4DB, #FFC8DD)',
                        'linear-gradient(180deg, #CDB4DB, #FFC8DD, #FFD166)',
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      padding: '2px',
                    }}
                  />

                  {/* Inner frame with glass effect */}
                  <div className="relative glass rounded-3xl p-4 md:p-6 border-2 border-white/10">
                    {/* Image container */}
                    <div className="relative w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden bg-night/50">
                      <img
                        src="/photo.png"
                        alt="A precious memory"
                        className="w-full h-auto object-contain rounded-2xl"
                        onLoad={() => setImageLoaded(true)}
                        style={{ maxHeight: '600px' }}
                      />
                      
                      {/* Loading shimmer effect */}
                      {!imageLoaded && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}

                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-lg opacity-60" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-lg opacity-60" />
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-lg opacity-60" />
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-lg opacity-60" />
                </motion.div>

                {/* Bottom sparkle trail */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="absolute -bottom-12 left-0 h-px bg-gradient-to-r from-transparent via-lavender to-transparent"
                />
              </motion.div>

              {/* Heartfelt Message Below Photo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-16 max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 border border-lavender/30"
              >
                <motion.p
                  className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-light"
                >
                  Some moments capture more than just smiles—they capture <span className="text-blush font-medium">connection</span>.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-lg md:text-xl text-white/80 leading-relaxed font-light"
                >
                  This is what <span className="text-lavender font-medium">special</span> looks like—not just you, not just me, 
                  but <span className="text-gold font-medium">us</span>. A moment frozen in time, 
                  a memory that reminds us that some bonds are simply <span className="text-blush font-medium">meant to be</span>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                  className="mt-8 flex justify-center gap-2"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="text-2xl"
                    >
                      ✨
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
