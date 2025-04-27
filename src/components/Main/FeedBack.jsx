import React from "react";
import Review from "../Molecules/Review";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const FeedBack = () => {
  return (
      <section className="feedback" id="feedback">
        <h2 className="feedback__title">Отзывы</h2>
        <CarouselComponent />
      </section>
  );
};

export default FeedBack;

const CarouselComponent = () => {
  const items = [...Array(5).keys()]; 

  return (
    <Carousel controls={false} indicators={true} style={{padding: '50px 0'}} >
      {items.map((item, index) => (
        <Carousel.Item key={index} style={{ height: '300px' }}>
          <Review />
        </Carousel.Item>     
      ))}
    </Carousel>
  );
};
