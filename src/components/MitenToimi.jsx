import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { User } from "./icons/User";
import { HeartPlus } from "./icons/HeartPlus";
import { PhoneCheck } from "./icons/PhoneCheck";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
export default function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <User className="shrink-0 text-white" />,
      title: t("why.support_special_diets"),
      desc: t("why.support_special_diets_desc"),
      bg: "bg-zinc-900 dark:bg-zinc-900", // stays dark always
      border: "border border-zinc-700/50",
      textColor: "text-white ",
    },
    {
      icon: <HeartPlus className="shrink-0" />,
      title: t("why.no_diagnosis"),
      desc: t("why.no_diagnosis_desc"),
        bg: "bg-primary text-primary-foreground",
      border: "border border-transparent",
      textColor: "text-primary-foreground",
    },
    {
      icon: <PhoneCheck className="shrink-0" />,
      title: t("why.no_referral"),
      desc: t("why.no_referral_desc"),
      bg: "bg-card dark:bg-zinc-900",
      border: "border border-border/50",
      textColor: "text-white",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto py-20 px-6">
        {/* Title & Description */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-end">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase text-primary">
              {t("howitworks.tagline")}
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground lg:text-balance">
              {t("howitworks.title")}
            </h2>
          </div>
          <p className="text-base font-medium ">
            {t("howitworks.description")}
          </p>
        </div>

        {/* Grid of reasons */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-xl p-6 flex flex-col justify-between h-full shadow ${reason.bg} ${reason.border}`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="p-3 ">{reason.icon}</div>
                  <span
                    className={`text-xl font-semibold tracking-tight ${reason.textColor}`}
                  >
                    {reason.title}
                  </span>
                </div>
                <p
                  className={`mt-4 ${
                    reason.textColor || "text-white"
                  }`}
                >
                  {reason.desc}
                </p>
              </div>

              <Button variant="ghost" className="mt-6 w-fit text-white">
                {t("learn_more")}
                 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
