import { Button, Card } from "react-bootstrap";
import "./ToyCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const ToyCard = ({ toy }) => {
  const { pictureUrl, name, price, rating, description } = toy;
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
    }
  };

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <Link to={`/toy/${toy._id}`}>
          <Button onClick={handleViewDetails} variant="success">
            View details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ToyCard;
