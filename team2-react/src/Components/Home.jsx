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

  const images = [
    { src:"./images/1.png", alt: "Image 1", className: "carousel-image", style: { width: "75%", height: "100%" } },
    { src: "./images/2.png", alt: "Image 2", className: "carousel-image", style: { width: "75%", height: "100%" } },
    { src: "./images/3.jpg", alt: "Image 3", className: "carousel-image", style: { width: "75%", height: "100%" } },
    { src: "./images/4.png", alt: "Image 4", className: "carousel-image", style: { width: "75%", height: "100%" } },
    { src: "./images/5.png", alt: "Image 5", className: "carousel-image", style: { width: "75%", height: "100%"} },
    { src: "./images/6.png", alt: "Image 6", className: "carousel-image", style: { width: "75%", height: "100%" } },
  ];

  return (
    <div className="App">
      <h1>Top Sellers This Week</h1>
      <Carousel breakPoints={breakPoints}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className={image.className} style={image.style} />
        ))}
      </Carousel>
      <style>
        {`
          .carousel-image {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
