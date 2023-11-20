import { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Carousel.css";

const imageFolder = "/"; //public folder selected
const imageFiles = [
  "DSC05825.jpg",
  "logo.jpg",
  "menu.png",
  "wood-logo.jpg",
  "me.jpg"
  // Add more image file names as needed
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null); // Ref for timer

  const handleRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
    resetTimer();
  };

  const handleLeft = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + imageFiles.length) % imageFiles.length
    );
    resetTimer();
  };

  const rotateInterval = 5000; 

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear the existing timer
    }
    const newTimer = setInterval(() => {
      handleRight(); 
    }, rotateInterval);
    timerRef.current = newTimer; // Set the new timer
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleRight(); // Automatically move to the next image after 5 seconds
    }, rotateInterval);
    timerRef.current = timer; // Set timer reference

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current); // Clear the timer on component unmount
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currentImage = imageFiles[index];

  const sliderStyle = {
    backgroundImage: `url(${imageFolder}${currentImage})`,
    backgroundSize: "contain", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    height: "60vh",
    position: "relative",
  };

  return (
    <section className="my-8 bg-[#364409c1] py-4">
      <div style={sliderStyle}>
        <MdKeyboardArrowLeft onClick={handleLeft} className="left-arrow" />
        <MdKeyboardArrowRight onClick={handleRight} className="right-arrow" />
      </div>
    </section>
  );
};

export default Carousel;
