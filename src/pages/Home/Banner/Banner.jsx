import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/OaWsO5RP9Mk/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            Welcome to <br /> <span className="name">Animal Arkade</span>
          </h3>
          <p className="mt-5">
            Here you will find all types of animal toys you want for your lovely
            kids. Go check out our collection. We have a huge collection of
            animal toys. We cover all types of animal toys. You can find your
            desired animal by category.
          </p>
          <div className="explore">
            <button className="btn btn-success">Explore the toys</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/VLUukXYJu18/maxresdefault.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>
            Welcome to <br /> <span className="name">Animal Arkade</span>
          </h3>
          <p className="mt-5">
            Here you will find all types of animal toys you want for your lovely
            kids. Go check out our collection. We have a huge collection of
            animal toys. We cover all types of animal toys. You can find your
            desired animal by category.
          </p>
          <div className="explore">
            <button className="btn btn-success">Explore the toys</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/RKao6UwyMA0/maxresdefault.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            Welcome to <br /> <span className="name">Animal Arkade</span>
          </h3>
          <p className="mt-5">
            Here you will find all types of animal toys you want for your lovely
            kids. Go check out our collection. We have a huge collection of
            animal toys. We cover all types of animal toys. You can find your
            desired animal by category.
          </p>
          <div className="explore">
            <button className="btn btn-success">Explore the toys</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
