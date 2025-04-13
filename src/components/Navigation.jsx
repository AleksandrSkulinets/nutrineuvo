import logo from "../assets/nutri-neuvo-logo.svg";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IconMenu from "./icons/IconMenu";
import IconClose from "./icons/IconClose";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import UserIcon from "./icons/UserIcon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation(); // translation and i18n instance
  const handleClick = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  // Change language function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // Store selected language in localStorage
  };

  // Links (translated)
  const links = [
    { title: t("home"), to: "/" },
    { title: t("about"), to: "/about" },
    { title: t("blog"), to: "/blog" },
    { title: t("contacts"), to: "/contacts" }
  ];

  useEffect(() => {
    // Ensure language is set on page load, checking `localStorage`
    const storedLanguage = localStorage.getItem("i18nextLng");

    if (storedLanguage) {
      // Set language from localStorage
      i18n.changeLanguage(storedLanguage);
    } else {
      // If no language stored, check browser's language setting
      const browserLanguage = navigator.language.split('-')[0]; // Get base language code (en, fi, sv)
      i18n.changeLanguage(browserLanguage); // Set browser language if no stored language
    }
  }, [i18n]);

  return (
    <header className="z-50 fixed w-full">
      <div className="w-full h-[65px] mx-auto flex justify-between items-center backdrop-blur-sm bg-white/30 z-10">
        <div className="flex m-1 z-50 size-[75px]">
          <Link className="flex" to="/">
            <img src={logo} alt="Nutri Neuvo" />
          </Link>
        </div>

        {/* Menu for larger screens */}
        <nav className="md:flex items-center hidden mr-4 space-x-8">
          <ul className="md:flex hidden">
            {links.map((link, index) => (
              <li key={index} className="mx-4 font-semibold text-[#404040]">
                <Link
                  className="transition duration-300 cursor-pointer hover:text-gray-500"
                  to={link.to}
                  onClick={handleLinkClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>


          <div className="flex gap-4 ml-4">
            {["fi", "sv", "en"].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`text-gray-600 hover:text-black font-semibold transition ${i18n.language === lng ? "text-black font-bold" : ""
                  }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
          <Link
            to="/login"
            className="hidden md:flex items-center ml-4 px-2 space-x-2 py-2 border border-[#07be61] rounded-lg font-semibold text-[#404040] hover:bg-[#07be61] hover:text-white transition"
          >
            <UserIcon className="w-6 h-6" /> {/* Icon will inherit text color */}
            {t("login") || "Login"}
          </Link>
        </nav>
        <Link
          to="/login"
          className="md:hidden flex items-center ml-4 px-2 space-x-2 py-2 border border-[#07be61] rounded-lg font-semibold text-[#404040] hover:bg-[#07be61] hover:text-white transition"
        >
          <UserIcon className="w-6 h-6" /> {/* Icon will inherit text color */}
          {t("login") || "Login"}
        </Link>
        {/* Hamburger icon */}
        <div onClick={handleClick} className="md:hidden z-50 text-2xl px-4">
          {!open ? <IconMenu /> : <IconClose />}
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-0 right-0 w-full h-screen bg-gray-100 z-40 flex flex-col justify-center items-center"
            >
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  className="py-4 text-2xl font-roboto uppercase font-semibold text-[#404040] hover:text-gray-500"
                >
                  <Link
                    to={link.to}
                    onClick={handleLinkClick}
                    className="transition duration-200 cursor-pointer"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
              <div className="mt-20">
                {["fi", "sv", "en"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`text-lg mx-2 text-gray-600 hover:text-black font-semibold transition ${i18n.language === lng ? "text-black font-bold" : ""
                      }`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="mt-20">
                <div className="flex w-[150px] justify-around mx-auto">
                  <div className="transition duration-200 hover:scale-110"><Link to="https://www.facebook.com/profile.php?id=61573966495207"><Facebook /></Link></div>
                  <div className="transition duration-200 hover:scale-110"><Link to="https://instagram.com/nutrineuvo"><Instagram /></Link></div>
                  <div className="transition duration-200 hover:scale-110"><Link to="https://linkedin.com/company/nutrineuvo/"><Linkedin /></Link></div>
                </div>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
