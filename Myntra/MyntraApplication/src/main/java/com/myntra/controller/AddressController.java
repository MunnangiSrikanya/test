package com.myntra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myntra.dto.AddressDTO;
import com.myntra.services.AddressService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/address")
public class AddressController {
	@Autowired
	private AddressService addressService;
	
	@PostMapping("/add/{user_id}")
	public ResponseEntity<AddressDTO> saveAddress(@PathVariable Integer user_id,@RequestBody AddressDTO dto){
		return ResponseEntity.ok(addressService.saveAddress(user_id, dto));
	}
	@GetMapping("/get/{user_id}")
	public ResponseEntity<List<AddressDTO>> getAddresses(@PathVariable Integer user_id){
		return ResponseEntity.ok(addressService.getAddress(user_id));
	}
	@DeleteMapping("/delete/{address_id}")
	public ResponseEntity<String> deleteAddress(@PathVariable Integer address_id){
		addressService.delete(address_id);
		return ResponseEntity.ok("deleted.");
		
	}
	@GetMapping("/getById/{address_id}")
	public ResponseEntity<AddressDTO> getAddressById(@PathVariable Integer address_id){
		return ResponseEntity.ok(addressService.getAddressById(address_id));
	}
	@PutMapping("/updateAddress/{address_id}")
	public ResponseEntity<AddressDTO> updateAddress(@PathVariable Integer address_id,@RequestBody AddressDTO dto){
		return ResponseEntity.ok(addressService.updateAddress(address_id, dto));
	}

}
