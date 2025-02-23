import React from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    title: "Free",
    price: "€0",
    description: "Basic access to content and community.",
    features: [
      "Access to articles, blogs, and nutrition guides",
      "Large basic recipe bank (no personalization)",
      "Community support (forums, Q&A section)",
    ],
    buttonText: "Get Started",
    buttonColor: "bg-emerald-100 border border-zinc-700 text-zinc-700 hover:bg-emerald-200",
  },
  {
    title: "Basic",
    price: "€19",
    description: "Expanded tools and filtered recipes.",
    features: [
      "All Free plan features",
      "Extended recipe bank with dietary filters",
      "Automated shopping list for selected meals",
      "Basic personalized recommendations",
    ],
    buttonText: "Choose Basic",
    buttonColor: "bg-[#07be61] text-white hover:bg-emerald-600",
  },
  {
    title: "Plus",
    price: "€39",
    description: "Personalized diet with weekly meal plans.",
    features: [
      "All Basic plan features",
      "Weekly personalized recipes based on diet",
      "Auto-customized shopping list",
      "Nutritional analysis of selected meals",
      "Access to exclusive content & courses",
    ],
    buttonText: "Choose Plus",
    buttonColor: "bg-[#07be61] text-white hover:bg-emerald-600",
  },
  {
    title: "Premium",
    price: "€69",
    description: "Advanced diet management & expert guidance.",
    features: [
      "All Plus plan features",
      "Weekly updated personal nutrition plan",
      "Premium community (lectures & webinars)",
      "Priority customer support",
    ],
    buttonText: "Choose Premium",
    buttonColor: "bg-[#07be61] text-white hover:bg-emerald-600",
  },
];

export default function Products() {
  return (
    <div className="mx-auto px-4 py-20 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 text-4xl font-black uppercase text-zinc-400 text-center"
      >
        Our Pricing Plans
      </motion.h1>
      
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-zinc-500">
        Choose a plan that fits your needs and upgrade when you're ready.
      </p>

      <div className="mt-16 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="relative p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col bg-white text-zinc-600"
          >
            {plan.title === "Premium" && (
              <p className="absolute top-0 py-1.5 px-4 bg-[#07be61] text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Most Popular
              </p>
            )}

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6">{plan.description}</p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-[#07be61]">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              className={`${plan.buttonColor} mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
              href="/"
            >
              {plan.buttonText}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
