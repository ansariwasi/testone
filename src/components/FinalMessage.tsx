import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const FinalMessage: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <Heart className="text-pink-500" size={48} fill="currentColor" />
        </motion.div>

        <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">
          Happy Birthday Pretty Princess!!
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed font-semibold text-center">
        My beautiful Priyanshi, today is the day the universe decided to bless the world with YOU, the most precious, most gorgeous, and most lovable soul ever!
        Every moment with you is magic, every smile of yours is my favorite sight, and every laugh of yours is the sweetest melody. I felt like the luckiest person alive just to love you, to adore you, and to call you mine. 
        On your special day, I wish you all the love, joy, and happiness in the world, because you deserve nothing less than the absolute best. May this year bring you endless smiles, sweet surprises, and everything your heart desires.
        Enjoy your day, my Peacock, my Princess, my sweetheart! I love you more than words can ever say!
        </p>

        <div className="text-center mt-8 text-2xl">
          My Ineffable Theodore❤️
        </div>
      </motion.div>
    </motion.div>
  );
};