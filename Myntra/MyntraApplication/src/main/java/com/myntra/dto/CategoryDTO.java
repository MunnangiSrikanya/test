package com.myntra.dto;

import java.util.List;

public class CategoryDTO {
	private Integer cId;
	private String categoryName;
	
	private List<ProductDTO> productDTO;
	
	
	public Integer getcId() {
		return cId;
	}
	public void setcId(Integer cId) {
		this.cId = cId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public List<ProductDTO> getProductDTO() {
		return productDTO;
	}
	public void setProductDTO(List<ProductDTO> productDTO) {
		this.productDTO = productDTO;
	}
	@Override
	public String toString() {
		return "CategoryDTO [cId=" + cId + ", categoryName=" + categoryName + ", productDTO=" + productDTO
				+ ", getcId()=" + getcId() + ", getCategoryName()=" + getCategoryName() + ", getProductDTO()="
				+ getProductDTO() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
}
