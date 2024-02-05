import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import Header from "./Header";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
const Profile = () => {
  // const name=localStorage.getItem('name')
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    mobileNumber: "",
  });
  useEffect(() => {
    getUserData();
  }, [id, info.name, info.mobileNumber]);
  const getUserData = () => {
    axios
      .get(`http://localhost:8080/registration/getUser/${id}`)
      .then((res) => {
        setInfo({ name: res.data.name, mobileNumber: res.data.mobileNumber });
      });
  };
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="flex flex-column card profile ">
      <h6>
        {" "}
        Hello <br />
        {info.name}
      </h6>
      {info.mobileNumber}
      <hr />
      <Link to={"/orders"} className="lst">
        Orders
      </Link>
      <Link to={"/wishlist"} className="lst">
        Wishlist
      </Link>
      <Link to={"/giftcards"} className="lst">
        Gift Cards
      </Link>
      <Link to={"/contactus"} className="lst">
        Contact Us
      </Link>
      <Link to={"/insider"} className="lst">
        Myntra Insider
      </Link>
      <hr />

      <Link to={"/myntracredit"} className="lst">
        Myntra credit
      </Link>
      <Link to={"/coupon"} className="lst">
        Coupons
      </Link>
      <Link to={"/savedcards"} className="lst">
        Saved Cards
      </Link>
      <Link to={"/savedvpa"} className="lst">
        Saved VPA
      </Link>
      <Link to={"/addresses"} className="lst">
        Saved Addresses
      </Link>

      <hr />
      <Link to={"/edit"} className="lst">
        Edit Profile
      </Link>
      <Link onClick={handleLogout} to={"/"} className="lst">
        Logout
      </Link>
    </div>
  );
};

export default Profile;
