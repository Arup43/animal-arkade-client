import { Button, Form, Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const AllToys = () => {
  const toys = useLoaderData();
  const [showedToys, setShowedToys] = useState(toys);
  useTitle("All Toys");

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    fetch(`https://animal-arkade-server.vercel.app/search-toys/?q=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowedToys(data);
      });
  };

  return (
    <div className="container mb-5 pb-5">
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search by toy name: </Form.Label>
          <Form.Control
            type="text"
            name="search"
            placeholder="Toy Name"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          search
        </Button>
      </Form>
      <h1 className="text-center mt-5 pt-5 mb-5">
        Here is the list of all toys!
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {showedToys.map((toy) => {
            return (
              <tr key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.price}</td>
                <td>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-success">View Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AllToys;
