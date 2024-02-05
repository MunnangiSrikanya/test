import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import { Button, Card } from "react-bootstrap";
import Header from "../Header";
import axios from "axios";
import { message } from "antd";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import MyContext from "./MyContext";
const Watches = () => {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState(0);
  const id = localStorage.getItem("id");
  const [wishlistId, setWishlistId] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [proId, setProId] = useState(0);
  const { bagId } = useContext(MyContext);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    data();
  }, []);
  const data = () => {
    axios
      .get("http://localhost:8080/products/productsByCategory/watches", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          setReload(!reload);
          setProduct(res.data);
        }
      })
      .catch();
  };

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
          setReload(!reload);
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 row row-cols">
        {product.map((item, index) => {
          return (
            <Card
              style={{ width: "18rem", marginLeft: "2%", padding: "0%" }}
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
                  <Button variant="info" onClick={() => addToCart(item.pId)}>
                    Add To Bag
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Watches;
