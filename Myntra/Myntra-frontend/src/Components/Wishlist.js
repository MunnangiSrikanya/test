import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { Button, Card } from "react-bootstrap";
import Header from "./Header";
import axios from "axios";
import { message } from "antd";
import { Bag } from "react-bootstrap-icons";
import MyContext from "./Categories/MyContext";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [product, setProduct] = useState([]);
  const id = localStorage.getItem("id");
  const [wishlistId, setWishlistId] = useState(0);
  const [show, setShow] = useState(false);
  const { bagId } = useContext(MyContext);
  const[reload,setReload]=useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    // wishlist()
    wishlistData();
  }, [id, wishlistId, reload]);

  // const wishlist=()=>{
  //   axios.get(`http://localhost:8080/wishlist/getByUserId/${id}`)
  // .then(res=>{
  //   // console.log(res.data)
  //   if(res.status==200){
  //     setWishlistId(res.data)
  //     // console.log(wishlistId)
  //   }
  // })
  // }
  const wishlistData = () => {
    // ${wishlistId}
    axios
      .get(`http://localhost:8080/wishlist/getWishlist/${id}`)

      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          // console.log(res.data.length)
          if (res.data.length === 0) {
            setShow(false);
          } else {
            setShow(true);
            console.log(res.data);
            setProduct(res.data);
            // setReload(!reload)
          }
        }
      })
      .catch("error");
  };

  const handleClick = (productId) => {
    axios
      .delete(`http://localhost:8080/wishlist/deleteItem/${productId}/${id}`)

      .then((res) => {
        if (res.status === 200) {
          setReload(!reload)
          // message.success("Removed From wishlist.")
        }
      });
  };

  const addToCart = (proId) => {
    axios
      .post(`http://localhost:8080/bag/addToBag/${bagId}/${proId}/1`)
      .then((res) => {
        if (res.status === 200) {
          message.success("Successfully Added to Bag");
          setReload(!reload)
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div>
      <Header />
      <div className="mt-2 mb-2 row row-cols">
        {show ? (
          product.map((item, index) => {
            return (
              <Card
                style={{ width: "18rem", marginLeft: "2%", padding: "0%" }}
                className="mb-3"
                key={index}
              >
                <Card.Img
                  variant="top"
                  src={item.product.url}
                  height={"250rem"}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>{item.product.brandName}</Card.Title>
                  <Card.Text>
                    <div>{item.product.productName} </div>
                    <div>
                      Rs.{item.product.price}&nbsp;&nbsp;{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        {item.product.actualPrice}
                      </span>
                      &nbsp;&nbsp;{" "}
                      <span style={{ color: "red" }}>
                        ({item.product.offer})
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          handleClick(item.product.pId);
                        }}
                      >
                        <div>Remove</div>
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          addToCart(item.product.pId);
                          handleClick(item.product.pId);
                        }}
                      >
                        {" "}
                        Move To Bag
                      </Button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <div style={{ fontSize: "x-large", margin: "15% 0%" }}>
            <center>
              <b>Your Wishlist is empty</b>
              <br />
              <Button
                variant="outline-primary"
                style={{ borderRadius: "0%" }}
                onClick={() => navigate("/home")}
              >
                CONTINUE SHOPPING
              </Button>
            </center>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
