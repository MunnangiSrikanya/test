import React, { useEffect, useState } from "react";
import {
  ButtonGroup,
  Card,
  Container,
  Form,
  Image,
  Modal,
  Navbar,
} from "react-bootstrap";
import { MdOutlineSecurity } from "react-icons/md";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../Images/logo.webp";
import { Button } from "react-bootstrap";
import "./address.css";
import axios from "axios";
import { message } from "antd";
const Address = ({setAdd}) => {
  const id = localStorage.getItem("id");
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    pincode: "",
    address: "",
    town: "",
    city: "",
    state: "",
  });
  const [details, setDetails] = useState([]);
  const [save, setSave] = useState(false);
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);
  const [addr_id, setAddr_id] = useState(0);

  const [reload, setReload] = useState(true);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };
  // const {ids}=useParams()
  const getAddress = () => {
    axios
      .get(`http://localhost:8080/address/get/${id}`)
      .then((response) => {
        if (response.status == 200) {
          if (response.data.length !== 0) {
            setSave(true);
            // console.log(response.data)
            setDetails(response.data);
            // console.log(details)
          }
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAddress();
  }, [id, reload]);
  const validateForm = () => {
    let errors = {};
    if (formData.name.length == 0) {
      errors.name = "name is required";
    } else if (!/^[a-zA-z ]/.test(formData.name)) {
      errors.name = "only alphabets are allowed";
    }
    if (formData.mobileNumber.length == 0) {
      errors.mobileNumber = "mobile number is required";
    } else if (formData.mobileNumber.length !== 10) {
      errors.mobileNumber = " length should be 10";
    }
    if (formData.pincode.length == 0) {
      errors.pincode = "pincode is required";
    } else if (formData.pincode.length !== 6) {
      errors.pincode = "length should be 6";
    } else if (!/[0-9]/.test(formData.pincode)) {
      errors.pincode = "only numbers are allowed.";
    }
    if (formData.address.length == 0) {
      errors.address = "address is required";
    }
    if (formData.town.length == 0) {
      errors.town = "town is required";
    }
    if (formData.city.length == 0) {
      errors.city = "city  is required";
    } else if (!/^[a-zA-Z ]/.test(formData.city)) {
      errors.city = "invalid city name";
    }
    if (formData.state.length === 0) {
      errors.state = "state is required";
    } else if (!/^[a-zA-Z ]/.test(formData.state)) {
      errors.state = "invalid state";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const addAddress = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(`http://localhost:8080/address/add/${id}`, {
          name: formData.name,
          mobileNo: formData.mobileNumber,
          pincode: formData.pincode,
          addressDeatails: formData.address,
          town: formData.town,
          district: formData.city,
          state: formData.state,
        })
        .then((response) => {
          if (response.status === 200) {
            setSave(true);
            message.success("address added");
            setReload(!reload);
            // getAddress()
          }
        })
        .catch((err) => {
          message.error("error");
        });
    }
  };

  const getAddressById = (address_id) => {
    axios
      .get(`http://localhost:8080/address/getById/${address_id}`)
      .then((response) => {
        if (response.status === 200) {
          setFormData({
            name: response.data.name,
            mobileNumber: response.data.mobileNo,
            pincode: response.data.pincode,
            address: response.data.addressDeatails,
            town: response.data.town,
            city: response.data.district,
            state: response.data.state,
          });
          setAddr_id(address_id);
          console.log("get", address_id);
        }
      })
      .catch((err) => {});
  };
  const deleteAddress = (address_id) => {
    axios
      .delete(`http://localhost:8080/address/delete/${address_id}`)
      .then((res) => {
        if (res.status === 200) {
          message.success("removed");
          setReload(!reload);
          // getAddress();
        }
      });
  };
  const updateAddress = () => {
    if (validateForm()) {
      axios
        .put(`http://localhost:8080/address/updateAddress/${addr_id}`, {
          name: formData.name,
          mobileNo: formData.mobileNumber,
          pincode: formData.pincode,
          addressDeatails: formData.address,
          town: formData.town,
          district: formData.city,
          state: formData.state,
        })
        .then((res) => {
          if (res.status === 200) {
            setShow(false);
            console.log("update", addr_id);
            message.success("updated");
            setReload(!reload);
            // getAddress();
          }
        });
    }
  };
  const changeInput = (id) => {
    setAdd(true);
    localStorage.setItem("addressId", id);
  };
  // console.log("ids", itemIds);
  return (
    <div>
     
      <div>
        {save ? (
          <div className="addresses">
            <h6>Select Delivery Address</h6>
            {details.map((item, index) => {
              return (
                <Card
                  style={{ width: "90%", padding: "2%" }}
                  key={index}
                  className="mb-2"
                >
                  <label className="d-flex">
                    <div>
                      <input
                        type="radio"
                        name="address"
                        onChange={() => changeInput(item.address_id)}
                      />
                    </div>
                    <div>
                      <b>{item.name}</b>
                      <br />
                      {item.addressDeatails},{item.town}
                      <br />
                      {item.district},{item.state}
                      <br />
                      Mobile: {item.mobileNo}
                      <div className="d-flex mt-2">
                        <Button
                          variant="outline-dark"
                          style={{ width: "70%", marginRight: "5%" }}
                          onClick={() => deleteAddress(item.address_id)}
                        >
                          Remove
                        </Button>
                        <Button
                          variant="outline-dark"
                          style={{ width: "70%" }}
                          onClick={() => {
                            setShow(true);
                            getAddressById(item.address_id);
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </label>
                  <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    scrollable
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>EDIT ADDRESS</Modal.Title>
                    </Modal.Header>

                    <Modal.Body
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="modal"
                    >
                      <Form className="form-details">
                        <b>CONTACT DETAILS</b>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={formData.name}
                            isInvalid={error.name}
                            onChange={handleChange}
                            className="inputs"
                          />
                          <Form.Control.Feedback type="invalid">
                            {error.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput2"
                        >
                          <Form.Label>Mobile No</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter mobile number"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            isInvalid={error.mobileNumber}
                            onChange={handleChange}
                            className="inputs"
                          />
                          <Form.Control.Feedback type="invalid">
                            {error.mobileNumber}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <b>ADDRESS</b>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput2"
                        >
                          <Form.Label>Pincode</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter pincode"
                            name="pincode"
                            value={formData.pincode}
                            isInvalid={error.pincode}
                            onChange={handleChange}
                            className="inputs"
                          />
                          <Form.Control.Feedback type="invalid">
                            {error.pincode}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput2"
                        >
                          <Form.Label>
                            Address(HouseNo,Building,Street,Area)
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter address"
                            name="address"
                            value={formData.address}
                            isInvalid={error.address}
                            onChange={handleChange}
                            className="inputs"
                          />
                          <Form.Control.Feedback type="invalid">
                            {error.address}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput2"
                        >
                          <Form.Label>Locality/Town</Form.Label>
                          <Form.Control
                            type="text"
                            name="town"
                            value={formData.town}
                            isInvalid={error.town}
                            onChange={handleChange}
                            className="inputs"
                          />
                          <Form.Control.Feedback type="invalid">
                            {error.town}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput2"
                        >
                          <Form.Label>City/District</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            value={formData.city}
                            isInvalid={error.city}
                            onChange={handleChange}
                            className="inputs"
                          />
                          <Form.Control.Feedback type="invalid">
                            {error.city}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput2"
                        >
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            name="state"
                            value={formData.state}
                            isInvalid={error.state}
                            onChange={handleChange}
                            className="inputs"
                          />
                          <Form.Control.Feedback type="invalid">
                            {error.state}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        style={{
                          backgroundColor: "#ff3f6c",
                          borderRadius: "0%",
                        }}
                        variant="outline-light"
                        onClick={() => updateAddress()}
                      >
                        SAVE ADDRESS
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card>
              );
            })}
            <Button
              variant="link"
              style={{ color: "#ff3f6c", textDecoration: "none" }}
              onClick={() => {
                setSave(false);
                setFormData({});
              }}
            >
              <b>+Add New Address</b>
            </Button>
          </div>
        ) : (
          <Card className="card-details">
            <Form className="form-details">
              <b>CONTACT DETAILS</b>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  isInvalid={error.name}
                />
                <Form.Control.Feedback type="invalid">
                  {error.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter mobile number"
                  name="mobileNumber"
                  onChange={handleChange}
                  value={formData.mobileNumber}
                  isInvalid={error.mobileNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {error.mobileNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <b>ADDRESS</b>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter pincode"
                  name="pincode"
                  onChange={handleChange}
                  value={formData.pincode}
                  isInvalid={error.pincode}
                />
                <Form.Control.Feedback type="invalid">
                  {error.pincode}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Address(HouseNo,Building,Street,Area)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  isInvalid={error.address}
                />
                <Form.Control.Feedback type="invalid">
                  {error.address}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Locality/Town</Form.Label>
                <Form.Control
                  type="text"
                  name="town"
                  onChange={handleChange}
                  value={formData.town}
                  isInvalid={error.town}
                />
                <Form.Control.Feedback type="invalid">
                  {error.town}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>City/District</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                  isInvalid={error.city}
                />
                <Form.Control.Feedback type="invalid">
                  {error.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  onChange={handleChange}
                  value={formData.state}
                  isInvalid={error.state}
                />
                <Form.Control.Feedback type="invalid">
                  {error.state}
                </Form.Control.Feedback>
              </Form.Group>
              <hr />
              <Button
                type="submit"
                variant="outline-light"
                className="button"
                onClick={addAddress}
              >
                <b>ADD ADDRESS</b>
              </Button>
            </Form>
          </Card>
        )}
      </div>
      
    </div>
  );
};

export default Address;
