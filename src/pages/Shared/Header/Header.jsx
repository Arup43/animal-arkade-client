import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container my-5">
      <nav className="d-flex align-items-center justify-content-between">
        <div className="brand">
          <Link to="/" className="d-flex align-items-center">
            <img src={logo} />
            <h1>Animal Arkade</h1>
          </Link>
        </div>
        <div>
          <ul>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-toys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              All Toys
            </NavLink>
            <NavLink
              to="/my-toys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              My Toys
            </NavLink>
            <NavLink
              to="/add-toy"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Add A Toy
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blogs
            </NavLink>
          </ul>
        </div>
        <div>
          <div className="d-flex justify-content-center align-items-center right-side">
            <div className="image-container" title="Arup">
              <img className="img-fluid" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="User" />
            </div>
            <button
              className="btn btn-success logout-btn"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
