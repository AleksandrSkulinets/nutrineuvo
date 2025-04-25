import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
  const { t } = useTranslation();

  // Define the keys in order to preserve section order
  const sections = [
    'introduction',
    'general',
    'serviceDescription',
    'registration',
    'usage',
    'paymentsAndCancellations',
    'liability',
    'privacy',
    'ip',
    'legal',
    'contact',
  ];

  return (
    <div className="mx-auto max-w-5xl min-h-screen px-4 py-20 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-400"
      >
        {t('terms.title')}
      </motion.h1>

      

      <div className="mt-10 space-y-6">
        {sections.map((key, index) => (
          <motion.div
            key={key}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="p-6 bg-zinc-50 m-1"
          >
            <h2 className="text-lg font-medium text-zinc-400">
              {t(`terms.content.${key}`).split('\n')[0]}
            </h2>
            <p className="mt-2 whitespace-pre-line text-zinc-400">
              {t(`terms.content.${key}`).split('\n').slice(1).join('\n')}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
