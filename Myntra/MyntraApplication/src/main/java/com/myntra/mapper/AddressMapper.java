package com.myntra.mapper;

import org.springframework.stereotype.Component;

import com.myntra.dto.AddressDTO;
import com.myntra.entity.Address;

@Component
public class AddressMapper {
	RegistrationMapper mapper=new RegistrationMapper();
	public Address toAddress(AddressDTO dto) {
		Address address=new Address();
		address.setAddress_id(dto.getAddress_id());
		address.setAddressDeatails(dto.getAddressDeatails());
		address.setDistrict(dto.getDistrict());
		address.setMobileNo(dto.getMobileNo());
		address.setName(dto.getName());
		address.setPincode(dto.getPincode());
		address.setState(dto.getState());
		address.setTown(dto.getTown());
//		address.setUser(mapper.toRegisterEntity(dto.getUserDto()));
		return address;
		
	}
	
	public AddressDTO toAddressDTO(Address address) {
		AddressDTO dto=new AddressDTO();
		dto.setAddress_id(address.getAddress_id());
		dto.setAddressDeatails(address.getAddressDeatails());
		dto.setDistrict(address.getDistrict());
		dto.setMobileNo(address.getMobileNo());
		dto.setName(address.getName());
		dto.setPincode(address.getPincode());
		dto.setState(address.getState());
		dto.setTown(address.getTown());
//		dto.setUserDto(mapper.toRegisterDTO(address.getUser()));
		return dto;
	}

}
