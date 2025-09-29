import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {  Rocket, Globe, BookOpen, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Nutritionists = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Rocket className="h-5 w-5 md:h-6 md:w-6" />,
      title: t("nutritionist.freedom_flexibility"),
      desc: t("nutritionist.freedom_flexibility_desc"),
    },
    {
      icon: <Globe className="h-5 w-5 md:h-6 md:w-6" />,
      title: t("nutritionist.visibility_growth"),
      desc: t("nutritionist.visibility_growth_desc"),
    },
    {
      icon: <BookOpen className="h-5 w-5 md:h-6 md:w-6" />,
      title: t("nutritionist.blog_platform"),
      desc: t("nutritionist.blog_platform_desc"),
    },
    {
      icon: <Users className="h-5 w-5 md:h-6 md:w-6 " />,
      title: t("nutritionist.support_community"),
      desc: t("nutritionist.support_community_desc"),
    },
  ];

  return (
    <section className="py-20 min-h-screen">
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mx-auto max-w-6xl px-4 my-20 text-foreground"
      >
        {/* Intro */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("nutritionist.nutritionist_heading")}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("nutritionist.nutritionist_intro")}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-muted rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <span className="text-xl font-semibold tracking-tight">
                    {feature.title}
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground">{feature.desc}</p>
              </div>

              
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-start gap-6">
          <h2 className="text-2xl font-semibold text-start">
            {t("nutritionist.nutritionist_cta_title")}
          </h2>
          <p className="text-muted-foreground text-start max-w-2xl">
            {t("nutritionist.nutritionist_cta_desc")}
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link  target="_blank" 
    rel="noopener noreferrer" to="http://localhost:5173/signup/nutritionist">{t("nutritionist.submit_application")}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Nutritionists;
