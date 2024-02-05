package com.myntra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.myntra.entity.Order;
import com.myntra.entity.OrderItems;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{
	@Query(value="select * from orders where user_id=?1",nativeQuery=true)
	public List<Order> getOrder(@PathVariable Integer user_id);
	
	
}
