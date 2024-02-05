package com.myntra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myntra.entity.ShoppingBag;
@Repository
public interface ShoppingBagRepository extends JpaRepository<ShoppingBag, Integer>{
	
	@Query(value="Select bag_id from shopping_bag where user_id=?1",nativeQuery = true)
	public Integer findBagIdByUserId(@Param("user_id") Integer id);

}
