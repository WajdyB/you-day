'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Letter {
  id: string
  title: string
  content: string
}

const letters: Letter[] = [
  {
    id: 'doubt',
    title: 'Open when you doubt yourself',
    content: `Dear Extraordinary One,

I know this feeling. The weight of wondering if you're enough. The spiral of second-guessing. But let me tell you something that's always been true, even when you can't see it:

You are not defined by your doubts. You are defined by your resilience in facing them.

Every time you've questioned yourself and kept going anyway? That's courage. Every time you've felt small but showed up? That's strength. You are not your fears. You are what you do despite them.

The version of you that you're doubting? She's already done impossible things. She's survived 100% of her worst days. She's stronger than she knows.

Trust her. She's never let you down.`
  },
  {
    id: 'alone',
    title: 'Open when you feel alone',
    content: `Dear Beautiful Soul,

Loneliness is a liar. It makes you feel invisible when you are anything but.

You are not alone because you are unlovable. You are alone because you are rare. And rare things? They don't belong everywhere. They belong exactly where they are—waiting for the right people to recognize their value.

Not everyone will understand you. Not everyone will see you. But the ones who do? They'll never forget you.

You are not too much. You are not too little. You are exactly who you need to be.

And even in the quiet, you are not unseen. You matter more than you know.`
  },
  {
    id: 'overthink',
    title: 'Open when you overthink at 2am',
    content: `Dear Restless Mind,

It's 2am, and your thoughts are louder than the silence. I get it.

Here's what I need you to know: Your mind is not your enemy. It's just trying to protect you. Those racing thoughts? They're not proof that something's wrong. They're proof that you care deeply about getting things right.

But tonight, you don't need to solve everything. You don't need to have all the answers. You just need to breathe.

Tomorrow will come. And you will handle it the way you always do—with grace, strength, and a quiet determination that nobody gives you credit for.

For now, rest. You've earned it.`
  },
  {
    id: 'win',
    title: 'Open when you win',
    content: `Dear Champion,

Look at you.

You did it. And I'm not surprised—because I've always known what you're capable of. But I hope you're surprised. I hope you let yourself feel this.

You didn't get here by accident. You got here because you worked for it. Because you believed in something bigger than your fear. Because you didn't give up when it was hard.

This moment? It's yours. Own it. Celebrate it. Let it remind you of who you are.

Because this is just the beginning. And if this is what you can do now? Imagine what comes next.

You're unstoppable. And I can't wait to see what you do with that.`
  },
  {
    id: 'worth',
    title: 'Open when you forget your worth',
    content: `Dear Irreplaceable,

Sometimes we forget. We get so used to being strong that we forget how rare strength is. We get so used to being kind that we forget how powerful kindness is.

So let me remind you:

Your worth is not negotiable. It's not determined by who sees it or who doesn't. It's not measured by productivity or perfection. Your worth simply is—because you are.

You are not valuable because of what you do. You are valuable because of who you are.

And who you are? Someone who has survived storms and still finds reasons to smile. Someone who lifts others even when she's heavy. Someone who chooses love even when the world gives her reasons not to.

You don't need to prove anything to anyone. You already are everything.`
  }
]

export default function OpenWhenLetters() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (selectedLetter && !isTyping) {
      setIsTyping(true)
      setDisplayedText('')
      let index = 0
      const text = selectedLetter.content

      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setIsTyping(false)
        }
      }, 20)

      return () => clearInterval(interval)
    }
  }, [selectedLetter])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-serif text-center mb-16 text-lavender text-shadow-glow"
      >
        Letters For You
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {letters.map((letter, index) => (
          <motion.button
            key={letter.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(205, 180, 219, 0.4)'
            }}
            onClick={() => setSelectedLetter(letter)}
            className="glass p-6 rounded-2xl text-left group cursor-pointer border border-white/10 hover:border-lavender/50 transition-all"
          >
            <div className="text-4xl mb-4">💌</div>
            <h3 className="text-xl font-serif text-white group-hover:text-blush transition-colors">
              {letter.title}
            </h3>
          </motion.button>
        ))}
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-3xl w-full rounded-3xl p-8 md:p-12 relative border-2 border-lavender/30 max-h-[80vh] overflow-y-auto"
              style={{
                boxShadow: '0 0 80px rgba(205, 180, 219, 0.4)',
                background: 'linear-gradient(135deg, rgba(29, 30, 44, 0.9), rgba(45, 27, 61, 0.9))'
              }}
            >
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl transition-colors"
              >
                ✕
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl mb-6"
              >
                💌
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-serif text-lavender mb-8">
                {selectedLetter.title}
              </h3>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed whitespace-pre-line font-light">
                  {displayedText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-6 bg-lavender ml-1"
                    />
                  )}
                </p>
              </div>

              {!isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 text-center"
                >
                  <p className="text-gold italic">– Someone who sees you</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
