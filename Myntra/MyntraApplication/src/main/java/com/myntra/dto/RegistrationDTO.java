package com.myntra.dto;



import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.Data;

public class RegistrationDTO {
	private Integer id;
	private String name;
	private String mobileNumber;
	private String email;
	private String password;
	private Date dob;
	private String alterMobile;
	private String hintName;

	@JsonIgnore
	private WishlistDTO wishlistDto;
	
	@JsonIgnore
	private ShoppingBagDTO bagDTO;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public WishlistDTO getWishlistDto() {
		return wishlistDto;
	}
	public void setWishlistDto(WishlistDTO wishlistDto) {
		this.wishlistDto = wishlistDto;
	}

	public ShoppingBagDTO getBagDTO() {
		return bagDTO;
	}
	public void setBagDTO(ShoppingBagDTO bagDTO) {
		this.bagDTO = bagDTO;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getAlterMobile() {
		return alterMobile;
	}
	public void setAlterMobile(String alterMobile) {
		this.alterMobile = alterMobile;
	}
	public String getHintName() {
		return hintName;
	}
	public void setHintName(String hintName) {
		this.hintName = hintName;
	}

}
