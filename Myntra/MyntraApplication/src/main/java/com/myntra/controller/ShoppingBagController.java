		package com.myntra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.myntra.dto.ProductDTO;
import com.myntra.entity.BagItem;
import com.myntra.entity.ShoppingBag;
import com.myntra.services.ShoppingBagService;

@RestController
@RequestMapping("/bag")
@CrossOrigin(origins = "*")
public class ShoppingBagController {
	@Autowired
	private ShoppingBagService bagService;
	
	@PostMapping("/addToBag/{bag_id}/{product_id}/{quantity}")
	public ResponseEntity<String> addToBag(@PathVariable Integer bag_id,@PathVariable Integer product_id,@PathVariable Integer quantity){
		bagService.addToBag(bag_id, product_id, quantity);
		return ResponseEntity.ok("Added to bag");
	}

	@GetMapping("getBagItems/{bag_id}")
	public ResponseEntity<List<BagItem>> getproductItems(@PathVariable Integer bag_id){
		return ResponseEntity.ok(bagService.getAllItemsInBag(bag_id));
	}
	

	@DeleteMapping("/delete/{bagItemId}")
	public ResponseEntity<String> deleteById(@PathVariable Integer bagItemId){
		bagService.delete(bagItemId);
		return new ResponseEntity<String>("Successfully deleted...", HttpStatus.OK);
	}
		
	@PutMapping("/update-quantity/{bag_item_id}/{newQuantity}")
	public ResponseEntity<BagItem> updateQuantity(@PathVariable Integer bag_item_id,@PathVariable Integer newQuantity){
		return ResponseEntity.ok(bagService.updateQuantity(bag_item_id, newQuantity));
	}
	
	@GetMapping("/getByUserId/{id}")
	public ResponseEntity<Integer> findByUserId(@PathVariable Integer id){
		return ResponseEntity.ok(bagService.findByUserId(id));
	}
	@PutMapping("/update-price/{bag_id}/{price}")
	public ResponseEntity<ShoppingBag> updatePrice(@PathVariable Integer bag_id,@PathVariable Double price){
		return ResponseEntity.ok(bagService.updatePrice(bag_id, price));
	}
	@DeleteMapping("/deleteAll/{bag_id}")
	public ResponseEntity<String> deleteBag(@PathVariable Integer bag_id){
		bagService.deleteBag(bag_id);
		return ResponseEntity.ok("deleted");
	}
	
}
