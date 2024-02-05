package com.myntra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myntra.dto.ProductDTO;
import com.myntra.entity.Wishlist;

import com.myntra.services.WishlistService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/wishlist")
public class WishlistController {
	@Autowired
	private WishlistService service;
	@PostMapping("/addToWishlist/{proId}/{userId}")
	public ResponseEntity<String> addToWishlist(@PathVariable Integer proId,@PathVariable Integer userId){
		service.addToWishlist(proId, userId);
		return ResponseEntity.ok("Product added to wishlist");
	}

	@GetMapping("/getWishlist/{id}")
	public ResponseEntity<List<Wishlist>> findWishlist(@PathVariable Integer id){
		return ResponseEntity.ok(service.getItemsInWishlist(id));
	}


	@DeleteMapping("/deleteItem/{product_id}/{id}")
	public ResponseEntity<String> delete(@PathVariable int product_id,@PathVariable int id){
		service.deleteByItemId(product_id,id);
		return new ResponseEntity<String>("Successfully deleted...", HttpStatus.OK);
				
	}
	@GetMapping("/get/{id}")
	public ResponseEntity<Wishlist> get(@PathVariable int id){
		return ResponseEntity.ok(service.getById(id));
	}
}
