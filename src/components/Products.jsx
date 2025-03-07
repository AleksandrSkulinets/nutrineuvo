import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const pricingPlans = [
  {
    title: "productsection.plans.consultation.title",
    price: "productsection.plans.consultation.price",
    description: "productsection.plans.consultation.description",
    features: [
      "productsection.plans.consultation.features.0",
      "productsection.plans.consultation.features.1",
      "productsection.plans.consultation.features.2",
      "productsection.plans.consultation.features.3",
      "productsection.plans.consultation.features.4",
    ],
    buttonText: "productsection.plans.consultation.buttonText",
    buttonColor: "bg-[#07be61] text-white hover:bg-emerald-600",
  },
  {
    title: "productsection.plans.express.title",
    price: "productsection.plans.express.price",
    description: "productsection.plans.express.description",
    features: [
      "productsection.plans.express.features.0",
      "productsection.plans.express.features.1",
      "productsection.plans.express.features.2",
    ],
    buttonText: "productsection.plans.express.buttonText",
    buttonColor: "bg-[#07be61] text-white hover:bg-emerald-600",
  },
  {
    title: "productsection.plans.mealplan.title",
    price: "productsection.plans.mealplan.price",
    description: "productsection.plans.mealplan.description",
    features: [
      "productsection.plans.mealplan.features.0",
      "productsection.plans.mealplan.features.1",
      "productsection.plans.mealplan.features.2",
      "productsection.plans.mealplan.features.3",
      "productsection.plans.mealplan.features.4",
      "productsection.plans.mealplan.features.5",
    ],
    buttonText: "productsection.plans.mealplan.buttonText",
    buttonColor: "bg-[#07be61] text-white hover:bg-emerald-600",
  },
  {
    title: "productsection.plans.coaching.title",
    price: "productsection.plans.coaching.price",
    description: "productsection.plans.coaching.description",
    features: [
      "productsection.plans.coaching.features.0",
      "productsection.plans.coaching.features.1",
      "productsection.plans.coaching.features.2",
      "productsection.plans.coaching.features.3",
      "productsection.plans.coaching.features.4",
      "productsection.plans.coaching.features.5",
    ],
    pricingDetails: [
      { duration: "productsection.plans.coaching.pricingDetails.0.duration", price: "productsection.plans.coaching.pricingDetails.0.price" },
      { duration: "productsection.plans.coaching.pricingDetails.1.duration", price: "productsection.plans.coaching.pricingDetails.1.price" },
      { duration: "productsection.plans.coaching.pricingDetails.2.duration", price: "productsection.plans.coaching.pricingDetails.2.price" },
    ],
    buttonText: "productsection.plans.coaching.buttonText",
    buttonColor: "bg-[#07be61] text-white hover:bg-emerald-600",
  },
];

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-[1920px] px-2 py-10 text-white">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10  text-3xl md:text-4xl font-black uppercase text-zinc-400 text-center"
      >
        {t("productsection.title")}
      </motion.h2>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mx-auto my-6 text-lg text-center text-zinc-500"
      >
        {t("productsection.description")}
      </motion.p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="relative p-6 border border-gray-200 rounded-2xl shadow-sm flex flex-col bg-white text-zinc-600 w-full h-full"
          >
            <h3 className="text-xl font-semibold">{t(plan.title)}</h3>
            <p className="mt-4 flex items-baseline">
              <span className="text-5xl font-extrabold tracking-tight">
                {t(plan.price)}
              </span>
            </p>

            {/* Render monthly pricing for the coaching plan */}
            {plan.pricingDetails && (
              <div className="mt-2 text-sm text-gray-600">
                {plan.pricingDetails.map((option, i) => (
                  <p key={i} className="text-center">
                    {t(option.duration)} - <strong>{t(option.price)}</strong>
                  </p>
                ))}
              </div>
            )}

            <p className="mt-6">{t(plan.description)}</p>
            <ul className="mt-6 space-y-4 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex">
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
                  <span className="ml-3">{t(feature)}</span>
                </li>
              ))}
            </ul>
            <a
  className={`${plan.buttonColor} mt-8  block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
  href="/"
>
  {t(plan.buttonText)}
</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
