package com.myntra.dto;

import java.util.List;

import lombok.Data;

@Data
public class WishlistDTO {
	private Integer wishlistId;
	private RegistrationDTO userDto;
	private List<WishlistItemDTO> wishListItemsDto;
	public Integer getWishlistId() {
		return wishlistId;
	}
	public void setWishlistId(Integer wishlistId) {
		this.wishlistId = wishlistId;
	}
	public RegistrationDTO getUserDto() {
		return userDto;
	}
	public void setUserDto(RegistrationDTO userDto) {
		this.userDto = userDto;
	}
	public List<WishlistItemDTO> getWishListItemsDto() {
		return wishListItemsDto;
	}
	public void setWishListItemsDto(List<WishlistItemDTO> wishListItemsDto) {
		this.wishListItemsDto = wishListItemsDto;
	}
	

}
