import { Route, Routes } from 'react-router-dom';
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
import { useState } from "react";
function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
     <UnderConstruction isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
