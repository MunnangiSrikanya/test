package com.myntra.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myntra.dto.*;
import com.myntra.entity.*;
import com.myntra.services.*;
import com.myntra.mapper.*;
import com.myntra.repository.CategoryRepository;
import com.myntra.repository.ProductRepository;

@Service
public class CategoryServiceImplementaion implements CategoryService{
	
	@Autowired
	private CategoryRepository repository;
	@Autowired
	private CategoryMapper mapper;
	@Autowired
	private ProductMapper proMapper;

	@Autowired
	private ProductRepository proRepository;
	@Override
	public CategoryDTO saveCategory(CategoryDTO categoryDto) {
			List<ProductDTO> productsDto=categoryDto.getProductDTO();
			List<Product> products=new ArrayList<>();
			Category category=mapper.toCatgeory(categoryDto);
			for(ProductDTO pro:productsDto) {
				Product p=proMapper.toProduct(pro);
				p.setCategory(category);
				products.add(p);
			}
			category.setProduct(products);
			CategoryDTO catDto=mapper.toCatgeoryDto(repository.save(category));
			List<ProductDTO> productDtos=new ArrayList<>();
			for(Product p:products) {
				productDtos.add(proMapper.toProductDto(p));
			}
			catDto.setProductDTO(productDtos);
			return catDto;
			
			
		
	}
	@Override
	public List<ProductDTO> findProductByCategory(String categoryName) {
		Category cat=repository.findBycategoryName(categoryName);
		System.out.println(cat);
		int catId=cat.getcId();
		System.out.println(catId);
		
		List<Product> products=proRepository.findByCId(catId);
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:products) {
			ProductDTO dto=proMapper.toProductDto(p);
			System.out.println(dto.getCategoryDto());
			proDto.add(dto);
		}
		
		return proDto;
		
	}
	@Override
	public List<ProductDTO> findProductByName(String name) {
		List<Product> pro=proRepository.findByProductNameStartingWith(name);
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:pro) {
			proDto.add(proMapper.toProductDto(p));
			
		}
		return proDto;
		
	}
	@Override
	public List<ProductDTO> findProductByNameContains(String name) {
		List<Product> pro=proRepository.findByProductNameContaining(name);
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:pro) {
			proDto.add(proMapper.toProductDto(p));
			
		}
		return proDto;
	}
	
	
	@Override
	public List<ProductDTO> sortByLowToHighAsc(Integer c_id) {
		List<Product> pro=proRepository.sortByAscending(c_id);
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:pro) {
			proDto.add(proMapper.toProductDto(p));
		}
		return proDto;
	}
	@Override
	public List<ProductDTO> sortbyHighToLowDesc(Integer c_id) {
		List<Product> pro=proRepository.sortByDescending(c_id);
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:pro) {
			proDto.add(proMapper.toProductDto(p));
		}
		return proDto;
	}
	@Override
	public List<ProductDTO> sortByRatingDesc(Integer c_id) {
		List<Product> pro=proRepository.sortByRatingDesc(c_id);
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:pro) {
			proDto.add(proMapper.toProductDto(p));
		}
		return proDto;
	}
	@Override
	public List<ProductDTO> sortbyOfferDesc(Integer c_id) {
		List<Product> pro=proRepository.sortByOfferDesc(c_id);
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:pro) {
			proDto.add(proMapper.toProductDto(p));
		}
		return proDto;
	}
	@Override
	public List<ProductDTO> findAll() {
		List<Product> products=proRepository.findAll();
		List<ProductDTO> dto=new ArrayList<>();
		for(Product p:products) {
			dto.add(proMapper.toProductDto(p));
		}
		return dto;
	}
	@Override
	public List<ProductDTO> findProductById(Integer id) {
		List<Product> products=proRepository.findByCId(id);
		List<ProductDTO> dto=new ArrayList<>();
		for(Product p:products) {
			dto.add(proMapper.toProductDto(p));
		}
		return dto;
	}
	@Override
	public List<ProductDTO> filters(String productName, String category, String color, String brand, String discount,String sortBy) {
		List<Product> pro=proRepository.filter(productName,category,brand,color,discount,sortBy);
		System.out.println(pro.size());
		List<ProductDTO> proDto=new ArrayList<>();
		for(Product p:pro) {
			proDto.add(proMapper.toProductDto(p));
		}
		return proDto;
	}
	@Override
	public List<CategoryDTO> getAllCategorues() {
		List<Category> categories=repository.findAll();
		List<CategoryDTO> dtos=new ArrayList<>();
		for(Category category :categories) {
			
			dtos.add(mapper.toCatgeoryDto(category));
		}
		return dtos;
	}
	
	
}
