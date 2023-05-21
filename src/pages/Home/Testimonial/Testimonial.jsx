import { Carousel } from "react-bootstrap";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <h1 className="text-center mt-5 pt-5">Testimonial</h1>
      <p className="text-center mb-5">
        See what customers are saying about us!
      </p>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="review">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="User"
                />
              </div>
              <p>
                “Many thanks for the beautiful food and wonderful service. Your
                food really made the event special. I appreciate your time and
                effort!”
              </p>
              <h3>Muntaha Tabassum</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="review">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  alt="User"
                />
              </div>
              <p>
                “Was so impressed I had to find out more and tell my friends!
                Last week we attended a fabulous pre-wedding afternoon party”
              </p>
              <h3>Ononto Jolil</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="review">
              <div className="img-container">
                <img
                  className="img-fluid"
                  src="https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png"
                  alt="User"
                />
              </div>
              <p>
                “Thank you for making my parents’ anniversary so special. The
                food was amazing, as was the service. A perfect evening!”
              </p>
              <h3>Rakib Hossain</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimonial;
