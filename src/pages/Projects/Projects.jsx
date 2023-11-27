import "./Projects.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  const items = [
    {
      src: "https://placekitten.com/300/300",
      alt: "Imagem 1",
    },
    {
      src: "profile-img.png",
      alt: "Imagem 2",
    },
    {
      src: "https://placekitten.com/300/300",
      alt: "Imagem 3",
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(0);


  return (
    <>
      <div className="container-projects">
        <h1>Meus Projetos</h1>
        <p>Slide atual: {currentSlide + 1}</p>
        <Carousel
          items={items}
          interval={2000}
          controls={true}
          wrap={true}
          onSlideChange={(currentSlide) => setCurrentSlide(currentSlide)}
        >
          {items.map((item) => (
            <Carousel.Item key={item.alt}>
              <img src={item.src} alt={item.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Projects;
