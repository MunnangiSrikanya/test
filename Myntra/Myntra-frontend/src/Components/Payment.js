import { Card, Col, Row, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  Image,
  ListGroup,
  Navbar,
  Tab,
  TabContainer,
} from "react-bootstrap";
import {
  Bank,
  Cash,
  CashStack,
  CreditCard,
  Paypal,
  Wallet,
  Wallet2,
  WalletFill,
} from "react-bootstrap-icons";
import { SiPaytm, SiPhonepe } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa6";

const Payment = ({setPay}) => {
  return (
    <div>
      
      <div className="mt-5" style={{ marginLeft: "5%" }}>
        <h6>Choose Payment Mode</h6>
        <TabContainer defaultActiveKey="#link1">
          <Row
            style={{
              borderStyle: "groove",
              padding: "2%",
              borderWidth: "0.5px",
              marginRight: "2%",
            }}
          >
            <Col>
              <ListGroup style={{ backgroundColor: "aliceblue" }}>
                <ListGroup.Item action variant="secondary" href="#link1">
                  <CashStack /> Cash On Delivery
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" variant="secondary">
                  PhonePe/Google Pay/BHIM UPI
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" variant="secondary">
                  <CreditCard /> Credit/Debit Card
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" variant="secondary">
                  <Wallet /> Paytm/Wallets
                </ListGroup.Item>
                <ListGroup.Item action href="#link5" variant="secondary">
                  Pay Later
                </ListGroup.Item>
                <ListGroup.Item action href="#link6" variant="secondary">
                  EMI
                </ListGroup.Item>
                <ListGroup.Item action href="#link7" variant="secondary">
                  <Bank /> Net Banking
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col style={{ marginLeft: "5%" }}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <input
                    type="radio"
                    name="payment"
                    onChange={() => setPay(true)}
                  />{" "}
                  <CashStack /> Cash On delivery(Cash/UPI)
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <h6>Pay Using UPI</h6>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    <SiPhonepe /> PhonePe
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    <FaGooglePay size={"10%"}></FaGooglePay> Google Pay
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <h6>CREDIT/DEBIT CARD</h6>
                  <div className="mb-2">
                    Card Number <input type="number" />
                  </div>
                  <div className="mb-2">
                    Name On Card <input type="number" />
                  </div>
                  <div className="mb-2">
                    Valid Thru(MM/YY) <input type="number" />
                  </div>
                  <div>
                    CVV <input type="number" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <h6>Select Wallet To Pay</h6>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />
                    <SiPaytm /> Paytm Payments Bannk Wallet
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Airtel Money
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    PayZapp
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    FreeCharge(Wallet+PayLater)
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Mobikwik|ZIP(Pay Later)
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    OlaMoney(Wallet+PostPaid)
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                  <h6>Select Pay Later to Pay</h6>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Simpl
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Lazypay
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    ICICI Pay Later
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link6">
                  <h6>Select EMI Option</h6>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    HDFC Credit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    HDFC Debit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    AXIS Credit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    AXIS Debit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    ICICI Credit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    ICICI Debit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Kotak Credit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Kotak Debit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    SBI Credit Card EMI
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    SBI Debit Card EMI
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="#link7">
                  <h6>Select Net Banking</h6>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Axis Bank
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    HDFC Bank
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    ICICI Bank
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    Kotak
                  </div>
                  <div className="mb-2">
                    <input
                      type="radio"
                      name="payment"
                      onChange={() => setPay(true)}
                    />{" "}
                    SBI
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </div>
    </div>
  );
};

export default Payment;
