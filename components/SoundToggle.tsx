'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function SoundToggle() {
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element with the Friends theme song
    audioRef.current = new Audio('/Ill Be There for You (TV Version with Dialogue).mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.4
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleSound = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch((error) => {
          console.log('Audio playback failed:', error)
        })
      } else {
        audioRef.current.pause()
      }
    }
    setIsMuted(!isMuted)
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      onClick={toggleSound}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-40 glass p-4 rounded-full border border-white/20 hover:border-lavender/50 transition-all cursor-pointer group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ rotate: isMuted ? 0 : 360 }}
        transition={{ duration: 0.3 }}
        className="relative w-8 h-8 flex items-center justify-center"
      >
        {isMuted ? (
          <svg
            className="w-6 h-6 text-white/60 group-hover:text-lavender transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-lavender"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
      </motion.div>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap glass px-4 py-2 rounded-lg border border-lavender/30"
        >
          <p className="text-sm text-white">
            {isMuted ? 'Play music 🎵' : 'Pause music'}
          </p>
        </motion.div>
      )}
    </motion.button>
  )
}
