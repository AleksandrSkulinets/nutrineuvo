import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="mx-auto max-w-5xl min-h-screen px-4 py-20 text-white">
    
    <motion.h1
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-20 text-4xl font-black uppercase text-zinc-400"
    >
      Contact us
    </motion.h1>
    
    <ContactForm />
  </div>
 
  );
};

export default Contacts;
