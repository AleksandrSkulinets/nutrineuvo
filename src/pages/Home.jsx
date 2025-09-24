import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import WhyNutrineuvo from "../components/WhyNutrineuvo";
import MitenToimi from "../components/MitenToimi";

export default function Home() {
  const { t } = useTranslation(); // Hook to use i18n translations

  return (
    <>
      {/* Add Helmet for SEO */}
      <Helmet>
        <title>{t("homePage.title")}</title>{" "}
        {/* Dynamic title based on language */}
        <meta name="description" content={t("homePage.description")} />{" "}
        {/* Dynamic description based on language */}
        {/* Open Graph Tags */}
        <meta property="og:title" content={t("homePage.title")} />
        <meta property="og:description" content={t("homePage.description")} />
        <meta property="og:url" content="https://www.nutrineuvo.fi" />
      </Helmet>

      {/* Content Sections */}
      <section className="py-20 min-h-screen">
        <Hero
          badge="🌿 NutriNeuvo"
          heading="Nutrition Therapy Simplified"
          description="Book a licensed nutrition therapist easily online."
          buttons={{
            primary: { text: "Book Now", url: "/ajanvaraus" },
            secondary: { text: "Learn More", url: "/about" },
          }}
          image={{
            src: "/assets/nutri-hero.jpg",
            alt: "Nutrition consultation",
          }}
        />
      </section>
      <section>
        <WhyNutrineuvo />
      </section>
      <section>
        <MitenToimi />
      </section>
    </>
  );
}
