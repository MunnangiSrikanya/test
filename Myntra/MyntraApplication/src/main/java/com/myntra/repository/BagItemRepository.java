package com.myntra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myntra.entity.BagItem;
import com.myntra.entity.Product;
import com.myntra.entity.ShoppingBag;
import java.util.List;

@Repository
public interface BagItemRepository extends JpaRepository<BagItem, Integer>{
	
	public BagItem findByBagAndProduct(ShoppingBag bag, Product product);
	

	@Query(value="select * from bag_item where shoppingbag_id=?1",nativeQuery=true)
	public List<BagItem> findByBagId(@Param("shoppingbag_id") Integer bag_id);
	
	@Query(value="select bag_item_id from bag_item where product_id=?1 and shoppingbag_id=?2", nativeQuery=true)
	public Integer getBagItemId(@Param("product_id") Integer productId,@Param("shoppingbag_id") Integer bagId);
	

}
