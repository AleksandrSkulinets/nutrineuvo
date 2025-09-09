import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0 w-6 h-6 text-[#07be61]"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function WhyNutrineuvo() {
  const { t } = useTranslation();

  const features = [
    t('why.support_special_diets'),
    t('why.no_diagnosis'),
    t('why.no_referral'),
    t('why.data_secure'),
    t('why.no_commitment'),
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 text-white">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-6 text-3xl md:text-4xl font-black uppercase text-zinc-400 text-center"
      >
        {t('why.title')}
      </motion.h2>

      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-10 text-lg text-zinc-500 text-center font-semibold"
      >
        {t('why.description')}
      </motion.p>

   <ul className="grid gap-10 sm:grid-cols-2 max-w-2xl mx-auto list-none p-0 m-0">
  {features.map((feature, index) => {
    const isLast = index === features.length - 1;

    return (
      <motion.li
        key={index}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={`${
          isLast ? 'sm:col-span-2 sm:flex sm:justify-center' : ''
        }`}
      >
        <div className="flex items-start space-x-3">
          <CheckIcon />
          <span className="text-zinc-500 font-semibold text-left">{feature}</span>
        </div>
      </motion.li>
    );
  })}
</ul>




    </div>
  );
}
