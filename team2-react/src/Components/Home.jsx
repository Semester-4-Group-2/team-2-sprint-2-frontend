import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

export default function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  // Define your images as an array of objects, where each object has a `src` and `alt` property
  const images = [
    { src:"./images/1.jpg", alt: "Image 1", style: { width: "75%", height: "100%" } },
    { src: "./images/2.png", alt: "Image 2", style: { width: "75%", height: "100%" } },
    { src: "./images/3.jpg", alt: "Image 3", style: { width: "75%", height: "100%" } },
    { src: "./images/4.jpg", alt: "Image 4", style: { width: "75%", height: "auto" } },
    { src: "./images/5.jpg", alt: "Image 5", style: { width: "75%", height: "auto" } },
    { src: "./images/6.jpg", alt: "Image 6", style: { width: "75%", height: "auto" } },
  ];

  return (
    <div className="App">
      <h1>Top Sellers This Week</h1>
      <Carousel breakPoints={breakPoints}>
        {/* Map over the array of images and render each one as an <img> element */}
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} style={image.style} />
        ))}
      </Carousel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);