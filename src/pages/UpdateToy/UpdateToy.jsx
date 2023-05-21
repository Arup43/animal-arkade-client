import { Button, Container, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateToy = () => {
  const {
    name,
    photoUrl,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    description,
    _id
  } = useLoaderData();

  const handleUpdateToy = (e) => {
    e.preventDefault();
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

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.modifiedCount > 0) {
            toast.success("Toy updated successfully");
        } else {
            toast.error("Not updated!");
        }
      });
  };

  return (
    <Container className="w-25 mx-auto mb-5 pb-5 mt-5 pt-5">
      <h3>Add a toy</h3>
      <Form onSubmit={handleUpdateToy}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Toy Name"
            defaultValue={name}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
            placeholder="Photo URL"
            defaultValue={photoUrl}
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
            defaultValue={sellerName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="sellerEmail"
            placeholder="Seller Email"
            required
            defaultValue={sellerEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sub Category</Form.Label>
          <Form.Control
            type="text"
            name="subCategory"
            placeholder="Sub Category"
            defaultValue={subCategory}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            placeholder="Price"
            defaultValue={price}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            name="rating"
            placeholder="Rating"
            defaultValue={rating}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            name="availableQuantity"
            placeholder="Available Quantity"
            defaultValue={availableQuantity}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Detail Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Detail Description"
            defaultValue={description}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Update Toy
        </Button>
        <br />
      </Form>
    </Container>
  );
};

export default UpdateToy;
