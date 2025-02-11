import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header className="z-50 fixed w-full">
       <Navigation />
      </header>
      <Home />
    </>
  );
}

export default App;
