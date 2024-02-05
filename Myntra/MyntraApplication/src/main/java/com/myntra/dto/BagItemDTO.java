package com.myntra.dto;


public class BagItemDTO {
	private Integer bagItem_id;
	private Integer quantity;
	private ShoppingBagDTO bagDto;
	
	private ProductDTO productDto;

	public Integer getBagItem_id() {
		return bagItem_id;
	}

	public void setBagItem_id(Integer bagItem_id) {
		this.bagItem_id = bagItem_id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public ShoppingBagDTO getBagDto() {
		return bagDto;
	}

	public void setBagDto(ShoppingBagDTO bagDto) {
		this.bagDto = bagDto;
	}

	public ProductDTO getProductDto() {
		return productDto;
	}

	public void setProductDto(ProductDTO productDto) {
		this.productDto = productDto;
	}

	
}
