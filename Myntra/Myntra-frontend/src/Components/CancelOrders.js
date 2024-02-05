import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

const CancelOrders = () => {
  const [reason, setReason] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const handleCancel = () => {
    axios
      .put(`http://localhost:8080/orders/cancel/${item.item.item_id}`)
      .then((res) => {
        if (res.status === 200) {
          message.success("order cancelled");
          navigate("/orders");
        }
      });
  };
  console.log(item);
  return (
    <div>
      <Header />
      <div style={{margin:'0% 10%'}}>
        <div>
          <Card className="order-card mb-2 mt-2">
            <Row>
              <Col md={2}>
                <Image src={item.item.product.url} width={"60%"} />
              </Col>
              <Col md={10}>
                <b>{item.item.product.brandName}</b>
                <br />
                {item.item.product.productName}
                <br />₹ {item.item.product.price}&nbsp;&nbsp;&nbsp;
                <strike>₹ {item.item.product.mrp}</strike>&nbsp;&nbsp;&nbsp;
                <b style={{ color: "#0bef12" }}>
                  Saved ₹ {item.item.product.mrp - item.item.product.price}
                </b>
              </Col>
            </Row>
          </Card>
        </div>
        <div>
          <h6>Reason For cancellation</h6>
          Please tell us correct reason for cancellation.This information is
          only used to improve our services
          <hr />
          <div>
            <h6>Select Reason</h6>
            <Form.Check
              type="radio"
              name="reason"
              label="Incorrect size ordered"
              value="Incorrect size ordered"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Incorrect size ordered"}
            />
            <Form.Check
              type="radio"
              name="reason"
              label="Product not required anymore"
              value="Product not required anymore"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Product not required anymore"}
            />
            {/* <Form.Check
            type="radio"
            name="reason"
            label="Cash issue"
            value="Cash issue"
            onChange={(e) => {
              setReason(e.target.value);
            }}
            checked={reason === "Cash issue"}
          /> */}
            <Form.Check
              type="radio"
              name="reason"
              label="Ordered by mistake"
              value="Ordered by mistake"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Ordered by mistake"}
            />
            <Form.Check
              type="radio"
              name="reason"
              label="Wants to change style/color"
              value="Wants to change style/color"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Wants to change style/color"}
            />
            <Form.Check
              type="radio"
              name="reason"
              label="Delayed Delivery cancellation"
              value="Delayed Delivery cancellation"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Delayed Delivery cancellation"}
            />
            <Form.Check
              type="radio"
              name="reason"
              label="Duplicate order"
              value="Duplicate order"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Duplicate order"}
            />
          </div>
          <Button className="mt-2"
            onClick={() => {
              reason ? handleCancel() : message.info("please select a reason");
            }}
            variant=""
            style={{ backgroundColor: "#ff3f6c", width: "20%",marginLeft:'25%'}} 
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CancelOrders;
