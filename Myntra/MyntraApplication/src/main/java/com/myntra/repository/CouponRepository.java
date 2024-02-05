package com.myntra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.myntra.entity.Coupons;
@Repository
public interface CouponRepository extends JpaRepository<Coupons, Integer>{
	
	
	public Coupons findByCouponCode(String code);

}
