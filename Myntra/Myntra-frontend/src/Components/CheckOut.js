import { Button, Row, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Navbar } from 'react-bootstrap'
import Address from './Address'
import Payment from './Payment'
import { MdOutlineSecurity } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../Images/logo.webp'
import axios from 'axios'
const CheckOut = () => {
    const [add,setAdd]=useState(false)
    const[pay,setPay]=useState(false)
    const navigate = useNavigate();
    const id = localStorage.getItem("id");
    const add_id = localStorage.getItem("addressId");
    const location=useLocation()
    const ids=location.state
    const placeOrder = () => {
      axios
        .post(
          `http://localhost:8080/orders/save/${id}/${add_id}?bagItemIds=${ids.ids}`
        )
        .then((response) => {
          if (response.status === 200) {
            navigate("/confirm");
            localStorage.setItem("orderId", response.data.order_id);
          }
        });
    };
  return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
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
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <MdOutlineSecurity style={{ color: "#14cda8" }} size="10%" /> 100%
              SECURE
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col md={5}>
        <Address add={add} setAdd={setAdd}/>
        </Col>
        <Col md={7}>
        <Payment pay={pay} setPay={setPay}/>
        </Col>
        </Row>
        <Button
            style={{ backgroundColor: "#ff3f6c", marginTop: "2%" }}
            variant="outline-light"
            onClick={() => {
              add & pay
                ? placeOrder()
                : add & !pay ? message.info("please select payment mode"):message.info("please select address");
            }}
          >
            PLACE ORDER
          </Button>
    </div>
  )
}

export default CheckOut
