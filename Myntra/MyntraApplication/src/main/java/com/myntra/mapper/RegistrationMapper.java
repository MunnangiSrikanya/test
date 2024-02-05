package com.myntra.mapper;

import org.springframework.stereotype.Component;

import com.myntra.dto.RegistrationDTO;
import com.myntra.entity.RegisterUser;

@Component
public class RegistrationMapper {
	public RegisterUser toRegisterEntity(RegistrationDTO registrationDTO) {
		RegisterUser user=new RegisterUser();
		user.setName(registrationDTO.getName());
		user.setEmail(registrationDTO.getEmail());
		user.setMobileNumber(registrationDTO.getMobileNumber());
		user.setPassword(registrationDTO.getPassword());
		user.setAlterMobile(registrationDTO.getAlterMobile());
		user.setDob(registrationDTO.getDob());
		user.setHintName(registrationDTO.getHintName());
		return user;
	}
	
	public RegistrationDTO toRegisterDTO(RegisterUser register) {
		RegistrationDTO registrationDTO=new RegistrationDTO();
		registrationDTO.setId(register.getId());
		registrationDTO.setName(register.getName());
		registrationDTO.setEmail(register.getEmail());
		registrationDTO.setMobileNumber(register.getMobileNumber());
		registrationDTO.setPassword(register.getPassword());
		registrationDTO.setAlterMobile(register.getAlterMobile());
		registrationDTO.setDob(register.getDob());
		registrationDTO.setHintName(register.getHintName());
		return registrationDTO;
	}

}
