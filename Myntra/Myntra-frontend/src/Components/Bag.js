import { message } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Navbar, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./registration.css";
import { Image } from "react-bootstrap";
import MyContext from "./Categories/MyContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.webp";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import emptyBag from "../Images/empty-bag.webp";
import { MdOutlineDiscount } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
const Bag = () => {
  const { bagId, id } = useContext(MyContext);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [mrpPrice, setMrpPrice] = useState(0);
  const [platformFee, setPlatformFee] = useState(20);
  const [amount, setAmount] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [products, setProducts] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const [input, setInput] = useState("");
  const [avail, setAvail] = useState(false);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(false);
  const [apply, setApply] = useState(false);
  const [check, setCheck] = useState(false);
  const [change, setChange] = useState(false);
  const [applied, setApplied] = useState(false);
  const [newQuantity, setNewQuantity] = useState(0);
  const [bagItemId, setBagItemId] = useState(0);
  const [ids, setIds] = useState([]);
  const[reload,setReload]=useState(false)
  const bag = () => {
    axios
      .get(`http://localhost:8080/bag/getBagItems/${bagId}`)
      .then((res) => {
        if (res.status == 200) {
          if (res.data.length !== 0) {
            setDetails(true);
            setProducts(res.data);
            setIds(products.map((item) => {
              return item.bagItem_id;
            }))
            // console.log(products)
          } else {
            setDetails(false);
          }
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    bag();
  }, [id, bagId,reload]);
  // console.log(bagId)
  const removeFromBag = (productId) => {
    axios
      .delete(`http://localhost:8080/bag/delete/${productId}`)
      .then((res) => {
        if (res.status === 200) {
          message.success("removed");
          setReload(!reload)
        }
      })
      .catch((err) => {});
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    axios
      .put(
        `http://localhost:8080/bag/update-quantity/${bagItemId}/${newQuantity}`
      )
      .then((res) => {
        if (res.status === 200) {
          message.success("quantity updated");
          setReload(!reload)
        }
      })
      .catch((err) => {});
  };
  // console.log("object",products)
  const updatePrice = (boolean) => {
    if (products.length !== 0) {
      var total = 0;
      var netMrp = 0;
      for (const item of products) {
        total += item.quantity * item.product.price;
        netMrp += item.quantity * item.product.mrp;
      }
      setTotalPrice(total);
      setMrpPrice(netMrp);
      if (boolean && change) {
        if (totalPrice >= coupon.minPurchase) {
          setApplied(true);
          setCouponDiscount(totalPrice * (coupon.discountPercentage / 100));
          message.success("coupon applied");
        } else {
          setApplied(false);
          message.error("coupon is not applied for this amount");
        }
      }
      setAmount(totalPrice + platformFee - couponDiscount);
      
    } else {
      setTotalPrice(0);
      setMrpPrice(0);
      setAmount(0);
    }
    axios
        .put(`http://localhost:8080/bag/update-price/${bagId}/${amount}`)
        .then((res) => {setReload(!reload)})
        .catch((err) => {});
  };
  useEffect(() => {
    updatePrice();
  }, [products]);

  const handleApply = () => {
    setApply(true);
  };
  const checkCoupon = (i) => {
    setAvail(true);
    if (i !== "") {
      // console.log(i);
      axios
        .get(`http://localhost:8080/coupons/getCoupon-ByCode/${i}`)
        .then((res) => {
          if (res.status === 200) {
            setCoupon(res.data);
            setCheck(true);
          }
        })
        .catch(() => {
          setCheck(false);
          // alert('no coupons')
        });
    }
  };

  const placeOrder = () => {
    navigate("/checkout",{state:{ids}});
  };

  return (
    <div className={show && "blur-background"}>
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
      {details ? (
        <>
        <Row className="mt-2">
          <Col md={7}>
            {products.map((item, index) => {
              return (
                <div key={item.pId}>
                  <Card
                    style={{ width: "40rem", height: "12rem", margin: "10%" }}
                    className="mb-2 mt-2"
                    key={index}
                  >
                    <Row>
                      {/* <Col md={1} style={{padding:'3%'}}>
                    <input type='checkbox' onChange={()=>handleCheckBox(item.bagItem_id)} 
                    // checked={checked}
                    />
                  </Col>   */}
                      <Col md={4}>
                        <Card.Img
                          variant="top"
                          src={item.product.url}
                          height={"60%"}
                          style={{ padding: "10%" }}
                        ></Card.Img>
                      </Col>
                      <Col md={7}>
                        <Card.Body>
                          <Card.Title>{item.product.brandName}</Card.Title>
                          <Card.Text>
                            <div>{item.product.productName} </div>
                            <div>
                              Rs.{item.product.price}&nbsp;&nbsp;{" "}
                              <span style={{ textDecoration: "line-through" }}>
                                {" "}
                                MRP {item.product.actualPrice}
                              </span>
                              &nbsp;&nbsp;{" "}
                              <span style={{ color: "red" }}>
                                {item.product.offer}
                              </span>
                            </div>
                            <Button
                              variant="tertiary"
                              onClick={() => {
                                setBagItemId(item.bagItem_id);
                                handleShow();
                              }}
                            >
                              Qty:{item.quantity}
                              <AiOutlineCaretDown />
                            </Button>

                            <Modal
                              show={show}
                              onHide={() => setShow(false)}
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Select Quantity</Modal.Title>
                              </Modal.Header>

                              <Modal.Body
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                                className="modal"
                              >
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(1)}
                                >
                                  1
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(2)}
                                >
                                  2
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(3)}
                                >
                                  3
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(4)}
                                >
                                  4
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(5)}
                                >
                                  5
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(6)}
                                >
                                  6
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(7)}
                                >
                                  7
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(8)}
                                >
                                  8
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(9)}
                                >
                                  9
                                </Button>
                                <Button
                                  variant="outline-danger"
                                  onClick={() => setNewQuantity(10)}
                                >
                                  10
                                </Button>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  style={{
                                    backgroundColor: "#ff3f6c",
                                    borderRadius: "0%",
                                  }}
                                  variant="outline-light"
                                  onClick={handleClose}
                                >
                                  DONE
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col md={1}>
                        <Button
                          variant="outline-light"
                          onClick={() => removeFromBag(item.bagItem_id)}
                        >
                          <div style={{ color: "black" }}>X</div>
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </div>
              );
            })}
          </Col>
          <Col md={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  COUPON
                </Card.Subtitle>
                {applied ? (
                  <Row>
                    <Col md={8}>
                      <b>
                        <MdOutlineDiscount /> Coupon Applied
                      </b>
                    </Col>
                    <Col md={4}>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          setApplied(false);
                          setCouponDiscount(0);
                        }}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col md={8}>
                      <b>
                        <MdOutlineDiscount /> Apply Coupons
                      </b>
                    </Col>
                    <Col md={4}>
                      <Button variant="outline-danger" onClick={handleApply}>
                        Apply
                      </Button>
                    </Col>
                  </Row>
                )}
                <hr />
                <Modal
                  show={apply}
                  onHide={() => {
                    setApply(false);
                    setInput("");
                    setCheck(false);
                    setChange(false);
                  }}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>APPLY COUPON</Modal.Title>
                    <hr />
                  </Modal.Header>

                  <Modal.Body>
                    {/* <input type='text' placeholder='Enter Coupon Code' style={{width:"100%"}}></input> */}
                    <div className="buttonIn" style={{ display: "flex" }}>
                      <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        style={{ width: "100%" }}
                        value={input}
                        name="in"
                        onChange={(e) => setInput(e.target.value)}
                      ></input>
                      <button
                        id="clear"
                        style={{
                          color: "#ff3f6c",
                          borderRadius: "0%",
                          background: "none",
                          border: "none",
                        }}
                        onClick={() => checkCoupon(input)}
                      >
                        CHECK
                      </button>
                    </div>
                    {avail && (
                      <div>
                        {" "}
                        {check ? (
                          <label>
                            {" "}
                            <input
                              type="checkbox"
                              onChange={() => setChange(!change)}
                            />{" "}
                            {coupon.couponCode}
                            <br />
                            {coupon.discountPercentage}% off{" "}
                            {coupon.couponDetails} <br />
                            Expires on: {coupon.expiryDate}
                          </label>
                        ) : (
                          <div>No Coupons Available</div>
                        )}
                      </div>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      style={{
                        background: "#ff3f6c",
                        borderRadius: "0%",
                        width: "50%",
                      }}
                      disabled={!change}
                      variant="outline-light"
                      onClick={() => {
                        updatePrice(true);
                        setApply(false);
                        setInput("");
                        setCheck(false);
                        setChange(false);
                      }}
                    >
                      APPLY
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Card.Subtitle className="mb-2 ">
                  PRICE DETAILS ({products.length} items)
                </Card.Subtitle>
                <Card.Text>
                  <Row>Total MRP: ₹{mrpPrice} </Row>
                  <Row>Discount on MRP: - ₹{mrpPrice - totalPrice}</Row>
                  <Row>CouponDiscount: - ₹{couponDiscount}</Row>
                  <Row>Platform Fee : ₹{platformFee}</Row>
                  <hr />

                  <Row>
                    <b>Total Amount: ₹{amount}</b>
                  </Row>
                </Card.Text>
                <Button
                  style={{ backgroundColor: "#ff3f6c" }}
                  variant="outline-light"
                  onClick={placeOrder}
                >
                  PLACE ORDER
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Button onClick={() => navigate("/wishlist")} variant='link' style={{border:'1px solid gray',marginLeft:'5%',marginRight:'45%',padding:'1%',textDecoration:'none',color:'black',width:'50%'}}> <b><BsBookmark/> Add Items from wishlist</b></Button>
        </>
      ) : (
        <div>
          {" "}
          <center>
            <Image src={emptyBag} />{" "}
            <div>There is nothing in your bag.Let's add some items </div>
            <br />
            <div>
              <Button
                style={{ borderRadius: "0%" }}
                variant="outline-danger"
                onClick={() => navigate("/wishlist")}
              >
                ADD ITEMS FROM WISHLIST
              </Button>
            </div>
          </center>
        </div>
      )}

    </div>
  );
};

export default Bag;
