import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const [toys, setToys] = React.useState([]);
  const [sort, setSort] = React.useState("none");

  const { user } = useContext(AuthContext);
  useTitle("My Toys");

  const handleSort = (sort) => {
    setSort(sort);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://animal-arkade-server.vercel.app/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingToys = toys.filter((toy) => toy._id !== id);
              setToys(remainingToys);
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(
      `https://animal-arkade-server.vercel.app/toys?email=${user.email}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, sort]);

  return (
    <div className="container mb-5 pb-5">
      <h1 className="text-center mt-5 pt-5 mb-5">
        Here is the list of all toys!
      </h1>
      <div className="mb-5">
        <p>Sort your toys according to price: </p>
        <button
          onClick={() => handleSort("ascending")}
          className="btn btn-success me-3"
        >
          Ascending
        </button>
        <button
          onClick={() => handleSort("descending")}
          className="btn btn-success"
        >
          Descending
        </button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Seller Email</th>
            <th>Toy Name</th>
            <th>Image</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Available Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => {
            return (
              <tr key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.sellerEmail}</td>
                <td>{toy.name}</td>
                <td>
                  <img style={{ height: "50px" }} src={toy.photoUrl} />
                </td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.rating}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <Link to={`/update-toy/${toy._id}`}>
                    <button className="btn btn-success">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MyToys;
