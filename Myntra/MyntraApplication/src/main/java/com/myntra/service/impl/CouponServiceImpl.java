package com.myntra.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myntra.dto.CouponDTO;
import com.myntra.entity.Coupons;
import com.myntra.mapper.CouponMapper;
import com.myntra.repository.CouponRepository;
import com.myntra.services.CouponService;

@Service
public class CouponServiceImpl implements CouponService{
	@Autowired
	private CouponMapper couponMapper;
	
	@Autowired
	private CouponRepository couponRepository;

	@Override
	public CouponDTO saveCoupons(CouponDTO dto) {
		return couponMapper.toCouponDto(couponRepository.save(couponMapper.toCoupons(dto)));
	}

	@Override
	public List<CouponDTO> getAllCoupons() {
		List<Coupons> coupons=couponRepository.findAll();
		List<CouponDTO> dto=new ArrayList<>();
		for(Coupons c:coupons) {
			dto.add(couponMapper.toCouponDto(c));
		}
		return dto;
	}

	@Override
	public CouponDTO getByCode(String code) {
		System.out.println(couponRepository.findByCouponCode(code));
		return couponMapper.toCouponDto(couponRepository.findByCouponCode(code));
	}

}
