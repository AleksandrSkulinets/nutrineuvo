import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Settings2, Blocks } from "lucide-react";
import { Button } from "../components/ui/button";

export default function WhyNutrineuvo() {
  const { t } = useTranslation();

  const features = [
    {
  icon: <Settings2 className="shrink-0 text-primary " />,
  title: t("why.support_special_diets"),
  desc: t("why.support_special_diets_desc"),
  bg: "bg-zinc-900 dark:bg-zinc-900", // stays dark always
  border: "border border-zinc-700/50",
  textColor: "text-white ",
},

    {
      icon: <Blocks className="shrink-0 text-primary dark:text-primary-foreground" />,
      title: t("why.no_diagnosis"),
      desc: t("why.no_diagnosis_desc"),
      bg: "bg-primary text-primary-foreground",
      border: "border border-transparent",
      textColor: "text-primary-foreground",
    },
    {
      icon: <Settings2 className="shrink-0 text-primary " />,
      title: t("why.no_referral"),
      desc: t("why.no_referral_desc"),
      bg: "bg-card dark:bg-zinc-900",
      border: "border border-border/50",
      textColor: "text-white",
    },
    {
      icon: <Blocks className="shrink-0 text-primary " />,
      title: t("why.data_secure"),
      desc: t("why.data_secure_desc"),
      bg: "bg-card dark:bg-zinc-900",
      border: "border border-border/50",
      textColor: "text-white ",
    },
    {
      icon: <Settings2 className="shrink-0 text-primary dark:text-primary-foreground" />,
      title: t("why.no_commitment"),
      desc: t("why.no_commitment_desc"),
      bg: "bg-primary text-primary-foreground",
      border: "border border-transparent",
      textColor: "text-primary-foreground ",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-6xl mx-auto py-20 px-6">
        {/* Title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-foreground"
        >
          {t("why.title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {t("why.description")}
        </motion.p>

        {/* Features grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-xl p-6 flex flex-col justify-between h-full shadow-sm transition-colors ${feature.bg} ${feature.border}`}
            >
              <div>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <span
                    className={`text-xl font-semibold tracking-tight ${feature.textColor}`}
                  >
                    {feature.title}
                  </span>
                </div>
              <p
                  className={`mt-4 ${
                    feature.textColor 
                  }`}
                >{feature.desc}</p>
              </div>

              <Button
  variant="link"
  className={`mt-6 w-fit text-sm ${feature.textColor}`}
>
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
