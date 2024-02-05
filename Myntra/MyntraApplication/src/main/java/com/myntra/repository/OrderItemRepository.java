package com.myntra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.myntra.entity.OrderItems;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItems, Integer>{
	@Query(value="select * from order_items where order_id=?1",nativeQuery=true)
	public List<OrderItems> getOrderItemd(@PathVariable Integer order_id);

}
