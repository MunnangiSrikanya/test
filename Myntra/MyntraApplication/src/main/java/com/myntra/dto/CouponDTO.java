package com.myntra.dto;

import java.sql.Date;

public class CouponDTO {
	private Integer couponId;
	private String couponCode;
	private double discountPercentage;
	private Date expiryDate;
	private String couponDetails;
	private Double minPurchase;
	public Double getMinPurchase() {
		return minPurchase;
	}
	public void setMinPurchase(Double minPurchase) {
		this.minPurchase = minPurchase;
	}
	public Integer getCouponId() {
		return couponId;
	}
	public void setCouponId(Integer couponId) {
		this.couponId = couponId;
	}
	public String getCouponCode() {
		return couponCode;
	}
	public void setCouponCode(String couponCode) {
		this.couponCode = couponCode;
	}
	public double getDiscountPercentage() {
		return discountPercentage;
	}
	public void setDiscountPercentage(double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}
	public Date getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}
	public String getCouponDetails() {
		return couponDetails;
	}
	public void setCouponDetails(String couponDetails) {
		this.couponDetails = couponDetails;
	}
	

}
