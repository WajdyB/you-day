'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function PortraitSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

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
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-lavender text-shadow-glow mb-4"
        >
          A Moment Worth Keeping
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/60 mb-16 italic"
        >
          When two worlds collide beautifully
        </motion.p>

        {/* Portrait Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
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
            className="relative group cursor-pointer"
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
              <div className="relative w-full max-w-md md:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden bg-night/50">
                <Image
                  src="/picture.jpg"
                  alt="Portrait"
                  fill
                  className="object-cover"
                  onLoad={() => setImageLoaded(true)}
                  priority
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
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-6"
              >
                <p className="text-white/80 text-lg md:text-xl font-serif italic">
                  "Some moments capture more than just smiles—<br />they capture connection."
                </p>
              </motion.div>
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
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute -bottom-12 left-0 h-px bg-gradient-to-r from-transparent via-lavender to-transparent"
          />
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-2xl md:text-3xl font-serif text-blush/80"
        >
          This is what special looks like—<br />
          <span className="text-gold">not just you, but us.</span>
        </motion.p>
      </div>
    </section>
  )
}
