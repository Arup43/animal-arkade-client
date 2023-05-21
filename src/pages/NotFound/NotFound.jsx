import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
  useTitle("Not Found");
  return (
    <div className="d-flex flex-column justify-content-center align-items-center not-found mt-5 pt-5">
      <h1>Sorry, Page not found!!</h1>
      <br />
      <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"></img>

      <Link to="/">
        <button className="btn btn-success mt-5 px-4 py-3">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
