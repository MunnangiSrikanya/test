package com.myntra.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class ShoppingBag {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bag_id;
	
	private Double bag_price;
	@OneToOne
	@JoinColumn(name="user_id")
	private RegisterUser user;
	@JsonIgnore
	@OneToMany(mappedBy = "bag",cascade=CascadeType.ALL)
	private List<BagItem> items;

	public Integer getBag_id() {
		return bag_id;
	}

	public void setBag_id(Integer bag_id) {
		this.bag_id = bag_id;
	}

	public Double getBag_price() {
		return bag_price;
	}

	public void setBag_price(Double bag_price) {
		this.bag_price = bag_price;
	}

	public RegisterUser getUser() {
		return user;
	}

	public void setUser(RegisterUser user) {
		this.user = user;
	}

	public List<BagItem> getItems() {
		return items;
	}

	public void setItems(List<BagItem> items) {
		this.items = items;
	}
	
	
}
