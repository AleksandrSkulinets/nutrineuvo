import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is Nutrineuvo?",
    answer:
      "Nutrineuvo is an online service that offers personalized nutrition solutions for users following special diets. With our service, you can get customized recipes, automatic shopping lists, and consultations with a nutritionist.",
  },
  {
    question: "How does Nutrineuvo work?",
    answer: `1️⃣ Choose the right plan on our website.  
    2️⃣ Fill out a short survey about your diet and preferences.  
    3️⃣ Receive personalized recipes and shopping lists on your account.  
    4️⃣ Optionally, book additional consultations with a nutritionist.`,
  },
  {
    question: "Is Nutrineuvo free?",
    answer:
      "Yes, we offer a Free plan that includes access to our recipe bank, articles, and community support. Paid plans provide more personalization and additional features.",
  },
  {
    question: "What is the difference between the Plus and Premium plans?",
    answer:
      "• Plus (€39/month): Personalized recipes, automatic shopping list customization, and nutritional analysis.  \n• Premium (€69/month): Everything in Plus, plus a weekly updated nutrition plan and access to the premium community.",
  },
  {
    question: "How can I book a consultation with a nutritionist?",
    answer:
      "You can book a consultation directly on our website. We offer 30-minute and 60-minute sessions, as well as discounted subscription packages for regular follow-ups.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time without a long-term commitment. Paid plans are billed monthly, and cancellations take effect at the start of the next billing period.",
  },
  {
    question: "Who is Nutrineuvo suitable for?",
    answer:
      "Nutrineuvo is suitable for anyone looking for expert nutrition solutions, especially those following special diets such as gluten-free, vegan, FODMAP, or keto.",
  },
  {
    question: "How does the automatic shopping list creation work?",
    answer:
      "When you select recipes on our website, Nutrineuvo automatically generates a shopping list based on your chosen meals and dietary preferences.",
  },
  {
    question: "Do you offer a mobile app?",
    answer:
      "Currently, Nutrineuvo is only available through our website, but a mobile app is planned for the future.",
  },
  {
    question: "How do I get started with Nutrineuvo?",
    answer:
      "1️⃣ Sign up on our website and choose a plan.  \n2️⃣ Fill out a short survey about your diet and preferences.  \n3️⃣ Get instant access to your first recipes and shopping lists!",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major payment methods, including bank and credit cards as well as online banking payments.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support via email at info@nutrineuvo.fi or through our website's chat service. Premium customers receive priority support and faster response times.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-5xl py-20 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-12 text-4xl font-black uppercase text-zinc-400 text-center"
      >
        Frequently Asked Questions
      </motion.h1>

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
              {faq.question}
              <span className="text-zinc-500">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-zinc-400"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
