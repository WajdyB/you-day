'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface CardData {
  icon: string
  title: string
  description: string
  content: string
}

const cards: CardData[] = [
  {
    icon: '🌟',
    title: 'The Energy',
    description: 'A force that cannot be ignored',
    content: 'You walk into a room and the atmosphere shifts. Not because you demand attention, but because your presence naturally commands it. There\'s a magnetic quality to your energy—it\'s warm, inviting, yet powerful. People gravitate toward you not just because of what you say, but because of how you make them feel: seen, valued, alive. Your energy doesn\'t drain spaces; it fills them with possibility.'
  },
  {
    icon: '🌻',
    title: 'The Kindness',
    description: 'Strength wrapped in gentleness',
    content: 'Your kindness is not naive—it\'s intentional. You choose compassion even when the world gives you reasons not to. You remember the small things, notice when someone is quiet, and offer warmth without being asked. But this kindness doesn\'t make you soft; it makes you strong. Because it takes courage to remain gentle in a world that rewards hardness. And you do it effortlessly.'
  },
  {
    icon: '🔥',
    title: 'The Strength',
    description: 'Unshakeable, even when tested',
    content: 'You\'ve been through things that would break others, yet you still stand. Not untouched, but undefeated. Your strength isn\'t loud or aggressive—it\'s quiet, steady, and unwavering. You don\'t need to prove yourself to anyone. You carry yourself with a grace that comes from knowing your worth, even on days when you doubt it. And that resilience? It\'s not just admirable. It\'s rare.'
  }
]

export default function MainCharacterSection() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-center mb-6 text-lavender text-shadow-glow"
        >
          She's Not Just a Person.
        </motion.h2>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif text-center mb-20 text-blush"
        >
          She's a Story.
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              onClick={() => setSelectedCard(card)}
              className="glass rounded-2xl p-8 cursor-pointer group relative overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/20 to-blush/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {card.icon}
                </motion.div>
                
                <h3 className="text-3xl font-serif text-lavender mb-4 group-hover:text-blush transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-white/70 text-lg">
                  {card.description}
                </p>

                <motion.div
                  className="mt-6 text-gold text-sm"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Click to explore →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCard(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass max-w-2xl w-full rounded-3xl p-8 md:p-12 relative border-2 border-lavender/30"
            style={{
              boxShadow: '0 0 60px rgba(205, 180, 219, 0.3)'
            }}
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl"
            >
              ✕
            </button>

            <div className="text-6xl mb-6">{selectedCard.icon}</div>
            
            <h3 className="text-4xl font-serif text-lavender mb-4">
              {selectedCard.title}
            </h3>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {selectedCard.content}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
