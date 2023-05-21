import "./Footer.css";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark text-light footer py-5">
      <div className="container py-5 d-flex justify-content-between footer-container">
        <div className="d-flex align-items-center gap-5">
          <img src={logo} className="img-fluid" style={{ width: "120px" }} />
          <div>
            <h1>Animal Arkade!</h1>
            <p>Copyright &copy; 2023</p>
          </div>
        </div>

        <div className="address">
          <h1 className="mb-4">Address</h1>
          <p>1122 Banani, Dhaka-1200 </p>
          <p>Cheftable224@gmail.com</p>
          <p>Phone: +880-1870405760</p>
        </div>

        <div>
          <h1 className="mb-4">Socials</h1>
          <div className="socials">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>

        <div>
          <h1 className="mb-4">Contact Us</h1>
          <div className="contact">
            <p>Email: animal@arkade.com</p>
            <p>Hotline: +880-01870405760</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
