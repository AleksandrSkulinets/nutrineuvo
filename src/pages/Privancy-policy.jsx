import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-5xl min-h-screen px-4 py-20 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-400"
      >
        {t("privacyPolicy.title")}
      </motion.h1>

      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-lg text-zinc-500"
      >
        {t("privacyPolicy.general.content")}
      </motion.p>

      <div className="mt-10 space-y-6">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="p-6 bg-zinc-50 m-1"
        >
          <h2 className="text-lg font-medium text-zinc-400">
            {t("privacyPolicy.customerRegistry.title")}
          </h2>
          <p className="mt-2 text-zinc-400">
            {t("privacyPolicy.customerRegistry.content")}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="p-6 bg-zinc-50 m-1"
        >
          <h2 className="text-lg font-medium text-zinc-400">
            {t("privacyPolicy.nutritionistRegistry.title")}
          </h2>
          <p className="mt-2 text-zinc-400">
            {t("privacyPolicy.nutritionistRegistry.content")}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="p-6 bg-zinc-50 m-1"
        >
          <h2 className="text-lg font-medium text-zinc-400">
            {t("privacyPolicy.dataProcessing.title")}
          </h2>
          <p className="mt-2 text-zinc-400">
            {t("privacyPolicy.dataProcessing.content")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
