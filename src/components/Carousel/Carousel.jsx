import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const imageFolder = "/"; //public folder selected
const imageFiles = [
  "DSC05825.jpg",
  "logo.jpg",
  "menu.png",
  "wood-logo.jpg",
  // Add more image file names as needed
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
  };

  const handleLeft = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + imageFiles.length) % imageFiles.length
    );
  };

  const rotateInterval = 5000; // Change image every 5 seconds (adjust as needed)

  useEffect(() => {
    const rotateImages = setInterval(() => {
      handleRight(); // Automatically move to the next image
    }, rotateInterval);

    return () => {
      clearInterval(rotateImages); // Clear the interval on component unmount
    };
  }, []);

  const currentImage = imageFiles[index];

  const sliderStyle = {
    backgroundImage: `url(${imageFolder}${currentImage})`,
    backgroundSize: "contain", //center
    backgroundPosition: "center", //center
    backgroundRepeat: "no-repeat",
    height: "60vh",
    position: "relative",
  };

  return (
    <section className="my-8 bg-[#364409c1] py-4">
      <div style={sliderStyle}>
        {/* <div className="slider-overlay"></div> */}
        <MdKeyboardArrowLeft onClick={handleLeft} className="left-arrow" />
        <MdKeyboardArrowRight onClick={handleRight} className="right-arrow" />
        {/* Add your content here */}
      </div>
    </section>
  );
};

export default Carousel;
