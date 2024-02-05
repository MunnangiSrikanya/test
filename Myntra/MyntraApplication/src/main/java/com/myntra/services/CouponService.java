package com.myntra.services;

import java.util.List;

import com.myntra.dto.CouponDTO;

public interface CouponService {
	public CouponDTO saveCoupons(CouponDTO dto);
	public List<CouponDTO> getAllCoupons();
	public CouponDTO getByCode(String code);
}
