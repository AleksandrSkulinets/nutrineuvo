import { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import logo from "../assets/nutri-neuvo-logo.svg";
import IconMenu from "./icons/IconMenu";
import IconClose from "./icons/IconClose";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import UserIcon from "./icons/UserIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ArrowUpIcon from "./icons/ArrowUpIcon";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleClick = () => setOpen(!open);
  const handleLinkClick = () => {
    setOpen(false);
    setDropdown(null);
  };

  const toggleDropdown = (key) => {
    setDropdown(dropdown === key ? null : key);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  const links = [
    { title: t("home"), to: "/" },
    {
      title: t("services"),
      dropdownKey: "services",
      items: [
        { title: t("nutrition_therapy"), to: "/nutrition" },
        { title: t("individual_clients"), to: "/henkiloasiakkaille" },
        { title: t("professionals"), to: "/nutritionists" },
       
      ],
    },
    {
      title: t("nutrineuvo"),
      dropdownKey: "about",
      items: [
        { title: t("about_us"), to: "/about" },
        { title: t("contacts"), to: "/contacts" },
      ],
    },
    { title: t("appointment"), to: "/ajanvaraus" },
    { title: t("blog"), to: "/blog" },
  ];

  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      const browserLanguage = navigator.language.split("-")[0];
      i18n.changeLanguage(browserLanguage);
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

        {/* Desktop Navigation */}
        <nav className="md:flex items-center hidden mr-4 space-x-8">
          <ul className="md:flex hidden">
            {links.map((link, index) => (
              <li key={index} className="relative mx-4 font-semibold text-black group">
                {!link.items ? (
                  <Link
                    className="transition duration-300 cursor-pointer hover:text-[#404040]"
                    to={link.to}
                    onClick={handleLinkClick}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <div
                    className="cursor-pointer flex items-center gap-1 hover:text-gray-500"
                    onClick={() => toggleDropdown(link.dropdownKey)}
                  >
                    {link.title}
                    {dropdown === link.dropdownKey ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </div>
                )}

                {link.items && dropdown === link.dropdownKey && (
                  <ul className="absolute top-full left-0 bg-white border rounded shadow-md mt-2 w-52 z-40">
                    {link.items.map((item, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                        <Link to={item.to} onClick={handleLinkClick}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="ml-4">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="text-gray-600 font-semibold transition border border-gray-300 rounded px-2 py-1 backdrop-blur-sm bg-white/30"
            >
              <option value={i18n.language}>{i18n.language.toUpperCase()}</option>
              {["fi", "sv", "en"]
                .filter((lng) => lng !== i18n.language)
                .map((lng) => (
                  <option key={lng} value={lng}>
                    {lng.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>

          {isLoggedIn ? (
            <>
              {user && (
                <span className="text-sm text-gray-600 ml-2">Hi, {user.user_nicename}</span>
              )}
              <button
                onClick={handleLogout}
                className="ml-4 px-3 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg font-semibold transition"
              >
                {t("logout")}
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="hidden md:flex items-center ml-4 px-2 space-x-2 py-2 border border-[#07be61] rounded-lg font-semibold text-[#404040] hover:bg-[#07be61] hover:text-white transition"
            >
              <UserIcon className="w-6 h-6" />
              {t("login")}
            </Link>
          )}
        </nav>

        {/* Mobile Login/Logout */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="md:hidden flex items-center px-2 py-2 text-red-500 border border-red-500 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition"
          >
            <UserIcon className="w-6 h-6 mr-1" />
            {t("logout")}
          </button>
        ) : (
          <Link
            to="/login"
            className="md:hidden flex items-center px-2 py-2 border border-[#07be61] rounded-lg font-semibold text-[#404040] hover:bg-[#07be61] hover:text-white transition"
          >
            <UserIcon className="w-6 h-6" />
            {t("login")}
          </Link>
        )}

        {/* Hamburger Icon */}
        <div onClick={handleClick} className="md:hidden z-50 text-2xl px-4">
          {!open ? <IconMenu /> : <IconClose />}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-0 right-0 w-full h-screen bg-gray-100 z-40 flex flex-col justify-center items-center overflow-y-auto"
            >
              {links.map((link, index) => (
                <div key={index} className="w-full text-center">
                  {!link.items ? (
                    <motion.li className="py-4 text-2xl font-roboto uppercase font-semibold text-black hover:text-[#404040]">
                      <Link to={link.to} onClick={handleLinkClick}>
                        {link.title}
                      </Link>
                    </motion.li>
                  ) : (
                    <>
                      <div
                        className="py-4 text-2xl font-roboto uppercase font-semibold text-[#404040] flex justify-center items-center gap-2 cursor-pointer hover:text-gray-500"
                        onClick={() => toggleDropdown(link.dropdownKey)}
                      >
                        {link.title}
                        {dropdown === link.dropdownKey ? <ArrowUpIcon /> : <ArrowDownIcon />}
                      </div>
                      {dropdown === link.dropdownKey && (
                        <div className="mb-4">
                          {link.items.map((item, subIndex) => (
                            <Link
                              key={subIndex}
                              to={item.to}
                              onClick={handleLinkClick}
                              className="block text-lg font-medium text-gray-700 hover:text-black"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Language Switcher */}
              <div className="mt-10">
                {["fi", "sv", "en"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`text-lg mx-2 text-gray-600 hover:text-black font-semibold transition ${i18n.language === lng ? "text-black font-bold" : ""}`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Auth Actions */}
              <div className="mt-10">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold transition hover:bg-red-600"
                  >
                    {t("logout")}
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="px-6 py-3 bg-[#07be61] text-white rounded-lg font-semibold transition hover:bg-[#06a652]"
                  >
                    {t("login")}
                  </Link>
                )}
              </div>

              {/* Social Links */}
              <div className="mt-10 flex justify-center gap-4">
                <Link to="https://www.facebook.com/profile.php?id=61573966495207"><Facebook /></Link>
                <Link to="https://instagram.com/nutrineuvo"><Instagram /></Link>
                <Link to="https://linkedin.com/company/nutrineuvo/"><Linkedin /></Link>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;
