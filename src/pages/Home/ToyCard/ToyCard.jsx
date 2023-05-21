import { Button, Card } from "react-bootstrap";
import "./ToyCard.css";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { pictureUrl, name, price, rating, description } = toy;
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <Link to={`/toy-details/${toy._id}`}>
          <Button variant="success">View details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ToyCard;
