import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PhoneCheck } from './icons/PhoneCheck';
import { HeartPlus } from './icons/HeartPlus';
import { User } from './icons/User';

export default function MitenToimi() {
  const { t } = useTranslation();

  const steps = [
  {
    icon: <div className="text-zinc-500 text-2xl"><User /></div>,
    text: t('howitworks.register'),
  },
  {
    icon: <div className="text-zinc-500 text-2xl"><HeartPlus /></div>,
    text: t('howitworks.choose_therapist'),
  },
  {
    icon: <div className="text-zinc-500 text-2xl"><PhoneCheck /></div>,
    text: t('howitworks.get_guidance'),
  },
];



  return (
    <div className="mx-auto max-w-5xl px-4 py-20 text-white mt-10">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-20 text-3xl md:text-4xl font-black uppercase text-zinc-400 text-center"
      >
        {t('howitworks.title')}
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-3 max-w-4xl mx-auto text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            {step.icon}
            <p className="text-zinc-500 font-medium leading-relaxed text-lg">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
