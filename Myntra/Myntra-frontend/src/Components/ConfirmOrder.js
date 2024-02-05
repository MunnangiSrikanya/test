import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import confirm from "../Images/confirm.png";
import { useNavigate } from "react-router-dom";
import { CaretRight } from "react-bootstrap-icons";
import { RxCaretRight } from "react-icons/rx";
import axios from "axios";
import "./confirmorders.css";
const ConfirmOrder = () => {
  const navigate = useNavigate();
  const add_id = localStorage.getItem("addressId");
  const [address, setAddress] = useState({});
  const orderId = localStorage.getItem("orderId");
  const [orderDetails, setOrderDetails] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/address/getById/${add_id}`)
      .then((res) => {
        setAddress(res.data);
      })
      .catch((err) => {});
  }, []);
  const getOrders = () => {
    axios
      .get(`http://localhost:8080/orders/getItems/${orderId}`)
      .then((res) => {
        if (res.status === 200) {
          setClick(true);
          setOrderDetails(res.data);
        }
      });
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          color: "rgb(43 182 115",
          marginTop: "10%",
        }}
      >
        <Image src={confirm} width={70} />
        <h1>Order Confirmed</h1>
        <Button
          variant="outline-dark"
          style={{ borderRadius: "none" }}
          className="mt-2"
          onClick={() => navigate("/home")}
        >
          CONTINUE SHOPPING
        </Button>
      </div>
      <div style={{ marginTop: "5%", marginLeft: "25%" }}>
        Delivering to:
        <br />
        <b>
          {address.name} | {address.mobileNo}
        </b>
        <br />
        {address.addressDeatails} , {address.town} , {address.district} ,{" "}
        {address.state} , {address.pincode}
        <div className="mt-2">
          <Button variant="outline-danger" onClick={getOrders}>
            Order Details <RxCaretRight />
          </Button>
        </div>
      </div>
      <div className="mt-5 mb-5" style={{ textAlign: "center" }}>
        {click &&
          orderDetails.map((item, index) => {
            return (
              <div className="confirm mb-2">
                <Image src={item.product.url} width={"8%"} height={"3%"} />
                <div>
                  <b>{item.product.brandName}</b>
                </div>
                <div>{item.product.productName}</div>
                <div>Quantity : {item.quantity}</div>
                <div>Item Price : {item.product.price}</div>
                <div>Total Order Price : {item.order.price}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ConfirmOrder;
