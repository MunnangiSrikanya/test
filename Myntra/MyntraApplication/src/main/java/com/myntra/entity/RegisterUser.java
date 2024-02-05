package com.myntra.entity;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name = "register")
public class RegisterUser {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String mobileNumber;
	private String email;
	private String password;
	private Date dob;
	private String alterMobile;
	private String hintName;
	@JsonIgnore
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
	private Wishlist wishlist;
	@JsonIgnore
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
	private ShoppingBag bag;
	
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
	public Wishlist getWishlist() {
		return wishlist;
	}
	public void setWishlist(Wishlist wishlist) {
		this.wishlist = wishlist;
	}
	public ShoppingBag getBag() {
		return bag;
	}
	public void setBag(ShoppingBag bag) {
		this.bag = bag;
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
