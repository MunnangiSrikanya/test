package com.myntra.mapper;

import org.springframework.stereotype.Component;

import com.myntra.dto.CategoryDTO;
import com.myntra.entity.Category;

@Component
public class CategoryMapper {
	ProductMapper mapper=new ProductMapper();
	public CategoryDTO toCatgeoryDto(Category category) {
		CategoryDTO dto=new CategoryDTO();
		dto.setcId(category.getcId());
		dto.setCategoryName(category.getCategoryName());
		return dto;
	}
	public Category toCatgeory(CategoryDTO dto) {
		Category category=new Category();
		category.setcId(dto.getcId());
		category.setCategoryName(dto.getCategoryName());
		return category;
	}

}
