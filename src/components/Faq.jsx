import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation(); // Use the translation hook
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Define the FAQs using the translation keys
  const faqs = [
    {
      question: "faq.booking.question",
      answer: "faq.booking.answer",
    },
    {
      question: "faq.services.question",
      answer: "faq.services.answer",
    },
    {
      question: "faq.consultationDifference.question",
      answer: "faq.consultationDifference.answer",
    },
    {
      question: "faq.doctorNote.question",
      answer: "faq.doctorNote.answer",
    },
    {
      question: "faq.dietPlanTiming.question",
      answer: "faq.dietPlanTiming.answer",
    },
    {
      question: "faq.dietChanges.question",
      answer: "faq.dietChanges.answer",
    },
    {
      question: "faq.coaching.question",
      answer: "faq.coaching.answer",
    },
    {
      question: "faq.cancellation.question",
      answer: "faq.cancellation.answer",
    },
    {
      question: "faq.customerSupport.question",
      answer: "faq.customerSupport.answer",
    },
  ];

  return (
    <div id="faq" className="mx-auto max-w-5xl py-20 text-white">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-12  text-3xl md:text-4xl font-black uppercase text-zinc-400 text-center"
      >
        {t("faq.title")}
      </motion.h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="border border-zinc-700 rounded-2xl p-6 bg-zinc-50 m-1"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-lg font-medium text-zinc-400 focus:outline-none"
            >
              {t(faq.question)} 
              <span className="text-zinc-500">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-zinc-400"
              >
                {t(faq.answer)} {/* Using translation for answer */}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
