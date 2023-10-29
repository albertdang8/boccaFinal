import HeroSection from "../sections/HeroSection";
import Carousel from "../components/Carousel/Carousel";
import About from "../sections/About";
import Menu from "../sections/Menu";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Carousel />
      <About />
      <Menu />
    </>
  );
};

export default Home;
