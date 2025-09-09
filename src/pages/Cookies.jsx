import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CookiesPolicy() {
  const { t } = useTranslation();

 
  const sections = ["whatIsCookie", "purposes"];

  return (
    <div className="mx-auto max-w-5xl min-h-screen px-4 py-20 text-white">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="p-6 bg-zinc-50 rounded-2xl shadow-md m-1"
      >
        {/* Otsikko */}
        <h1 className="text-2xl font-bold text-zinc-700 mb-4">
          {t("privacyPolicy.cookiesPolicy.title")}
        </h1>

       
        <p className="text-lg font-medium text-zinc-600 whitespace-pre-line">
          {t("privacyPolicy.cookiesPolicy.description")}
        </p>

        {/* Lakiperuste */}
        <p className="text-lg font-medium text-zinc-600 whitespace-pre-line">
          {t("privacyPolicy.cookiesPolicy.legalBasis")}
        </p>

        {/* Osioiden renderöinti */}
        {sections.map((key) => (
          <div key={key} className="mb-6">
            <h2 className="text-2xl font-bold text-zinc-700 mb-4">
              {t(`privacyPolicy.cookiesPolicy.sections.${key}.title`)}
            </h2>
            <p className="text-lg font-medium text-zinc-600 whitespace-pre-line">
              {t(`privacyPolicy.cookiesPolicy.sections.${key}.content`)}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
