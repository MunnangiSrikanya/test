import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./orders.css";
import Header from "./Header";
import Footer from "./Footer";
import { GiCancel, GiConfirmed, GiReturnArrow } from "react-icons/gi";
import { FaExchangeAlt } from "react-icons/fa";
import { BsBox2 } from "react-icons/bs";
import { message } from "antd";
import CancelOrders from "./CancelOrders";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    displayOrders();
  }, []);
  const displayOrders = () => {
    axios.get(`http://localhost:8080/orders/getOrders/${id}`).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data.sort((a, b) => b.order.order_id - a.order.order_id));
      }
    });
  };
  // const handleCancel=(itemId)=>{
  //   axios.put(`http://localhost:8080/orders/cancel/${itemId}`)
  //  .then(res=>{
  //   if(res.status===200){
  //     message.success('order cancelled')
  //   }
  //  })
  // }
  return (
    <div>
      <Header />
      <h2>All Orders</h2>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {console.log(item)}
            <Container className="mt-2 order-container">
              <b>
                {item.orderStatus === "Cancelled" ? (
                  <GiCancel color="red" size={"2%"} />
                ) : item.orderStatus === "Delivered" ? (
                  <GiConfirmed color="green" size={"2%"} />
                ) : item.orderStatus === "Return Initiated" ? (
                  <GiReturnArrow size={"2%"} />
                ) : item.orderStatus === "Exchange Initiated" ? (
                  <FaExchangeAlt size={"2%"} />
                ) : item.orderStatus === "Ordered" ? (
                  <BsBox2 size={"1.5%"} />
                ) : (
                  ""
                )}{" "}
                {item.orderStatus}
              </b>
              <br></br>
              On {item.order_date}
              <Card className="order-card mb-2 mt-2" onClick={()=>navigate("/orderDetails",{state:{item:item}})}>
                <Row>
                  <Col md={2}>
                    <Image src={item.product.url} width={"60%"} />
                  </Col>
                  <Col md={10}>
                    <b>{item.product.brandName}</b>
                    <br />
                    {item.product.productName}
                    <br />
                    {item.expected_Delivery && (
                      <div>
                        Expected Delivery Date : {item.expected_Delivery}
                      </div>
                    )}
                    <div className="mt-2">{item.orderStatus ==='Delivered' ? <div><Button variant="outline-dark" onClick={()=>{navigate("/return" ,{state:{item}})}}>Return/Exchange</Button></div>:item.orderStatus==='Ordered'?<Button onClick={()=>{navigate("/cancel" ,{state:{item}})}} variant="outline-dark" >Cancel</Button>:""}</div>
                  </Col>
                </Row>
              </Card>
            </Container>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Orders;
