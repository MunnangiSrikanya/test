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
import org.springframework.web.bind.annotation.RestController;

import com.myntra.dto.CouponDTO;
import com.myntra.services.CouponService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/coupons")
public class CouponController {
	@Autowired
	private CouponService couponService;
	@PostMapping("/save-coupons")
	public ResponseEntity<CouponDTO> saveCoupons(@RequestBody CouponDTO dto){
		return ResponseEntity.ok(couponService.saveCoupons(dto));	
	}
	
	@GetMapping("/getAllCoupons")
	public ResponseEntity<List<CouponDTO>> getAllCoupons(){
		return ResponseEntity.ok(couponService.getAllCoupons());
	}
	
	@GetMapping("/getCoupon-ByCode/{code}")
	public ResponseEntity<CouponDTO> getByCode(@PathVariable String code){
		return ResponseEntity.ok(couponService.getByCode(code));
	}
	

}
