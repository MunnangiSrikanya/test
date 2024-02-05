import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./registration.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Registration = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const validateForm = () => {
    let newErrors = {};
    const str = new RegExp("^[a-zA-Z_ ]+$");
    const mail = new RegExp(
      "^[a-zA-Z0-9][a-zA-Z0-9.]*[a-zA-Z0-9][@][a-z]+[.][a-z]+$"
    );
    if (inputs.name.length == 0) {
      newErrors.name = "name is required";
    } else if (!str.test(inputs.name)) {
      newErrors.name = "only alphabets are allowed";
    }
    if (inputs.password.length == 0) {
      newErrors.password = "password is required";
    } else if (inputs.password.length < 8) {
      newErrors.password = "password must contain atleast 8 characters";
    }
    if (inputs.mobileNumber.length == 0) {
      newErrors.mobileNumber = "mobile number is required";
    } else if (inputs.mobileNumber.length != 10) {
      newErrors.mobileNumber = "invalid mobile number";
    }
    if (inputs.email.length == 0) {
      newErrors.email = "email is required";
    } else if (!mail.test(inputs.email)) {
      newErrors.email = "invalid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const save = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(
          "http://localhost:8080/registration/register",
          {
            name: inputs.name,
            email: inputs.email,
            mobileNumber: inputs.mobileNumber,
            password: inputs.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers": "Content-Type",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            //toast("Registered Successfully")

            toast.success("Registered Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/");
            setInputs({
              name: "",
              email: "",
              mobileNumber: "",
              password: "",
            });
          }
        })
        .catch((error) => {
          // toast('Caught an unexpected error')
          toast.error("An error occurred...", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }

    // axios.get("http://localhost:8080/registration/getallUsers")
    // .then((response)=>{
    //     if(response.status===200){
    //         console.log(response.data)
    //         let userNameData=response.data.map(item=>{
    //             return <div>{item.email}</div>
    //         })
    //         if(userNameData===inputs.email){
    //             alert("already exists")
    //         }
    //     }
    // })
    // .catch(error=>{
    //     alert('Caught an unexpected erroe')
    // })
  };
  return (
    <div>
      <Container className="main">
        <h3 className="sign">Sign Up</h3>
        <Form className="form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full name"
              className="input1"
              name="name"
              value={inputs.name}
              isInvalid={errors.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="input1"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              isInvalid={errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              className="input1"
              name="mobileNumber"
              value={inputs.mobileNumber}
              onChange={handleChange}
              isInvalid={errors.mobileNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.mobileNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              className="input1"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            type="submit"
            variant="secondary"
            className="bton "
            onClick={save}
          >
            Register
          </Button>
          <p className="lnk">
            Already have an account?<Link to="/">sign in</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default Registration;
