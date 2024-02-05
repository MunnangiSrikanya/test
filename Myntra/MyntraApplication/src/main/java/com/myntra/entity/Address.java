package com.myntra.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Address {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer address_id;
	private String name;
	private String mobileNo;
	private String pincode;
	private String addressDeatails;
	private String town;
	private String district;
	private String state;
	@ManyToOne()
	@JoinColumn(name="user_id")
	private RegisterUser user;
	
	public Integer getAddress_id() {
		return address_id;
	}
	public void setAddress_id(Integer address_id) {
		this.address_id = address_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getAddressDeatails() {
		return addressDeatails;
	}
	public void setAddressDeatails(String addressDeatails) {
		this.addressDeatails = addressDeatails;
	}
	public String getTown() {
		return town;
	}
	public void setTown(String town) {
		this.town = town;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public RegisterUser getUser() {
		return user;
	}
	public void setUser(RegisterUser user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Address [address_id=" + address_id + ", name=" + name + ", mobileNo=" + mobileNo + ", pincode="
				+ pincode + ", addressDeatails=" + addressDeatails + ", town=" + town + ", district=" + district
				+ ", state=" + state + ", user=" + user + "]";
	}
	
	
	

}
