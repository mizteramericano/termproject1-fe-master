import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const promotion = () => {
  return (
    <Carousel id="adsBannerCarousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/09/ce/7e/09ce7eed103875a554f1b4ad65cfbec9.jpg"
          alt="Promotion"
          style={{ width: '800px', height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Skincare for you</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.teenvogue.com/photos/5734cee00e9d16a80fb59d71/16:9/w_2560%2Cc_limit/korea.jpg"
          alt="Promotion 1"
          style={{ width: '800px', height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Promotion</h5>
          <p>Flash sale 9.9</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f4bca61-54d2-4724-b6a5-c3b63d4c3050/dhw82pl-27b51ad7-ba61-4ebf-869b-6eee0db7a98a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBmNGJjYTYxLTU0ZDItNDcyNC1iNmE1LWMzYjYzZDRjMzA1MFwvZGh3ODJwbC0yN2I1MWFkNy1iYTYxLTRlYmYtODY5Yi02ZWVlMGRiN2E5OGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BytJxiA5QY-KxKblswBvr2NaBWrjYpVneLl6RYcWxsg"
          alt="Promotion 3"
          style={{ width: '800px', height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Hot sale</h5>
          <p>Flash sale 9.9</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default promotion;