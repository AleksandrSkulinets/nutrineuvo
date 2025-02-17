import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <header className="z-50 fixed w-full">
       <Navigation />
      </header>
      <Home />
      <Footer />
    </>
  );
}

export default App;
