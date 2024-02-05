package com.myntra.services;

import java.util.List;

import com.myntra.dto.AddressDTO;

public interface AddressService {
	public AddressDTO saveAddress(Integer user_id,AddressDTO dto);
	public List<AddressDTO> getAddress(Integer user_id);
	public void delete(Integer address_id);
	public AddressDTO getAddressById(Integer address_id);
	public AddressDTO updateAddress(Integer address_id,AddressDTO dto);
}
