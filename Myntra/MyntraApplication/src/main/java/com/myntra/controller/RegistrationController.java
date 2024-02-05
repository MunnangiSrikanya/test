package com.myntra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.myntra.dto.RegistrationDTO;
import com.myntra.services.RegistrationService;

@RestController
@RequestMapping("/registration")
@CrossOrigin(origins = "*")
public class RegistrationController {
	@Autowired
	private RegistrationService service;
	@PostMapping("/register")
	public ResponseEntity<RegistrationDTO> createAccount(@RequestBody RegistrationDTO dto){
		return ResponseEntity.ok(service.saveUser(dto));
		
	}
	
	@GetMapping("/login/{email}")
	public ResponseEntity<RegistrationDTO> getEmail(@PathVariable String email){
		return ResponseEntity.ok(service.findByEmail(email));
		
	}
	@GetMapping("/getallUsers")
	public ResponseEntity<List<RegistrationDTO>> getAllUsers(){
		return new ResponseEntity<List<RegistrationDTO>>(service.getUsers(),HttpStatus.OK);
	}
	@PutMapping("/edit/{email}")
	public ResponseEntity<RegistrationDTO> upadateUser(@PathVariable String email, @RequestBody RegistrationDTO dto){
		return ResponseEntity.ok(service.updateUser(email,dto));
	}
	@GetMapping("/getUser/{id}")
	public ResponseEntity<RegistrationDTO> getUserById(@PathVariable Integer id){
		return new ResponseEntity<RegistrationDTO>(service.getUserById(id),HttpStatus.OK);
	}
	
}	
