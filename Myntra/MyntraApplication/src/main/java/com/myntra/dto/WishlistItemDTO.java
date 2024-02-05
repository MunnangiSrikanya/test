package com.myntra.dto;

import lombok.Data;

@Data
public class WishlistItemDTO {
	private Integer wishlistItemId;
	private WishlistDTO wishlist;
	private ProductDTO product;
	public Integer getWishlistItemId() {
		return wishlistItemId;
	}
	public void setWishlistItemId(Integer wishlistItemId) {
		this.wishlistItemId = wishlistItemId;
	}
	public WishlistDTO getWishlist() {
		return wishlist;
	}
	public void setWishlist(WishlistDTO wishlist) {
		this.wishlist = wishlist;
	}
	public ProductDTO getProduct() {
		return product;
	}
	public void setProduct(ProductDTO product) {
		this.product = product;
	}
	

}
