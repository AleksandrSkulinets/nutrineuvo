import React from 'react';
import { motion } from 'framer-motion';

const LastBlogPosts = () => {
  // Example blog posts data (can be fetched from an API in a real-world scenario)
  const blogPosts = [
    { title: "News title 1", date: "Oct 1st" },
    { title: "News title 2", date: "Sep 25th" },
    { title: "News title 3", date: "Sep 18th" },
    { title: "News title 4", date: "Sep 10th" },
    { title: "News title 5", date: "Aug 30th" },
    { title: "News title 6", date: "Aug 20th" },
    { title: "News title 7", date: "Aug 10th" },
    { title: "News title 8", date: "Jul 25th" },
    { title: "News title 9", date: "Jul 15th" },
    { title: "News title 10", date: "Jul 5th" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-48 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-400"
      >
        Latest Blog Posts
      </motion.h1>

      {/* Map through the blogPosts array and render each post */}
      {blogPosts.map((post, index) => (
        <LastBlogPost
          key={index}
          title={post.title}
          date={post.date}
        />
      ))}
    </section>
  );
};

// Component for rendering a single blog post
const LastBlogPost = ({ title, date }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-400">{title}</p>
        <p className="text-sm uppercase text-zinc-700">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        {/* Read More Link */}
        <a href="/" className="text-zinc-200 hover:underline">
          Read More
        </a>
      </div>
    </motion.div>
  );
};

export default LastBlogPosts;
