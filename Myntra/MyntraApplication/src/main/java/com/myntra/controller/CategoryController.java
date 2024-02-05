package com.myntra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.myntra.dto.CategoryDTO;
import com.myntra.dto.ProductDTO;
import com.myntra.services.CategoryService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins="*")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("/addProducts")
	public ResponseEntity<CategoryDTO> createCategory(@RequestBody CategoryDTO category){
		return ResponseEntity.ok(categoryService.saveCategory(category));
	}
	@GetMapping("/getCategories")
	public ResponseEntity<List<CategoryDTO>> findAllCategory(){
		return ResponseEntity.ok(categoryService.getAllCategorues());
	}
	
	@GetMapping("/productsByCategory/{categoryName}")
	public ResponseEntity<List<ProductDTO>> findByCategory(@PathVariable String categoryName){
		return ResponseEntity.ok(categoryService.findProductByCategory(categoryName));
	}
	@GetMapping("/productsByCategoryId/{id}")
	public ResponseEntity<List<ProductDTO>> findByCategoryId(@PathVariable Integer id){
		return ResponseEntity.ok(categoryService.findProductById(id));
	}
	@GetMapping("/productsByName/{name}")
	public ResponseEntity<List<ProductDTO>> findByName(@PathVariable String name){
		return ResponseEntity.ok(categoryService.findProductByName(name));
	}
	
	@GetMapping("/productsByNameContains/{name}")
	public ResponseEntity<List<ProductDTO>> findByNameContaining(@PathVariable String name){
		return ResponseEntity.ok(categoryService.findProductByNameContains(name));
	}
	
	@GetMapping("/lowToHighAsc/{c_id}")
	public ResponseEntity<List<ProductDTO>> sortByLowToHighAsc(@PathVariable Integer c_id){
		return ResponseEntity.ok(categoryService.sortByLowToHighAsc(c_id));
	}
	@GetMapping("/HighToLowDesc/{c_id}")
	public ResponseEntity<List<ProductDTO>> sortByHighToLowDesc(@PathVariable Integer c_id){
		return ResponseEntity.ok(categoryService.sortbyHighToLowDesc(c_id));
	}
	@GetMapping("/ratingDesc/{c_id}")
	public ResponseEntity<List<ProductDTO>> sortByRatingDesc(@PathVariable Integer c_id){
		return ResponseEntity.ok(categoryService.sortByRatingDesc(c_id));
	}
	@GetMapping("/offerDesc/{c_id}")
	public ResponseEntity<List<ProductDTO>> sortByOfferDesc(@PathVariable Integer c_id){
		return ResponseEntity.ok(categoryService.sortbyOfferDesc(c_id));
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<ProductDTO>> getAll(){
		return ResponseEntity.ok(categoryService.findAll());
	}
	
	@GetMapping("/filter")
	public ResponseEntity<List<ProductDTO>> filters(
			@RequestParam("product_name") String name,
			@RequestParam(required = false) String cat,
			@RequestParam(required = false) String brand,
			@RequestParam(required = false) String color,
			@RequestParam(required = false) String discount,
			@RequestParam(required = false) String sortBy){
		return ResponseEntity.ok(categoryService.filters(name, cat, color, brand, discount,sortBy));
	}
}
