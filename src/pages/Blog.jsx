import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const categoryMap = {
  en: 4, // English category ID
  fi: 3, // Finnish category ID
  sv: 5  // Swedish category ID
};

const POSTS_PER_PAGE = 6; // Load 6 posts at a time

const Blog = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const language = i18n.language;
  const categoryId = categoryMap[language];

  useEffect(() => {
    setLoading(true);
    setError(null);
    setBlogPosts([]); // Reset posts when language changes
  
    fetch(`https://nutrineuvo.fi/wp-json/wp/v2/posts?categories=${categoryId}&_embed&per_page=${POSTS_PER_PAGE}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogPosts(data); // Replace posts instead of appending
        } else {
          setError('No posts found.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setError('Error fetching posts');
        setLoading(false);
      });
  }, [language, categoryId, page]);

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="mx-auto max-w-[1920px] px-4 py-20 text-white min-h-screen">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 text-3xl md:text-4xl font-black uppercase text-zinc-400 text-center"
      >
        {t("blogPage.title")}
      </motion.h2>

      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <motion.div
              key={post.id}
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="relative p-6 border border-gray-200 rounded-2xl shadow-sm flex flex-col bg-white text-zinc-600 w-full h-[450px]"
            >
              {/* Thumbnail */}
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-40 object-cover rounded-xl"
                />
              )}
            
              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold">{post.title.rendered}</h3>
            
              {/* Short Description */}
              <p className="mt-2 text-sm text-gray-600 flex-grow overflow-hidden">
                {post.excerpt.rendered.replace(/<[^>]+>/g, '')} {/* Remove HTML tags */}
              </p>
            
              {/* Read More Button (Always at Bottom) */}
              <button
                onClick={() => handleReadMore(post.slug)}
                className="mt-auto bg-[#07be61] text-white py-2 px-4 rounded hover:bg-emerald-600"
              >
                {t("blogPage.readMore")}
              </button>
            </motion.div>
            
            
            ))}
          </div>

          {/* Load More Button */}
          {blogPosts.length >= POSTS_PER_PAGE * page && (
            <div className="text-center mt-8">
              <button
                onClick={() => setPage(page + 1)}
                className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700"
              >
                {t("blogPage.loadMore")}
              </button>
            </div>
          )}
        </>
      )}

      {loading && <p className="text-center text-white">{t('loading')}</p>}
    </div>
  );
};

export default Blog;
