import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./editprofile.css";
import Header from "./Header";
import Profile from "./Profile";
import axios from "axios";
import { message } from "antd";
const EditProfile = () => {
  const id = localStorage.getItem("id");
  const [info, setInfo] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
    dob: "",
    alterMobile: "",
    hintName: "",
  });
  useEffect(() => {
    getUserData();
  }, [id]);
  const getUserData = () => {
    axios
      .get(`http://localhost:8080/registration/getUser/${id}`)
      .then((res) => {
        setInfo({
          name: res.data.name,
          mobileNumber: res.data.mobileNumber,
          email: res.data.email,
          password: res.data.password,
          dob: res.data.dob,
          alterMobile: res.data.alterMobile,
          hintName: res.data.hintName,
        });
      });
  };
  const validateForm=()=>{
    
  }
  const [data, setData] = useState(false);
  const handleInput = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(true);
    let url = `http://localhost:8080/registration/edit/${info.email}`;
    const reqBody = {
      name: info.name,
      email: info.email,
      mobileNumber: info.mobileNumber,
      password: info.password,
      dob:info.dob,
      alterMobile:info.alterMobile,
      hintName:info.hintName
    };
    axios
      .put(url, reqBody)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          message.success("updated successfully!!");
        }
      })
      .catch((error) => {
        message.error("error");
      });
  };
  return (
    <div>
      <Header />
      <div className="d-flex mt-5">
        <div>
          <Profile />
        </div>
        <div className="edit ">
          {data ? (
            <div>
              <Card className="profiledetails">
                <h4>Profile Details</h4>
                <hr />
                <div className="flex flex-column">
                  <Row className="mb-2">
                    <Col>Name</Col> <Col>{info.name}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>Mobile Number</Col> <Col>{info.mobileNumber}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>Email Id</Col> <Col>{info.email}</Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>Date of Birth</Col>{" "}
                    <Col>
                      {info.dob === null ? "-- not added --" : info.dob}
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>Alternate Mobile</Col>{" "}
                    <Col>
                      {info.alterMobile === null
                        ? "-- not added --"
                        : info.alterMobile}
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col>Hint Name</Col>{" "}
                    <Col>
                      {info.hintName === null
                        ? "-- not added --"
                        : info.hintName}
                    </Col>
                  </Row>
                  <Button
                    type="Edit"
                    variant="secondary"
                    className="btonedit mt-2"
                    onClick={() => setData(false)}
                  >
                    Edit
                  </Button>
                </div>
              </Card>
            </div>
          ) : (
            <Card className="saveDetails">
              <h3>Edit Details</h3>
              <hr />
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    className="input"
                    name="mobileNumber"
                    value={info.mobileNumber}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="input"
                    name="name"
                    value={info.name}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="input"
                    name="email"
                    value={info.email}
                    readOnly={true}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Date Of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    format="mm/dd/yyyy"
                    className="input"
                    name="dob"
                    value={info.dob}
                    onChange={handleInput}
                  />
                </Form.Group>

                <h5>Alternate Mobile details</h5>
                <InputGroup
                  className="mb-3 input"
                  controlId="exampleForm.ControlInput1"
                >
                  <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>

                  <Form.Control
                    type="number"
                    width={"200px"}
                    name="alterMobile"
                    value={info.alterMobile}
                    onChange={handleInput}
                  />
                </InputGroup>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Hint Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="input"
                    name="hintName"
                    value={info.hintName}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="secondary"
                  className="btonedit"
                  onClick={handleSubmit}
                >
                  Save Details
                </Button>
              </Form>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
