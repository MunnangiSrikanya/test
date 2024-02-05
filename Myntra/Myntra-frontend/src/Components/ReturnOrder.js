import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

const ReturnOrder = () => {
  const [reason, setReason] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const handleReturn = () => {
    axios
      .put(`http://localhost:8080/orders/return/${item.item.item_id}`)
      .then((res) => {
        if (res.status === 200) {
          message.success("Return initiated");
          navigate("/orders");
        }
      });
  };
  const handleExchange = () => {
    axios
      .put(`http://localhost:8080/orders/exchange/${item.item.item_id}`)
      .then((res) => {
        if (res.status === 200) {
          message.success("exchange initiated");
          navigate("/orders");
        }
      });
  };
  console.log(item);
  return (
    <div>
      <Header />
      <div style={{ margin: "0% 10%" }}>
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
          <h6>Reason For return/exchange</h6>
          Please tell us correct reason for return/exchange.This information is
          only used to improve our services
          <hr />
          <div>
            <h6>Select Reason</h6>
            <Form.Check
              type="radio"
              name="reason"
              label="Size or fit issues"
              value="Size or fit issues"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Size or fit issues"}
            />
            <Form.Check
              type="radio"
              name="reason"
              label="Image shown did not match the actual product"
              value="Image shown did not match the actual product"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={
                reason === "Image shown did not match the actual product"
              }
            />
            <Form.Check
              type="radio"
              name="reason"
              label="Recieved a wrong or defective product"
              value="Recieved a wrong or defective product"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Recieved a wrong or defective product"}
            />
            <Form.Check
              type="radio"
              name="reason"
              label="Quality issues"
              value="Quality issues"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "Quality issues"}
            />
            <Form.Check
              type="radio"
              name="reason"
              label="I changed my mind"
              value="I changed my mind"
              onChange={(e) => {
                setReason(e.target.value);
              }}
              checked={reason === "I changed my mind"}
            />
          </div>
          <div className="mt-2">
          <Button
            onClick={() => {
              reason ? handleReturn() : message.info("please select a reason");
            }}
            variant=""
            style={{ backgroundColor: "#ff3f6c" ,marginLeft:'15%',width:'20%'}}
          >
            Return
          </Button>
          <Button
            onClick={() => {
              reason
                ? handleExchange()
                : message.info("please select a reason");
            }}
            variant=""
            style={{ backgroundColor: "#ff3f6c",marginLeft:'15%',width:'20%' }}
          >
            Exchange
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnOrder;
