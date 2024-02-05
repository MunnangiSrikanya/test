package com.myntra.services;

import java.util.List;

import com.myntra.dto.CategoryDTO;
import com.myntra.dto.ProductDTO;

public interface CategoryService {
	
	public CategoryDTO saveCategory(CategoryDTO categoryDto);
	public List<CategoryDTO> getAllCategorues();
	public List<ProductDTO> findProductByCategory(String categoryName);
	public List<ProductDTO> findProductByName(String name);
	public List<ProductDTO> findProductByNameContains(String name);
	public List<ProductDTO> findAll();
	public List<ProductDTO> findProductById(Integer id);
	

	
	public List<ProductDTO> sortByLowToHighAsc(Integer c_id);
	public List<ProductDTO> sortbyHighToLowDesc(Integer c_id);
	public List<ProductDTO> sortByRatingDesc(Integer c_id);
	public List<ProductDTO> sortbyOfferDesc(Integer c_id);
	
	public List<ProductDTO> filters(String productName,String category,String color,String brand,String discount,String sortBy);
}
