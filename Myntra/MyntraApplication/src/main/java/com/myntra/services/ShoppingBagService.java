package com.myntra.services;

import com.myntra.dto.ProductDTO;
import com.myntra.dto.BagItemDTO;
import com.myntra.entity.*;

import java.util.List;


public interface ShoppingBagService {
	
	public ShoppingBag addToBag(Integer bag_id,Integer product_id,Integer quantity);
	//Getting products in shopping bag by bag id
//	public List<ProductDTO> getByBagId(Integer bag_id);
	
	public List<BagItem> getAllItemsInBag(Integer bag_id);
//	public void deleteById(Integer productId,Integer bagId);
	public void delete(Integer bagItem_id);
	public BagItem updateQuantity(Integer bag_item_id,int newQuantity);
	public Integer findByUserId(Integer id);
	public ShoppingBag updatePrice(Integer bag_id,Double newQuantity);
	public void deleteBag(Integer bag_id);
	


}
