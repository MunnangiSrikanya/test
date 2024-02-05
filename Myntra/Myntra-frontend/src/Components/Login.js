import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";
import { toast } from "react-toastify";
import { message } from "antd";
const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    let newErrors = {};
    if (inputs.email.length == 0) {
      newErrors.email = "email is required";
    }
    if (inputs.password.length == 0) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const save = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .get(`http://localhost:8080/registration/login/${inputs.email}`)
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            if (response.data.password === inputs.password) {
              console.log(response.data);
              localStorage.setItem("id", response.data.id);
              // localStorage.setItem('wishlistId',response.data.)
              navigate("/home");
            } else {
              message.error("invalid password");
              setErrors({ ...errors, [errors.password]: "invalid password" });
            }
          }
        })
        .catch((error) => {
          message.error("Email is not registered");
          setErrors({ ...errors, [errors.email]: "invalid email" });
        });
    }
  };
  return (
    <div>
      <Container className="main">
        <h3 className="sign">Login</h3>
        <Form onSubmit={save} className="form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              className="input1"
              name="email"
              value={inputs.name}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              className="input1"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" variant="secondary" className="bton ">
            Login
          </Button>
          <p className="lnk">
            New User?<Link to="/registration">Create account</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
