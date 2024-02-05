import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import logo from "../Images/logo.webp";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Col,
  Row,
  Badge,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import axios from "axios";
import MyContext from "./Categories/MyContext";
import { message } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const { input, setInput, setProduct, setData, list, setList, pro, setPro } =
    useContext(MyContext);
  useEffect(() => {
    productData();
  }, [input]);
  const productData = (e) => {
    if (input !== "") {
      axios
        .get(`http://localhost:8080/products/productsByNameContains/${input}`)
        .then((res) => {
          if (res.status == 200 && res.data.length !== 0) {
            // console.log(res.data)
            setData(true);
            setProduct(res.data);
          } else {
            setData(false);
            console.log("No Product Found");
          }
        })
        .catch(() => {
          console.log("error");
        });
    }
  };

  const handleChange = (e) => {
    setPro(e.target.value);
    if (pro !== "") {
      axios
        .get(`http://localhost:8080/products/productsByNameContains/${pro}`)
        .then((res) => {
          if (res.status == 200) {
            // console.log(res.data)
            setList(res.data);
          }
        })
        .catch(() => {
          alert("error");
        });
    }
  };
  return (
    <div>
      <Navbar className="bg-body-tertiary header">
        <Container fluid>
          <Navbar.Brand>
            {" "}
            <Link to="/home">
              <Image
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Myntra logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/men" className="categories">
                <b>MEN</b>
              </Link>
              <Link to="/women" className="categories">
                <b>WOMEN</b>
              </Link>

              <Link to="/kidswear" className="categories">
                <b>KIDS</b>
              </Link>
              <Link to="/homedecor" className="categories">
                <b>HOME & LIVING</b>
              </Link>
              <Link to="/beautymake" className="categories">
                <b>BEAUTY</b>
              </Link>
              <Link to="/studio" className="categories">
                <b>STUDIO</b>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <div className="search">
            <div>
              <Form.Control
                type="search"
                placeholder="Search for products,brands&more "
                className="me-2 data"
                aria-label="Search"
                value={pro}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setInput(e.target.value);
                    navigate("/search");
                    setPro("");
                  }
                }}
              />
            </div>
            {
              <div
                style={{
                  zIndex: "1000",
                  position: "absolute",
                  overflow: "scroll",
                  backgroundColor: "white",
                  maxHeight: "500%",
                  overflowX: "hidden",
                  marginLeft: "-6%",
                  paddingLeft: "1%",
                }}
              >
                {pro.length > 2 &&
                  pro &&
                  list.map((item) => {
                    return (
                      <div key={item.id}>
                        {" "}
                        <Link
                          className="list"
                          to="/search"
                          onClick={() => {
                            setInput(item.productName);
                            setPro("");
                          }}
                        >
                          {item.productName}
                        </Link>
                      </div>
                    );
                  })}
              </div>
            }
            {/* {console.log(product)} */}
          </div>
          <Row>
            <Col>
              <Row>
                <FaRegUser size={20} />
              </Row>
              <Row>
                <DropdownButton
                  variant="outline-tertiary"
                  bg="light"
                  title="Profile"
                  size="sm"
                >
                  <Dropdown.Item>
                    <Profile />
                  </Dropdown.Item>
                </DropdownButton>
              </Row>
            </Col>
            <Col>
              <Link
                to="/wishlist"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Row>
                  <FaRegHeart size={20} />
                </Row>
                <Row style={{ fontSize: "11pt" }}>
                  <b>Wishlist</b>
                </Row>
              </Link>
            </Col>
            <Col>
              <Link
                to="/bag"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Row>
                  {" "}
                  <HiOutlineShoppingBag size={20} />
                </Row>
                <Row style={{ fontSize: "11pt" }}>
                  <b>Bag</b>
                </Row>
              </Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
