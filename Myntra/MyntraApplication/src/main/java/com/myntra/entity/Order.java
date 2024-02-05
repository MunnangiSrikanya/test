package com.myntra.entity;

import java.util.ArrayList;
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
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer order_id;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private RegisterUser user;
	
	@ManyToOne
	@JoinColumn(name="address_id")
	private Address address;
	
	@JsonIgnore
	@OneToMany(mappedBy="order",cascade=CascadeType.ALL)
	private List<OrderItems> orderitems =new ArrayList<>();
	
	private double price;
	
	public Integer getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Integer order_id) {
		this.order_id = order_id;
	}
	public RegisterUser getUser() {
		return user;
	}
	public void setUser(RegisterUser user) {
		this.user = user;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public List<OrderItems> getOrderitems() {
		return orderitems;
	}
	public void setOrderitems(List<OrderItems> orderitems) {
		this.orderitems = orderitems;
	}
	
	
}
