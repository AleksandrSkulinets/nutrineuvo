import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from './pages/About';
import Contacts from './pages/Contacts';
import Footer from "./components/Footer";
import NotFound from './components/NotFound';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';
import TermsOfService from './pages/Terms-of-service';
import PrivacyPolicy from './pages/Privancy-policy';
import UnderConstruction from './components/UnderConstruction';
import Login from './pages/Login';
import Cookies from './pages/Cookies';
import Signup from './pages/Signup';
import Nutrition from './pages/Nutrition';
import Nutritionists from './pages/Nutritionists';

// 👇 Scroll reset component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Wait for DOM update
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // change to "smooth" if you want animation
      });
    });
  }, [pathname]);

  return null;
}

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const location = useLocation();

  return (
    <>
      <UnderConstruction isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navigation />
      <ScrollToTop />
      
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/nutritionists" element={<Nutritionists />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;
