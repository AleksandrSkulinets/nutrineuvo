import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LastBlogPosts = () => {
  const { t, i18n } = useTranslation(); // useTranslation hook to get translations and i18n instance

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapping languages to their respective category IDs in WordPress
  const categoryMap = {
    en: 4, // English category ID
    fi: 3, // Finnish category ID
    sv: 5  // Swedish category ID
  };

  // Get the current language from i18n instance
  const language = i18n.language; 
  const categoryId = categoryMap[language];

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error when language changes

    // API URL with category filter based on language
    const apiUrl = `https://nutrineuvo.fi/wp-json/wp/v2/posts?categories=${categoryId}&_embed`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogPosts(data.slice(0, 5)); // Only display the first 5 posts
        } else {
          setError('No posts found for this category.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
        setError('Error fetching blog posts');
        setLoading(false);
      });
  }, [language, categoryId]); // Re-fetch when language or categoryId changes

  if (loading) {
    return (
      <div className="text-center text-white">
        <p>{t('loading')}</p> {/* Translated loading message */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Blog posts */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-white">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className="mb-20 text-3xl md:text-4xl font-black uppercase text-zinc-400"
        >
          {t('blogSection.lastBlogPosts')} {/* Translated Title */}
        </motion.h1>

        {blogPosts.length === 0 ? (
          <p>{t('noPostsFound')}</p>
        ) : (
          blogPosts.map((post) => (
            <LastBlogPost
            key={post.id}
            title={post.title.rendered}
            date={new Date(post.date).toLocaleDateString()}
            link={`https://nutrineuvo.fi/blog/${post.slug}`} 
            />
          ))
        )}
      </section>
    </div>
  );
};

const LastBlogPost = ({ title, date, link }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-400">{title}</p>
        <p className="text-sm uppercase text-zinc-700">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <a href={link} className="text-zinc-200 hover:underline">Read More</a>
      </div>
    </motion.div>
  );
};

export default LastBlogPosts;
