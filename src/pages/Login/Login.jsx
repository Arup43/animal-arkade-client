import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <Container className="w-25 mx-auto mb-5 pb-5 mt-5 pt-5">
      <h3>Please Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-danger">{}</Form.Text> <br />
        <Button variant="success" type="submit">
          Login
        </Button>
        <br />
        <br />
        <h5>Or sign-in with</h5>
        <Button className="me-3 btn btn-success">
          <FaGoogle></FaGoogle>
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
