import React from 'react';
import { Helmet } from 'react-helmet'; 
import { useTranslation } from 'react-i18next'; 
import Hero from "../components/Hero";
import LastBlogPosts from "../components/LastBlog";
import About from "../components/About";
import Products from "../components/Products";
import Faq from "../components/Faq";

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
      <section><About /></section>
      <section><Products /></section>
      <section><Faq /></section>
      <section><LastBlogPosts /></section>
    </div>
  );
}
