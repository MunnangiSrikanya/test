import React from "react";
import "./body.css";
import { Carousel, CarouselItem, Card, Button } from "react-bootstrap";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png";
import img7 from "../Images/img7.png";
import ethnic from "../Images/ethnic.jpg";
import wfh from "../Images/wfh.jpg";
import active from "../Images/active.webp";
import activemen from "../Images/menactive.webp";
import western from "../Images/western.jpg";
import sports from "../Images/sports.jpg";
import lounge from "../Images/lounge.jpg";
import bags from "../Images/bags.webp";
import home from "../Images/home.jpg";
import foot from "../Images/foot.jpg";
import kids from "../Images/kids.jpg";
import beauty from "../Images/beauty.jpg";
import grooming from "../Images/grroming.jpg";
import watches from "../Images/watches.jpg";
import jewellery from "../Images/jewellery.jpg";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Carousel controls indicators>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={img1}
              alt="slide 1"
              onClick={() => navigate("/casual")}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={img2}
              alt="slide 2"
              onClick={() => navigate("/western")}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={img3}
              alt="slide 3"
              onClick={() => navigate("/lounge")}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={img4}
              alt="slide 4"
              onClick={() => navigate("/bags")}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={img5}
              alt="slide 5"
              onClick={() => navigate("/casual")}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={img6}
              alt="slide 6"
              onClick={() => navigate("/menActive")}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="d-block w-100"
              src={img7}
              alt="slide 7"
              onClick={() => navigate("/bags")}
            />
          </CarouselItem>
        </Carousel>
      </div>
      <div>
        <h1 className="cat mt-2">CATEGORY SPECIAL</h1>
        <div className="d-flex mb-2">
          <Card
            style={{ width: "15rem" }}
            className="crd "
            onClick={() => navigate("/ethnic")}
          >
            <Card.Img
              variant="top"
              src={ethnic}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Ethnic Wear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>50-80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/casual")}
          >
            <Card.Img variant="top" src={wfh} width="225px" height={"225px"} />
            <Card.Body>
              <Card.Title>WFH Casual Wear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>40-80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/womenActive")}
          >
            <Card.Img
              variant="top"
              src={active}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Women's Activewear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>30-70% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/menActive")}
          >
            <Card.Img
              variant="top"
              src={activemen}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Men's Activewear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>30-70% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/western")}
          >
            <Card.Img
              variant="top"
              src={western}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Western Wear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>40-80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex mt-2 mb-2">
          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/sports")}
          >
            <Card.Img
              variant="top"
              src={sports}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Sports Wear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>30-80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/lounge")}
          >
            <Card.Img
              variant="top"
              src={lounge}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Lounge Wear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>30-60% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/watches")}
          >
            <Card.Img
              variant="top"
              src={watches}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Watches</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>UP TO 80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/grooming")}
          >
            <Card.Img
              variant="top"
              src={grooming}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>GROOMING</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>UP TO 60% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/beautymake")}
          >
            <Card.Img
              variant="top"
              src={beauty}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Beauty & Make up</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>UP TO 60% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex mt-2 mb-2">
          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/kidswear")}
          >
            <Card.Img variant="top" src={kids} width="225px" height={"225px"} />
            <Card.Body>
              <Card.Title>Kids wear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>50-70% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/foot")}
          >
            <Card.Img variant="top" src={foot} width="225px" height={"225px"} />
            <Card.Body>
              <Card.Title>Footwear</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>40-80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/homedecor")}
          >
            <Card.Img variant="top" src={home} width="225px" height={"225px"} />
            <Card.Body>
              <Card.Title>Home Decor</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>40-70% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/bags")}
          >
            <Card.Img variant="top" src={bags} width="225px" height={"225px"} />
            <Card.Body>
              <Card.Title>Bags & Backpacks</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>30-80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "15rem" }}
            className="crd"
            onClick={() => navigate("/jewellery")}
          >
            <Card.Img
              variant="top"
              src={jewellery}
              width="225px"
              height={"225px"}
            />
            <Card.Body>
              <Card.Title>Jewellery</Card.Title>
              <Card.Text>
                <p>
                  {" "}
                  <b>UP TO 80% OFF</b>
                </p>
                Shop Now
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Body;
  
