import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const Coupon = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:8080/coupons/getCoupon-ByCode/STEALDEAL")
    axios.get("http://localhost:8080/coupons/getAllCoupons").then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        // let coopons=res.data
        setDetails(res.data);
        // console.log(details)
      }
    });
  }, []);
  return (
    <div>
      <Header />
      {details.map((item, index) => {
        return (
          <Card
            key={index}
            style={{ width: "50%", padding: "2%", marginLeft: "5%" }}
            className="mb-2 mt-2"
          >
            <Row>
              <Col md={2} style={{ color: "green" }}>
                {item.discountPercentage}% OFF
              </Col>
              <Col style={{ borderLeft: "2px solid grey" }}></Col>
              <Col md={9}>
                <div>{item.couponDetails}</div>
                <div>CODE : {item.couponCode}</div>
              </Col>
            </Row>
            <hr />
            <Row>Expiry : {item.expiryDate}</Row>
          </Card>
        );
      })}
    </div>
  );
};

export default Coupon;
