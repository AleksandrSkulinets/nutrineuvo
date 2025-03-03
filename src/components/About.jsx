import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 text-white">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10  text-3xl md:text-4xl font-black uppercase text-zinc-400 text-center"
      >
        {t('aboutsection.title')}
      </motion.h2>
      
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-lg text-zinc-500"
      >
        {t('aboutsection.description')}
      </motion.p>    
    </div>
  );
}
