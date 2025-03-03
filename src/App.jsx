import { Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from './pages/About';
import Contacts from './pages/Contacts';
import Footer from "./components/Footer";
import NotFound from './components/NotFound';
import Blog from './pages/Blog';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} /> {/* Fixed this line */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
