package com.myntra.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;
@Data
@Entity
public class Wishlist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer wishlistId;
	@ManyToOne
	@JoinColumn(name="id")
	private RegisterUser user;
	@ManyToOne
	@JoinColumn(name="pId")
	private Product product;


	public Integer getWishlistId() {
		return wishlistId;
	}

	public void setWishlistId(Integer wishlistId) {
		this.wishlistId = wishlistId;
	}

	public RegisterUser getUser() {
		return user;
	}

	public void setUser(RegisterUser user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	
	
	

}
