import { Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const toys = useLoaderData();
  useTitle("All Toys");

  return (
    <div className="container mb-5 pb-5">
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
          {toys.map((toy) => {
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
