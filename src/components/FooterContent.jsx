import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FacebookFooter from "./icons/FacebookFooter";
import LinkedinFooter from "./icons/LinkedinFooter";
import InstagramFooter from "./icons/InstagramFooter";
import logo from "../assets/nutri-neuvo-logo.svg";

export default function FooterContent() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#404040] text-gray-300">
      <div className="max-w-[1920px] mx-auto px-6 py-6 md:py-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-10">
        {/* Column 1: Logo & App info */}
        <div className="order-1 md:order-none md:mt-1 mt-8">
          <Link to="/">
            <img src={logo} alt="Nutri Neuvo" className="w-20 md:w-20 mb-4 bg-white rounded-sm" />
          </Link>
          
        </div>

        {/* Column 2: Henkilöasiakkaille */}
        <div className="order-2 md:order-none text-md md:text-base">
          <h4 className="font-bold mb-4">{t("footer.individual_clients")}</h4>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <Link to="/nutrition" className="hover:underline">
                {t("nutrition_therapy")}
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                {t("footer.my_nutrineuvo")}
              </Link>
            </li>
            <li>
             
            </li>
          </ul>
        </div>

        <div className="order-3 md:order-none text-sm md:text-base">

          <h4 className="font-bold mb-4"><Link to="/nutritionists" className="hover:underline">
                {t("footer.for_teurapevt")}
              </Link></h4>
        </div>
        {/* Column 3: Nutrineuvo */}
        <div className="order-4 md:order-none text-sm md:text-base">
          <h4 className="font-bold mb-4">Nutrineuvo</h4>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                {t("footer.about_us")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:underline">
                {t("contacts")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Tuki */}
        <div className="order-5 md:order-none text-sm md:text-base">
          <h4 className="font-bold mb-4">{t("footer.support")}</h4>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                {t("footer.instructions")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:underline">
                {t("footer.feedback")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div className="order-6 md:order-none text-sm md:text-base">
          <h4 className="font-bold mb-4">{t("footer.newsletter")}</h4>
          <form
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={t("footer.email_placeholder")}
              className="px-3 py-2 rounded text-black flex-1 mb-2 sm:mb-0"
              required
            />
            <button
              type="submit"
              className="bg-[#07be61] hover:bg-[#06a652] text-white px-4 py-2 rounded transition"
            >
              {t("footer.subscribe")}
            </button>
          </form>
          <div className="mt-4 md:mt-8 mx-auto space-x-4 md:space-x-6 flex">
            <Link
              to="https://www.facebook.com/profile.php?id=61573966495207"
              className="text-gray-400 hover:text-white transition"
            >
              <FacebookFooter className="w-6 h-6" />
            </Link>
            <Link
              to="https://instagram.com/nutrineuvo"
              className="text-gray-400 hover:text-white transition"
            >
              <InstagramFooter className="w-6 h-6" />
            </Link>
            <Link
              to="https://linkedin.com/company/nutrineuvo/"
              className="text-gray-400 hover:text-white transition"
            >
              <LinkedinFooter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider + Legal */}
      <div className="border-t border-gray-500 py-2 md:py-4 text-center text-sm text-gray-300 mt-4 md:mt-8">
        <p>
          <Link to="/privacy-policy" className="hover:underline">
            {t("footer.privacy")}
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="hover:underline">
            {t("footer.terms")}
          </Link>{" "}
          |{" "}
          <Link to="/cookies" className="hover:underline">
            {t("footer.cookies")}
          </Link>
        </p>
        <p>
          © {new Date().getFullYear()} Nutrineuvo.fi / Chefboksi Finland Oy
        </p>
      </div>
    </footer>
  );
}
