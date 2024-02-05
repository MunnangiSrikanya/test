package com.myntra.mapper;

import org.springframework.stereotype.Component;

import com.myntra.dto.CouponDTO;
import com.myntra.entity.Coupons;

@Component
public class CouponMapper {
	public Coupons toCoupons(CouponDTO dto) {
		Coupons coupon=new Coupons();
		coupon.setCouponCode(dto.getCouponCode());
		coupon.setCouponDetails(dto.getCouponDetails());
		coupon.setCouponId(dto.getCouponId());
		coupon.setDiscountPercentage(dto.getDiscountPercentage());
		coupon.setExpiryDate(dto.getExpiryDate());
		coupon.setMinPurchase(dto.getMinPurchase());
		return coupon;
	}
	
	public CouponDTO toCouponDto(Coupons coupon) {
		CouponDTO dto=new CouponDTO();
		dto.setCouponCode(coupon.getCouponCode());
		dto.setCouponDetails(coupon.getCouponDetails());
		dto.setCouponId(coupon.getCouponId());
		dto.setDiscountPercentage(coupon.getDiscountPercentage());
		dto.setExpiryDate(coupon.getExpiryDate());
		dto.setMinPurchase(coupon.getMinPurchase());
		return dto;
	}

}
