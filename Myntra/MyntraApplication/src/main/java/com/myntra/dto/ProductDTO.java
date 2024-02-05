package com.myntra.dto;

import java.util.List;



import lombok.Data;
@Data
public class ProductDTO {
	private Integer pId;
	
	private String brandName;
	private String productName;
	private String productDescription;
	private String rating;
	private double price;
	private String actualPrice;
	private Double mrp;
	private String offer;
	private String size;
	private String url;
	private CategoryDTO categoryDto;
	private List<WishlistItemDTO> wishlistItemsDto;
	public Integer getpId() {
		return pId;
	}
	public void setpId(Integer pId) {
		this.pId = pId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(String actualPrice) {
		this.actualPrice = actualPrice;
	}
	public String getOffer() {
		return offer;
	}
	public void setOffer(String offer) {
		this.offer = offer;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public CategoryDTO getCategoryDto() {
		return categoryDto;
	}
	public void setCategoryDto(CategoryDTO categoryDto) {
		this.categoryDto = categoryDto;
	}
	public String getBrandName() {
		return brandName;
	}
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	public List<WishlistItemDTO> getWishlistItemsDto() {
		return wishlistItemsDto;
	}
	public void setWishlistItemsDto(List<WishlistItemDTO> wishlistItemsDto) {
		this.wishlistItemsDto = wishlistItemsDto;
	}
	public Double getMrp() {
		return mrp;
	}
	public void setMrp(Double mrp) {
		this.mrp = mrp;
	}
	
	
//	

}
