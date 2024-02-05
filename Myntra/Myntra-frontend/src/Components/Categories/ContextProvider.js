import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const ContextProvider = (props) => {
  const id = localStorage.getItem("id");
  const [product, setProduct] = useState([]);
  const [input, setInput] = useState("");
  const [data, setData] = useState(false);
  const [list, setList] = useState([]);
  const [pro, setPro] = useState("");
  const [bagId, setBagId] = useState(0);
  const getBagId = () => {
    if (id !== null) {
      axios.get(`http://localhost:8080/bag/getByUserId/${id}`).then((res) => {
        setBagId(res.data);
      });
    }
  };
  useEffect(() => {
    getBagId();
  }, [id]);
  return (
    <div>
      <MyContext.Provider
        value={{
          product: product,
          setProduct: setProduct,
          input: input,
          setInput: setInput,
          data: data,
          setData: setData,
          list: list,
          setList: setList,
          pro: pro,
          setPro: setPro,
          bagId: bagId,
          setBagId: setBagId,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </div>
  );
};

export default ContextProvider;
