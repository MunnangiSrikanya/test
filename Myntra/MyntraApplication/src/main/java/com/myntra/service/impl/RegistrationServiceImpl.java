package com.myntra.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.myntra.dto.RegistrationDTO;
import com.myntra.entity.RegisterUser;
import com.myntra.entity.ShoppingBag;
import com.myntra.entity.Wishlist;

import com.myntra.mapper.RegistrationMapper;
import com.myntra.mapper.WishlistMapper;

import com.myntra.repository.RegistrationRepository;
import com.myntra.services.RegistrationService;

import lombok.Data;
@Service
public class RegistrationServiceImpl implements RegistrationService{
	@Autowired
	private RegistrationRepository repository;
	
	@Autowired
	private RegistrationMapper mapper;
	@Autowired
	private WishlistMapper wishlistMapper;
	
	@Override
	public RegistrationDTO saveUser(RegistrationDTO dto) {

		RegisterUser user=mapper.toRegisterEntity(dto);
		ShoppingBag bag=new ShoppingBag();
		bag.setUser(user);
		user.setBag(bag);
		return mapper.toRegisterDTO(repository.save(user));
		
	}
	


	@Override
	public void deleteUserById(Integer id) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public RegistrationDTO findByEmail(String email) {

		RegisterUser user=repository.findByEmail(email);
		return mapper.toRegisterDTO(user);
		
		
	}
	



	@Override
	public List<RegistrationDTO> getUsers() {
		List<RegistrationDTO> userList= new ArrayList<RegistrationDTO>();
		List<RegisterUser>users= repository.findAll();
		for(RegisterUser user:users ) {
			userList.add(mapper.toRegisterDTO(user));
		}
		return userList;
	}




	@Override
	public RegistrationDTO updateUser(String email,RegistrationDTO dto) {
		RegisterUser user=repository.findByEmail(email);
		user.setName(dto.getName());
		user.setEmail(dto.getEmail());
		user.setMobileNumber(dto.getMobileNumber());
		user.setPassword(dto.getPassword());
		user.setAlterMobile(dto.getAlterMobile());
		user.setDob(dto.getDob());
		user.setHintName(dto.getHintName());
		return mapper.toRegisterDTO(repository.save(user));
	}





	@Override
	public RegistrationDTO getUserById(Integer id) {
		return mapper.toRegisterDTO(repository.findById(id).get());
	}





}





