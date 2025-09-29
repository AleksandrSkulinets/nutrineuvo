import React from 'react'
import { motion } from 'framer-motion';
export default function About() {
  return (
    <div className="mx-auto max-w-5xl min-h-screen px-4 py-20 text-white">
    
    <motion.h1
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-20 text-4xl font-black uppercase text-zinc-400"
    >
      About Us and something 
    </motion.h1>
    
    <motion.p
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="text-lg text-zinc-500"
    >
      Nutrineuvo is an online service that provides personalized recipes, automated shopping lists, and expert nutritionist support. Designed to simplify special diets, it helps users find safe, nutritious, and delicious meals tailored to their needs. The platform uses advanced technology to create meal plans based on individual dietary restrictions, ensuring a hassle-free experience. With automated shopping lists, users can easily source the right ingredients, while access to professional nutritionists offers expert guidance. Nutrineuvo continues to evolve, with plans to introduce smart tools like a mobile app, further enhancing personalized nutrition and making special diets easier and more convenient.
    </motion.p>    
  </div>
  )
}
