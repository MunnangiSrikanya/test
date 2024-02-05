package com.myntra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myntra.services.OrderService;
import com.myntra.entity.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins="*")
public class OrderController {
	@Autowired
	private OrderService service;
	
	@PostMapping("/save/{user_id}/{address_id}")
	public ResponseEntity<Order> saveOrder(@PathVariable Integer user_id,@PathVariable Integer address_id,@RequestParam("bagItemIds") List<Integer> bagItemIds){
		return ResponseEntity.ok(service.saveOrder(user_id, address_id, bagItemIds));
	}
	@GetMapping("/getItems/{order_id}")
	public ResponseEntity<List<OrderItems>> getByOrderId(@PathVariable Integer order_id){
		return ResponseEntity.ok(service.getOrdersByOrderId(order_id));
	}
	@GetMapping("/getOrders/{user_id}")
	public ResponseEntity<List<OrderItems>> getByUserId(@PathVariable Integer user_id){
		return ResponseEntity.ok(service.getOrders(user_id));
	}
	@PutMapping("/return/{id}")
	public ResponseEntity<OrderItems> initiateReturn(@PathVariable Integer id){
		return ResponseEntity.ok(service.initiateReturn(id));
	}
	@PutMapping("/exchange/{id}")
	public ResponseEntity<OrderItems> initiateExchange(@PathVariable Integer id){
		return ResponseEntity.ok(service.initiateExchange(id));
	}
	@PutMapping("/cancel/{id}")
	public ResponseEntity<OrderItems> cancel(@PathVariable Integer id){
		return ResponseEntity.ok(service.cancelOrder(id));
	}
	@PutMapping("/deliver")
	public ResponseEntity<String> delivered(){
		service.delivered();
		return ResponseEntity.ok("delivered");
	}
	@GetMapping("/getItem/{id}")
	public ResponseEntity<OrderItems> getItem(@PathVariable Integer id){
		return ResponseEntity.ok(service.getById(id));
	}
}
