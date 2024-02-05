import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GiPlainCircle } from "react-icons/gi";
import MyContext from "./Categories/MyContext";
import { Button, Form } from "react-bootstrap";

const Filters = ({
  selected,
  setSelected,
  selectedGender,
  setSelectedGender,
  selectedColor,
  setSelectedColor,
  selectedBrand,
  setSelectedBrand,
  selectedDiscount,
  setSelectedDiscount,
}) => {
  const [data, setData] = useState([]);
  const [showAllBrands, setShowAllBrands] = useState(false);
  // const [selectedGender, setSelectedGender] = useState(null);
  // const [selectedBrand, setSelectedBrand] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(null);
  // const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [initialRender, setInitialRender] = useState(true);
  const getBrandNames = () => {
    axios.get(`http://localhost:8080/products/getAll`).then((res) => {
      if (res.status === 200) {
        setData(res.data);
        setShowAllBrands(false);
      }
    });
  };
  useEffect(() => {
    getBrandNames();
  }, []);
  const { setProduct, input } = useContext(MyContext);

  const handleFilter = () => {
    console.log("handleFilter called");
    axios
      .get("http://localhost:8080/products/filter", {
        params: {
          product_name: input,
          cat: selectedGender,
          brand: selectedBrand,
          color: selectedColor,
          discount: selectedDiscount,
          sortBy: selected,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    if (!initialRender) {
      handleFilter();
    } else {
      setInitialRender(false);
    }
  }, [
    selectedGender,
    selectedBrand,
    selectedColor,
    selectedDiscount,
    selected,
  ]);
  const uniqueBrandNames = [...new Set(data.map((item) => item.brandName))];
  const displayBrandNames = showAllBrands
    ? uniqueBrandNames
    : uniqueBrandNames.slice(0, 5);
  const handleClearAll = () => {
    setSelectedColor(null);
    setSelectedDiscount(null);
    setSelectedGender(null);
    setSelectedBrand(null);
    setSelected("recommended");
  };
  useEffect(() => {
    handleClearAll();
  }, [input]);
  return (
    <div>
      <div className="d-flex flex-row gap-3 mb-2">
        <div style={{ marginLeft: "8%" }}>
          <b>FILTERS</b>
        </div>
        <div>
          <Button
            variant="link"
            style={{ color: "#ff3f6c", textDecoration: "none" }}
            onClick={handleClearAll}
          >
            CLEAR ALL
          </Button>
        </div>
      </div>
      {/* <Button onClick={handleFilter}>Apply Filter</Button> */}
      <div style={{ border: "0.1px solid gray", padding: "1% 0% 5% 8%" }}>
        <div className="mt-2 d-flex flex-column gap-2">
          <Form.Check
            type="radio"
            aria-label="radio 1"
            label="Men"
            name="category"
            value="men"
            onChange={(e) => {
              setSelectedGender(e.target.value);
            }}
            checked={selectedGender === "men"}
          />
          {/* <input type='radio' name='category' value='men' onChange={(e)=>{setSelectedGender(e.target.value)}} />  */}

          <Form.Check
            type="radio"
            name="category"
            label="Women"
            value="women"
            onChange={(e) => {
              setSelectedGender(e.target.value);
            }}
            checked={selectedGender === "women"}
          />
          <Form.Check
            type="radio"
            name="category"
            label="Boys"
            value="boys"
            onChange={(e) => {
              setSelectedGender(e.target.value);
            }}
            checked={selectedGender === "boys"}
          />
          <Form.Check
            type="radio"
            name="category"
            label="Girls"
            value="girls"
            onChange={(e) => {
              setSelectedGender(e.target.value);
            }}
            checked={selectedGender === "girls"}
          />
        </div>
        <hr />
        <div className="mt-2">
          <h6>
            <b>BRAND</b>
          </h6>
          <div className="d-flex flex-column gap-2">
            {displayBrandNames.map((item, index) => {
              return (
                <>
                  <Form.Check
                    type="radio"
                    name="brand"
                    value={item}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                    }}
                    label={item}
                    checked={selectedBrand === item}
                  />{" "}
                </>
              );
            })}
            <Button
              variant="link"
              style={{ color: "#ff3f6c", textDecoration: "none" }}
              onClick={() => setShowAllBrands(!showAllBrands)}
            >
              {showAllBrands ? "SHOW LESS" : "SHOW MORE"}
            </Button>
            {/* <Form.Check
              type="radio"
              value="Libas"
              name="brand"
              onChange={(e) => {
                setSelectedBrand(e.target.value);
              }}
              label='Libas'
              checked={selectedBrand==='Libas'}
            />{" "}
            <Form.Check
              type="radio"
              value="Varanga"
              name="brand"
              onChange={(e) => {
                setSelectedBrand(e.target.value);
              }}
              label='Varanga'
              checked={selectedBrand==='Varanga'}
            />{" "}
             <Form.Check
              type="radio"
              value="Kalini"
              name="brand"
              onChange={(e) => {
                setSelectedBrand(e.target.value);
              }}
              label='Kalini'
              checked={selectedBrand==='Kalini'}
            />{" "} */}
          </div>
          <hr />
        </div>
        <div className="mt-2">
          <h6>
            <b>COLOR</b>
          </h6>
          <div className="d-flex flex-column gap-2">
            <Form.Check
              type="radio"
              name="color"
              value="blue"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "blue"}
              label={
                <>
                  <GiPlainCircle color="blue" /> Blue
                </>
              }
            />
            <Form.Check
              type="radio"
              name="color"
              value="green"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "green"}
              label={
                <>
                  <GiPlainCircle color="green" /> Green
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="white"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "white"}
              label={
                <>
                  <GiPlainCircle color="white" /> White
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="black"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "black"}
              label={
                <>
                  <GiPlainCircle color="black" /> Black
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="yellow"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "yellow"}
              label={
                <>
                  <GiPlainCircle color="yellow" /> Yellow
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="orange"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "orange"}
              label={
                <>
                  <GiPlainCircle color="orange" /> Orange
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="pink"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "pink"}
              label={
                <>
                  <GiPlainCircle color="pink" /> Pink
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="red"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "red"}
              label={
                <>
                  <GiPlainCircle color="red" /> Red
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="beige"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "beige"}
              label={
                <>
                  <GiPlainCircle color="beige" /> Beige
                </>
              }
            />{" "}
            <Form.Check
              type="radio"
              name="color"
              value="brown"
              onChange={(e) => {
                setSelectedColor(e.target.value);
              }}
              checked={selectedColor === "brown"}
              label={
                <>
                  <GiPlainCircle color="brown" /> Brown
                </>
              }
            />{" "}
          </div>
        </div>
        <hr />
        <div className="mt-3">
          <h6>
            <b>DISCOUNT RANGE</b>
          </h6>
          <div className="d-flex flex-column gap-2">
            <Form.Check
              type="radio"
              value="10"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="10% and above"
              checked={selectedDiscount === "10"}
            />{" "}
            <Form.Check
              type="radio"
              value="20"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="20% and above"
              checked={selectedDiscount === "20"}
            />{" "}
            <Form.Check
              type="radio"
              value="30"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="30% and above"
              checked={selectedDiscount === "30"}
            />{" "}
            <Form.Check
              type="radio"
              value="40"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="40% and above"
              checked={selectedDiscount === "40"}
            />{" "}
            <Form.Check
              type="radio"
              value="50"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="50% and above"
              checked={selectedDiscount === "50"}
            />{" "}
            <Form.Check
              type="radio"
              value="60"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="60% and above"
              checked={selectedDiscount === "60"}
            />{" "}
            <Form.Check
              type="radio"
              value="70"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="70% and above"
              checked={selectedDiscount === "70"}
            />{" "}
            <Form.Check
              type="radio"
              value="80"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="80% and above"
              checked={selectedDiscount === "80"}
            />{" "}
            <Form.Check
              type="radio"
              value="90"
              name="discount"
              onChange={(e) => {
                setSelectedDiscount(e.target.value);
              }}
              label="90% and above"
              checked={selectedDiscount === "90"}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
