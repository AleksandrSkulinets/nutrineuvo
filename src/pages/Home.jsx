import React from 'react';
import { Helmet } from 'react-helmet'; 
import { useTranslation } from 'react-i18next'; 
import Hero from "../components/Hero";
import About from "../components/About";
import WhyNutrineuvo from '../components/WhyNutrineuvo';
import MitenToimi from '../components/MitenToimi';
export default function Home() {
 const { t } = useTranslation(); // Hook to use i18n translations

  return (
    <div>
      {/* Add Helmet for SEO */}
      <Helmet>
        <title>{t("homePage.title")}</title> {/* Dynamic title based on language */}
        <meta name="description" content={t("homePage.description")} /> {/* Dynamic description based on language */}

        {/* Open Graph Tags */}
        <meta property="og:title" content={t("homePage.title")} />
        <meta property="og:description" content={t("homePage.description")} />
        <meta property="og:url" content="https://www.nutrineuvo.fi" />
      </Helmet>

      {/* Content Sections */}
      <section><Hero /></section>
      <section><WhyNutrineuvo /></section>
      <section><MitenToimi /></section>
    </div>
  );
}
