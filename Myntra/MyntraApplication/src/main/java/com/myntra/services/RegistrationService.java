package com.myntra.services;

import java.util.List;


import com.myntra.dto.RegistrationDTO;

public interface RegistrationService {
	public RegistrationDTO saveUser(RegistrationDTO dto);
	public List<RegistrationDTO> getUsers();
	public void deleteUserById(Integer id);
	public RegistrationDTO findByEmail(String email);
	public RegistrationDTO updateUser(String email,RegistrationDTO dto);
	public RegistrationDTO getUserById(Integer id);
}
