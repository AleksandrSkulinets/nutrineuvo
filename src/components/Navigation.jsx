import logo from "../assets/nutri-neuvo-logo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IconMenu from "./icons/IconMenu";
import IconClose from "./icons/IconClose";
import Facebook from "./icons/Facebook";
import Instagram  from "./icons/Instagram";
import Linkedin  from "./icons/Linkedin";

  const Navigation = () => {
      const [open, setOpen] = useState(false);
  
      const handleClick = () => setOpen(!open);
      const handleLinkClick = () => setOpen(false); 
  
      // Links
      const links = [
          { title: "Home", href: "/" },
          { title: "About", href: "/" },
          { title: "Blog", href: "/" },
          { title: "Contacts", href: "/" }
      ];
  
      // Mobile Animation 
      const mobileLinkVars = {
          open: {
              y: 0,
              opacity: 1,
              transition: {
                  y: { stiffness: 1500, velocity: -100 },
              },
          },
          closed: {
              y: 50,
              opacity: 0,
              transition: {
                  y: { stiffness: 1500 },
              },
          },
      };
  
      const ulVariants = {
          open: {
              x: 0.1, 
              transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.3, 
              },
          },
          closed: {
              x: "100%", 
              transition: {
                  staggerChildren: 0.1,
                  staggerDirection: -1,
              },
          },
      };
  
      return (
          <div className='w-full max-w-[1920px] h-[65px] mx-auto flex justify-between items-center backdrop-blur-sm bg-white/30 z-10'>
              <div className='flex m-1 z-50 size-[75px]'>
              <a className="flex" href="/"><img src={logo} alt="Nutri Neuvo Logo" /></a>
              </div>
  
              {/* Menu for larger screens */}
              <ul className='md:flex hidden'>
                  {links.map((link, index) => (
                      <li key={index} className='mx-4 font-semibold text-[#404040]'>
                          <a className='transition duration-300 cursor-pointer hover:text-gray-500' href={link.href} onClick={handleLinkClick}>
                              {link.title}
                          </a>
                      </li>
                  ))}
              </ul>
            
              {/* Hamburger icon */}
              <div onClick={handleClick} className=' md:hidden z-50 text-2xl px-4'>
                  {!open ? <IconMenu /> : <IconClose />}
              </div>
              
              {/* Mobile menu */}
              <AnimatePresence>
                  {open && (
                      <motion.ul 
                          key="mobile-menu" // Add a key to ensure consistent re-render
                          initial="closed"  // Explicitly set initial state to closed
                          animate="open"
                          exit="closed"
                          variants={ulVariants}
                          className='absolute top-0 right-0 w-full h-screen bg-gray-100 z-40 flex flex-col justify-center items-center'>
                          {links.map((link, index) => (
                              <motion.li 
                                  key={index}
                                  variants={mobileLinkVars}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  className='py-4 text-2xl font-roboto uppercase font-semibold text-[#404040] hover:text-gray-500'
                              >
                                  <a 
                                      href={link.href} 
                                      onClick={handleLinkClick}
                                      className="transition duration-200 cursor-pointer"
                                      style={{ transitionDelay: `${index * 0.2}s` }}
                                  >
                                      {link.title}
                                  </a>
                              </motion.li>
                          ))}
                          <div className="mt-40">
                            <div className="flex w-[150px] justify-around mx-auto ">
                                <div className="transition duration-200 hover:scale-110"><Facebook/></div>
                                <div className="transition duration-200 hover:scale-110"><Instagram/></div>
                                <div className="transition duration-200 hover:scale-110"><Linkedin /></div>
                            </div>
                          </div>
                      </motion.ul>
                  )}
              </AnimatePresence>
          </div>
      )
  }
  
  export default Navigation;
    