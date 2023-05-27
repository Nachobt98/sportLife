import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { render } from 'react-dom';

import img1 from "./img/img1.jpg";

import img2 from "./img/img2.jpg";
import img5 from "./img/img5.jpg";
import img4 from "./img/img4.jpg";

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>Empieza tu vida sana!</h3>
          <p> Te ofrecemos algunos consejos para llevar una alimentacion sana.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} className="d-block w-100" alt="..." />

        <Carousel.Caption>
          <h3>A sudar!</h3>
          <p>Rutinas faciles y rapidas que puedes hacer en tu casa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} className="d-block w-100" alt="..." />

        <Carousel.Caption>
          <h3>Con el ejercicio no solo ayudas a tu cuerpo</h3>
          <p>
          Lee este articulo sobre como el deporte beneficia a la mente.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;