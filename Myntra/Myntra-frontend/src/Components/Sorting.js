import React, { useContext, useState } from "react";
import MyContext from "./Categories/MyContext";
import axios from "axios";

const Sorting = ({ setSelected, selected }) => {
  const { setProduct, input } = useContext(MyContext);

  // const handleChange=(selected)=>{
  //     // setSelected(e.target.value)
  //     console.log(selected)
  //     if(selected==="recommended"){
  //       axios.get(`http://localhost:8080/products/productsByNameContains/${input}`)
  //       .then(res=>{
  //         if(res.status===200){
  //           setProduct(res.data)
  //         }
  //       })
  //       .catch(err=>{

  //       })

  //     }else if(selected==="lowToHigh"){
  //       axios.get(`http://localhost:8080/products/lowToHigh/${input}`)
  //       .then(res=>{
  //         if(res.status===200){
  //           setProduct(res.data)
  //         }
  //       })
  //       .catch(err=>{

  //       })
  //     }else if(selected==="HighToLow"){
  //       axios.get(`http://localhost:8080/products/HighToLow/${input}`)
  //       .then(res=>{
  //         if(res.status===200){
  //           setProduct(res.data)
  //         }
  //       })
  //       .catch(err=>{

  //       })
  //     }
  //     else if(selected==="rating"){
  //       axios.get(`http://localhost:8080/products/rating/${input}`)
  //       .then(res=>{
  //         if(res.status===200){
  //           setProduct(res.data)
  //         }
  //       })
  //       .catch(err=>{

  //       })
  //     }else if(selected==="offer"){
  //       axios.get(`http://localhost:8080/products/offer/${input}`)
  //       .then(res=>{
  //         if(res.status===200){
  //           setProduct(res.data)
  //         }
  //       })
  //       .catch(err=>{

  //       })
  //     }

  //   }
  return (
    <div>
      <div className="mt-3 mb-3">
        Sort By:{" "}
        <select onChange={(e) => setSelected(e.target.value)}>
          <option value="recommended">Recommended</option>
          <option value="priceLowToHigh">Price : Low to High</option>
          <option value="priceHighToLow">Price : High To Low</option>
          <option value="rating">Customer Rating</option>
          <option value="discount">Better Discount</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
