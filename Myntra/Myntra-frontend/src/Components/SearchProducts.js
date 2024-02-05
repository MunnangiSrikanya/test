import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import Footer from "./Footer";
import MyContext from "./Categories/MyContext";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { FaCross, FaRegHeart, FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Filters from "./Filters";
import Sorting from "./Sorting";
import { RxCross2 } from "react-icons/rx";

const SearchProducts = () => {
  const { product, bagId, data, setProduct, input } = useContext(MyContext);
  const id = localStorage.getItem("id");
  const [selectedColor, setSelectedColor] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [reload, setReload] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectedDiscount, setSelectedDiscount] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/wishlist/getWishlist/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setWishlist(response.data);

          console.log(response.data);
        }
      })

      .catch((err) => {
        alert("error" + err);
      });
  }, [reload]);

  const add = (productId) => {
    axios
      .post(`http://localhost:8080/wishlist/addToWishlist/${productId}/${id}`)
      .then((res) => {
        if (res.status == 200) {
          message.success("Product Added to Wishlist");
          setReload(!reload);
        }
      })

      .catch((error) => {});
  };
  const remove = (productId) => {
    axios
      .delete(`http://localhost:8080/wishlist/deleteItem/${productId}/${id}`)

      .then((res) => {
        if (res.status === 200) {
          message.success("Removed From wishlist.");
          setReload(!reload);
        }
      })
      .catch((err) => {});
  };
  const addToCart = (proId) => {
    axios
      .post(`http://localhost:8080/bag/addToBag/${bagId}/${proId}/1`)
      .then((res) => {
        if (res.status === 200) {
          message.success("Added to Bag");
        }
      });
  };
  return (
    <div>
      <Header />
      {data ? (
        <Row className="mt-5 mb-2 ">
          <Col md={2}>
            <Filters
              selected={selected}
              setSelected={setSelected}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedDiscount={selectedDiscount}
              setSelectedDiscount={setSelectedDiscount}
            />
          </Col>
          <Col md={10}>
            {/* {product.length>1 && <Sorting />} */}
            <Sorting selected={selected} setSelected={setSelected} />
            <div className="d-flex flex-row gap-lg-5">
              {selectedGender && (
                <div
                  style={{
                    border: "0.5px solid gray",
                    borderRadius: "20px",
                    padding: "0.2% 0.7% ",
                  }}
                >
                  {selectedGender}{" "}
                  <Link
                    style={{ color: "black" }}
                    onClick={() => setSelectedGender(null)}
                  >
                    <RxCross2 />
                  </Link>
                </div>
              )}
              {selectedColor && (
                <div
                  style={{
                    border: "0.5px solid gray",
                    borderRadius: "20px",
                    padding: "0.2% 0.7% ",
                  }}
                >
                  {selectedColor}{" "}
                  <Link
                    style={{ color: "black" }}
                    onClick={() => setSelectedColor(null)}
                  >
                    <RxCross2 />
                  </Link>
                </div>
              )}
              {selectedBrand && (
                <div
                  style={{
                    border: "0.5px solid gray",
                    borderRadius: "20px",
                    padding: "0.2% 0.7% ",
                  }}
                >
                  {selectedBrand}{" "}
                  <Link
                    style={{ color: "black" }}
                    onClick={() => setSelectedBrand(null)}
                  >
                    <RxCross2 />
                  </Link>
                </div>
              )}
              {selectedDiscount && (
                <div
                  style={{
                    border: "0.5px solid gray",
                    borderRadius: "20px",
                    padding: "0.2% 0.7% ",
                  }}
                >
                  {selectedDiscount}% and above{" "}
                  <Link
                    style={{ color: "black" }}
                    onClick={() => setSelectedDiscount(null)}
                  >
                    <RxCross2 />
                  </Link>
                </div>
              )}
            </div>
            {product.length !== 0 ? (
              <div
                style={{ borderTop: "0.2px solid gray", paddingTop: "3%" }}
                className="row row-cols mt-4"
              >
                {product.map((item, index) => {
                  return (
                    <Card
                      style={{
                        width: "18rem",
                        marginLeft: "2%",
                        padding: "0%",
                      }}
                      className="mb-3"
                      key={index}
                    >
                      <Card.Img
                        variant="top"
                        src={item.url}
                        height={"250rem"}
                      ></Card.Img>

                      <Card.Body>
                        <Card.Title>{item.brandName}</Card.Title>
                        <Card.Text>
                          <div>{item.productName} </div>
                          <div>
                            Rating : {item.rating} <FaStar color="orange" />
                          </div>
                          <div>
                            ₹{item.price}&nbsp;&nbsp;{" "}
                            <strike>₹{item.actualPrice}</strike>&nbsp;&nbsp;{" "}
                            <span style={{ color: "red" }}>({item.offer})</span>
                          </div>
                          {wishlist.some((i) => i.product.pId === item.pId) ? (
                            <Button
                              variant="info"
                              size="sm"
                              onClick={() => {
                                remove(item.pId);
                              }}
                            >
                              <FaHeart size={18} color="red" /> Wishlisted
                            </Button>
                          ) : (
                            <Button
                              variant="info"
                              size="sm"
                              onClick={() => {
                                add(item.pId);
                              }}
                            >
                              <FaRegHeart size={18} /> Add to wishlist
                            </Button>
                          )}
                          &nbsp;&nbsp;
                          <Button
                            variant="info"
                            onClick={() => addToCart(item.pId)}
                          >
                            Add To Bag
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div style={{ fontSize: "x-large", margin: "15% 0%" }}><center>
              <b>No Products</b>
            </center></div>
            )}
          </Col>
        </Row>
      ) : (
        <div style={{ fontSize: "x-large", margin: "15% 0%" }}>
          <center>
            <b>No Products Found</b>
          </center>
        </div>
      )}
      {/* </Col> */}
      {/* </Row> */}
      <Footer />
    </div>
  );
};

export default SearchProducts;
