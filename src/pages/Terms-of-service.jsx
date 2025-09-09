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
        className="text-2xl font-bold text-zinc-700 mb-4"
      >
        {t('terms.title')}
      </motion.h1>

      

      <div className="mt-10 space-y-6 p-6 bg-zinc-50 rounded-2xl shadow-md m-1">
        {sections.map((key, index) => (
          <div
            key={key}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="p-6 m-1"
          >
            <h2 className="text-lg font-medium text-zinc-600 whitespace-pre-line">
              {t(`terms.content.${key}`).split('\n')[0]}
            </h2>
            <p className="text-lg font-medium text-zinc-600 whitespace-pre-line">
              {t(`terms.content.${key}`).split('\n').slice(1).join('\n')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
