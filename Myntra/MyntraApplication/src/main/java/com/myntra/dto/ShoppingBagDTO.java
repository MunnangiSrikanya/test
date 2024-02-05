package com.myntra.dto;

import java.util.List;

public class ShoppingBagDTO {
	private Integer bag_id;
	private Double bag_price;
	private RegistrationDTO userDto;
	private List<BagItemDTO> itemsDto;
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
	public RegistrationDTO getUserDto() {
		return userDto;
	}
	public void setUserDto(RegistrationDTO userDto) {
		this.userDto = userDto;
	}
	public List<BagItemDTO> getItemsDto() {
		return itemsDto;
	}
	public void setItemsDto(List<BagItemDTO> itemsDto) {
		this.itemsDto = itemsDto;
	}
	

}
