import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-[1920px] min-h-screen px-2 py-60 text-white">

        
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-20 text-4xl font-black uppercase text-zinc-400"
        >
          404
        </motion.h1>
        
        <motion.p
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="text-lg text-zinc-500"
        >
          Page Not Found
        </motion.p>    
      </div>
  );
};

export default NotFound;
