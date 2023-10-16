import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./sections/HeroSection";
import Carousel from "./sections/Carousel";
import About from "./sections/About";
import Menu from "./sections/Menu";


import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Carousel />
      <About />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
