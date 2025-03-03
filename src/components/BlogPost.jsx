import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const BlogPost = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const { i18n } = useTranslation(); // Get current language
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const apiUrl = `https://nutrineuvo.fi/wp-json/wp/v2/posts?slug=${slug}&_embed`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);
          setTranslations(data[0].translations || {}); // Store linked translations
        } else {
          setError('Post not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        setError('Error fetching post');
        setLoading(false);
      });
  }, [slug]);

  // Automatically switch post when language changes
  useEffect(() => {
    const translatedSlug = translations[i18n.language]?.slug; // Get the slug for the current language
    if (translatedSlug) {
      navigate(`/blog/${translatedSlug}`); // Redirect to translated post
    }
  }, [i18n.language, translations, navigate]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-white min-h-screen">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-6 text-3xl md:text-4xl font-black uppercase text-zinc-400"
      >
        {post.title.rendered}
      </motion.h1>
      <p className="text-sm uppercase text-zinc-700 mb-4">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div
        className="text-lg text-zinc-500"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </section>
  );
};

export default BlogPost;
