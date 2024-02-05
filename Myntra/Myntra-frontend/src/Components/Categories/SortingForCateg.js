import axios from "axios";
import React from "react";

const SortingForCateg = ({ setProduct, c_id }) => {
  // const c_id=1

  const handleChange = (selected) => {
    // setSelected(e.target.value)
    console.log(selected);
    if (selected === "recommended") {
      axios
        .get(`http://localhost:8080/products/productsByCategoryId/${c_id}`)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data);
          }
        })
        .catch((err) => {});
    } else if (selected === "lowToHigh") {
      axios
        .get(`http://localhost:8080/products/lowToHighAsc/${c_id}`)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data);
          }
        })
        .catch((err) => {});
    } else if (selected === "HighToLow") {
      axios
        .get(`http://localhost:8080/products/HighToLowDesc/${c_id}`)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data);
          }
        })
        .catch((err) => {});
    } else if (selected === "rating") {
      axios
        .get(`http://localhost:8080/products/ratingDesc/${c_id}`)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data);
          }
        })
        .catch((err) => {});
    } else if (selected === "offer") {
      axios
        .get(`http://localhost:8080/products/offerDesc/${c_id}`)
        .then((res) => {
          if (res.status === 200) {
            setProduct(res.data);
          }
        })
        .catch((err) => {});
    }
  };
  return (
    <div>
      <div className="mt-3 mb-3">
        Sort By:{" "}
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="recommended">Recommended</option>
          <option value="lowToHigh">Price : Low to High</option>
          <option value="HighToLow">Price : High To Low</option>
          <option value="rating">Customer Rating</option>
          <option value="offer">Better Discount</option>
        </select>
      </div>
    </div>
  );
};

export default SortingForCateg;
