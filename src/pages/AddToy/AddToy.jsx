import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const toy = {
      name,
      photoUrl,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          toast.success("Toy added successfully");
        } else {
          toast.error("Error adding toy");
        }
      });
  };

  return (
    <Container className="w-25 mx-auto mb-5 pb-5 mt-5 pt-5">
      <h3>Add a toy</h3>
      <Form onSubmit={handleAddToy}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Toy Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seller Name</Form.Label>
          <Form.Control
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            required
            defaultValue={user ? user.displayName : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="sellerEmail"
            placeholder="Seller Email"
            required
            defaultValue={user ? user.email : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sub Category</Form.Label>
          <Form.Control
            type="text"
            name="subCategory"
            placeholder="Sub Category"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            placeholder="Rating"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            name="availableQuantity"
            placeholder="Available Quantity"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Detail Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Detail Description"
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Add Toy
        </Button>
        <br />
      </Form>
    </Container>
  );
};

export default AddToy;
