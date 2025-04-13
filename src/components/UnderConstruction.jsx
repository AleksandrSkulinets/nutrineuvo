import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const UnderConstruction = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white flex flex-col justify-center items-center h-2/3 w-2/3 md:h-1/2 mdw-1/2 p-6 rounded-2xl shadow-lg max-w-lg text-center"
      >
        <h2 className="text-2xl font-bold text-zinc-800">{t("underConstruction.title")}</h2>
        <p className="text-zinc-600 mt-12">{t("underConstruction.message")}</p>
        <button
          onClick={onClose}
          className="mt-12 px-4 py-2 bg-[#07be61] text-white hover:bg-emerald-600  rounded-lg "
        >
          {t("underConstruction.close")}
        </button>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
