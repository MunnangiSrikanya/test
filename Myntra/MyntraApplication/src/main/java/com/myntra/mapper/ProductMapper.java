package com.myntra.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.myntra.dto.ProductDTO;
import com.myntra.entity.Product;

@Component
public class ProductMapper {
	@Autowired
	private CategoryMapper mapper;
	public ProductDTO toProductDto(Product product) {
		ProductDTO dto=new ProductDTO();
		dto.setpId(product.getpId());
		dto.setProductName(product.getProductName());
		dto.setProductDescription(product.getProductDescription());
		dto.setRating(product.getRating());
		dto.setPrice(product.getPrice());
		dto.setMrp(product.getMrp());
		dto.setOffer(product.getOffer());
		dto.setSize(product.getSize());
		dto.setActualPrice(product.getActualPrice());
		dto.setUrl(product.getUrl());
		dto.setBrandName(product.getBrandName());
		dto.setCategoryDto(mapper.toCatgeoryDto(product.getCategory()));
		return dto;
		
	}
	
	public Product toProduct(ProductDTO dto) {
		Product product=new Product();
		product.setpId(dto.getpId());
		product.setProductName(dto.getProductName());
		product.setProductDescription(dto.getProductDescription());
		product.setRating(dto.getRating());
		product.setPrice(dto.getPrice());
		product.setMrp(dto.getMrp());
		product.setActualPrice(dto.getActualPrice());
		product.setOffer(dto.getOffer());
		product.setSize(dto.getSize());
		product.setUrl(dto.getUrl());
		product.setBrandName(dto.getBrandName());
		product.setCategory(mapper.toCatgeory(dto.getCategoryDto()));
		return product;
	}

}
