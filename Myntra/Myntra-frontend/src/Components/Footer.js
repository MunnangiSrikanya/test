import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import or from "../Images/or.png";
import days from "../Images/days.png";
import { Instagram } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <div className="bg-body-tertiary" style={{ padding: "2%" }}>
      <div className="">
        <Row>
          <Col>
            <Row>
              <span>
                <b>ONLINE SHOPPING</b>
              </span>
              <div className="link">
                <div>
                  <Link to="/men" className="categories">
                    <span>Men</span>
                  </Link>
                </div>
                <div>
                  <Link to="/women" className="categories">
                    <span>Women</span>
                  </Link>
                </div>
                <div>
                  <Link to="/kidswear" className="categories">
                    <span>Kids</span>
                  </Link>
                </div>
                <div>
                  <Link to="/homedecor" className="categories">
                    <span>Home & Living</span>
                  </Link>
                </div>
                <div>
                  <Link to="/beautymake" className="categories">
                    <span>Beauty</span>
                  </Link>
                </div>
              </div>
            </Row>
            <br />
            <Row>
              <span>
                <b>USEFUL LINKS</b>
              </span>
              <div className="link">
                <div>
                  <Link className="categories">
                    <span>Blog</span>
                  </Link>
                </div>
                <div>
                  <Link className="categories">
                    <span>Careers</span>
                  </Link>
                </div>
                <div>
                  <Link className="categories">
                    <span>Site Map</span>
                  </Link>
                </div>
                <div>
                  <Link className="categories">
                    <span>Corporate Information</span>
                  </Link>
                </div>
                <div>
                  <Link className="categories">
                    <span>Whitehat</span>
                  </Link>
                </div>
                <div>
                  <Link className="categories">
                    <span>Cleartrip</span>
                  </Link>
                </div>
              </div>
            </Row>
          </Col>
          <Col>
            <span>
              <b>CUSTOMER POLICIES</b>
            </span>
            <div className="link">
              <div>
                <Link className="categories">
                  <span>Contact Us</span>
                </Link>
              </div>
              <div>
                <Link className="categories">
                  <span>FAQ</span>
                </Link>
              </div>
              <div>
                <Link className="categories">
                  <span>T&C</span>
                </Link>
              </div>
              <div>
                <Link className="categories">
                  <span>Terms Of Use</span>
                </Link>
              </div>
              <div>
                <Link className="categories">
                  <span>Track Orders</span>
                </Link>
              </div>
              <div>
                <Link className="categories">
                  <span>Shipping</span>
                </Link>
              </div>
              <div>
                <Link className="categories">
                  <span>Cancellation</span>
                </Link>
              </div>
              <div>
                <Link className="categories">
                  <span>Returns</span>
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <span>
              <b>EXPERIENCE MYNTRA APP ON MOBILE</b>
            </span>
            <Row>
              <Col>
                <Button
                  variant="dark"
                  onClick={() => {
                    window.location.href =
                      "https://play.google.com/store/apps/details?id=com.myntra.android";
                  }}
                >
                  <IoLogoGooglePlaystore size={20} />
                  <span style={{ fontSize: "10px" }}>GET IT ON</span> GOOGLE
                  PLAY
                </Button>
              </Col>
              <Col>
                <Button
                  variant="dark"
                  onClick={() => {
                    window.location.href =
                      "https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059";
                  }}
                >
                  <FaApple size={20} />
                  <sapn style={{ fontSize: "8px" }}>DOWNLOAD ON THE</sapn> APP
                  STORE
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <div>
                <b>KEEP IN TOUCH</b>
              </div>
              <div>
                <FaSquareFacebook
                  onClick={() =>
                    (window.location.href = "https://www.facebook.com/myntra")
                  }
                  style={{ fontSize: "150%" }}
                />
                <FaTwitter
                  onClick={() =>
                    (window.location.href = "https://twitter.com/myntra")
                  }
                  style={{ fontSize: "150%" }}
                />
                <FaYoutube
                  onClick={() =>
                    (window.location.href =
                      "https://www.youtube.com/user/myntradotcom")
                  }
                  style={{ fontSize: "150%" }}
                />
                <TiSocialInstagram
                  onClick={() =>
                    (window.location.href = "https://www.instagram.com/myntra/")
                  }
                  style={{ fontSize: "150%" }}
                />
              </div>
            </Row>
          </Col>
          <Col>
            <img src={or} width={"60px"} />
            <b>100% ORIGINAL</b> guarantee for all products at myntra.com
            <br />
            <br />
            <img src={days} width={"60px"} />
            <b>Return within 14days</b> of receiving your order
          </Col>
        </Row>
      </div>
      {/* <p><b>POPULAR SEARCHES</b></p> */}
      {/* <p>Kurta Pajama | Leather Jackets | Sherwani | Shirts | T-Shirts | Waistcoat | Photo Frames | Denim shirts | Blazers | Mirror | Bags | Jackets|  Blouse Designs | Crop Tops |  Mysore Silk Saree | Kids Lehenga | Suit Design | Lehenga | Girls Dungarees | Top for Girl | Lingerie | Gowns | Saree | Kids Ethnic Wear | Sweaters | Boys Games | Barbie Doll | Shoes For Men | Cricket Shoes | Lipstick | Make Up Kit | Fastrack Watches | Casual Shoes | Online Shopping | Dresses | Babydolls | Eye Makeup | Car Games | Nike Shoes | Puma | United Colors of Benetton | Fastrack  Watches | Backpacks | Men Kurtas | Titan Watches</p> */}
      <div className="contact">
        <Row>
          <Col>
            In case of any concern, <Link className="con">Contact Us</Link>
          </Col>
          <Col>© 2023 www.myntra.com. All rights reserved.</Col>
          <Col>A FlipKart Company</Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
