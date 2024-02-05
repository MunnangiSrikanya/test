

package com.myntra.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myntra.dto.AddressDTO;
import com.myntra.entity.Address;
import com.myntra.entity.RegisterUser;
import com.myntra.mapper.AddressMapper;
import com.myntra.mapper.RegistrationMapper;
import com.myntra.repository.AddressRepository;
import com.myntra.repository.RegistrationRepository;
import com.myntra.services.AddressService;

@Service
public class AddressServiceImpl implements AddressService{
	
	@Autowired
	private RegistrationRepository userRepository;
	@Autowired
	private AddressRepository addressRepository;
	@Autowired
	private AddressMapper addressMapper;
	@Autowired
	private RegistrationMapper userMapper;

	@Override
	public AddressDTO saveAddress(Integer user_id, AddressDTO dto) {
		RegisterUser user=userRepository.findById(user_id).orElse(null);
		Address address=addressMapper.toAddress(dto);
		address.setUser(user);
		AddressDTO addressDTO=addressMapper.toAddressDTO(addressRepository.save(address));
		addressDTO.setUserDto(userMapper.toRegisterDTO(user));
		return addressDTO;
	}

	@Override
	public List<AddressDTO> getAddress(Integer user_id) {
		List<Address> address=addressRepository.findByUserId(user_id);
		List<AddressDTO> addressesDTO=new ArrayList<>();
		for(Address add:address) {
			addressesDTO.add(addressMapper.toAddressDTO(add));
		}
		return addressesDTO;
	}

	@Override
	public void delete(Integer address_id) {
		if(addressRepository.findById(address_id).isPresent()) {
			addressRepository.deleteById(address_id);
		}
		
	}

	@Override
	public AddressDTO getAddressById(Integer address_id) {
		Address address=addressRepository.findById(address_id).get();
		return addressMapper.toAddressDTO(address);
	}

	@Override
	public AddressDTO updateAddress(Integer address_id, AddressDTO dto) {
		Address address=addressRepository.findById(address_id).get();
//		address.setAddress_id(dto.getAddress_id());
		address.setAddressDeatails(dto.getAddressDeatails());
		address.setDistrict(dto.getDistrict());
		address.setMobileNo(dto.getMobileNo());
		address.setName(dto.getName());
		address.setPincode(dto.getPincode());
		address.setState(dto.getState());
		address.setTown(dto.getTown());
		return addressMapper.toAddressDTO(addressRepository.save(address));
	}
	
	

}
