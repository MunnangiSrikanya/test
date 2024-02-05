package com.myntra.dto;



public class AddressDTO {
	private Integer address_id;
	private String name;
	private String mobileNo;
	private String pincode;
	private String addressDeatails;
	private String town;
	private String district;
	private String state;
	private RegistrationDTO userDto;
	public Integer getAddress_id() {
		return address_id;
	}
	public void setAddress_id(Integer address_id) {
		this.address_id = address_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getAddressDeatails() {
		return addressDeatails;
	}
	public void setAddressDeatails(String addressDeatails) {
		this.addressDeatails = addressDeatails;
	}
	public String getTown() {
		return town;
	}
	public void setTown(String town) {
		this.town = town;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public RegistrationDTO getUserDto() {
		return userDto;
	}
	public void setUserDto(RegistrationDTO userDto) {
		this.userDto = userDto;
	}
	@Override
	public String toString() {
		return "AddressDTO [address_id=" + address_id + ", name=" + name + ", mobileNo=" + mobileNo + ", pincode="
				+ pincode + ", addressDeatails=" + addressDeatails + ", town=" + town + ", district=" + district
				+ ", state=" + state + ", userDto=" + userDto + "]";
	}
	

}
