import { Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SpecialDeals.css";

const SpecialDeals = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="ms-md-5 ps-md-5 me-md-5 pe-md-5">
        <h1 className="text-center mt-5 pt-5 mb-5">Our Special Deals</h1>
      <div data-aos="flip-left" data-aos-duration="3000" className="mb-5">
        <Card style={{ width: "25rem" }}>  
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/id/1192709510/photo/one-little-girl-playing-with-toy-animals-in-the-living-room.jpg?s=612x612&w=0&k=20&c=lBT68OGXpWH9vzfMsFvyG-p-AzVJRKAEXEXFHQFPmw8="
          />
          <Card.Body>
            <Card.Title>Summer Deal!!!</Card.Title>
            <Card.Text>
              Got a little one? We have the best toys for them!
            </Card.Text>
            <Card.Text>
              5% off on all toys for kids under 5 years old!
            </Card.Text>
            <Button variant="success">Get the offer!</Button>
          </Card.Body>
        </Card>
      </div>
      <div data-aos="flip-left" data-aos-duration="3000" className="d-md-flex flex-row-reverse two mb-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://pigtailpals.com/wp-content/uploads/2020/03/iStock-1198413107.jpg"
          />
          <Card.Body>
            <Card.Title>Eid Offer Buddle!!!</Card.Title>
            <Card.Text>
              Got a little one? We have the best toys for them!
            </Card.Text>
            <Card.Text>
              15% off on all toys till 15th August, 2023!
            </Card.Text>
            <Button variant="success">Get the offer!</Button>
          </Card.Body>
        </Card>
      </div>
      <div data-aos="flip-left" data-aos-duration="3000" className="mb-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/little-girl-playing-animal-toys-wood-table-living-room-139301716.jpg"
          />
          <Card.Body>
            <Card.Title>Summer Deal!!!</Card.Title>
            <Card.Text>
              Got a little one? We have the best toys for them!
            </Card.Text>
            <Card.Text>
              5% off on all toys for kids under 5 years old!
            </Card.Text>
            <Button variant="success">Get the offer!</Button>
          </Card.Body>
        </Card>
      </div>
      <div data-aos="flip-left" data-aos-duration="3000" className="d-md-flex flex-row-reverse four mb-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn11.bigcommerce.com/s-fa6invgjkj/images/stencil/1280x1280/products/825/7349/7pc-Large-Soft-Feel-Wild-Safari-Animal-Toys-12__18008.1682338601.jpg?c=2"
          />
          <Card.Body>
            <Card.Title>Summer Deal!!!</Card.Title>
            <Card.Text>
              Got a little one? We have the best toys for them!
            </Card.Text>
            <Card.Text>
              5% off on all toys for kids under 5 years old!
            </Card.Text>
            <Button variant="success">Get the offer!</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SpecialDeals;
