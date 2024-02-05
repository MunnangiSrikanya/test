package com.myntra.dto;

import java.util.List;

public class OrderDTO {
	private Integer order_id;
	private RegistrationDTO user;
	private List<BagItemDTO> bagItems;
	private AddressDTO address;
	private double price;
	public Integer getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Integer order_id) {
		this.order_id = order_id;
	}
	public RegistrationDTO getUser() {
		return user;
	}
	public void setUser(RegistrationDTO user) {
		this.user = user;
	}
	public List<BagItemDTO> getBagItems() {
		return bagItems;
	}
	public void setBagItems(List<BagItemDTO> bagItems) {
		this.bagItems = bagItems;
	}
	public AddressDTO getAddress() {
		return address;
	}
	public void setAddress(AddressDTO address) {
		this.address = address;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	

}
