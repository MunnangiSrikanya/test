package com.myntra.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.swing.text.html.HTMLDocument.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myntra.services.ShoppingBagService;
import com.myntra.repository.*;
import com.myntra.dto.BagItemDTO;
import com.myntra.dto.ProductDTO;
import com.myntra.entity.*;
import com.myntra.mapper.ProductMapper;
@Service
public class ShoppingBagServiceImpl implements ShoppingBagService{
	@Autowired
	private ShoppingBagRepository bagRepository;
	@Autowired
	private BagItemRepository itemRepository;
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public ShoppingBag addToBag(Integer bag_id, Integer product_id, Integer quantity) {

		Product product=productRepository.findById(product_id).get();

		ShoppingBag bag=bagRepository.findById(bag_id).get();

		BagItem bagItem=itemRepository.findByBagAndProduct(bag,product);
		if(bagItem!=null) {
			quantity+=bagItem.getQuantity();
			bagItem.setQuantity(quantity);
		}
		else {
			bagItem=new BagItem();
			bagItem.setProduct(product);
			bagItem.setBag(bag);
			bagItem.setQuantity(quantity);
		}
		double price=product.getPrice()*bagItem.getQuantity();
		if(bag!=null) {
			bag.setBag_price(price);
		}else {
			bag.setBag_price(0.0);
		}
		System.out.println(price);
		itemRepository.save(bagItem);
		bag.getItems().add(bagItem);
		return bag;
	}



	@Override
	public List<BagItem> getAllItemsInBag(Integer bag_id) {
		ShoppingBag bag=bagRepository.findById(bag_id).get();
		List<BagItem> productsList=itemRepository.findByBagId(bag_id); 
		return productsList;
	}



	@Override
	public BagItem updateQuantity(Integer bag_item_id, int newQuantity) {
		BagItem bagItem=itemRepository.findById(bag_item_id).get();
		bagItem.setQuantity(newQuantity);
		return itemRepository.save(bagItem);
	}



	@Override
	public void delete(Integer bagItem_id) {
		if(itemRepository.findById(bagItem_id).isPresent()) {
			itemRepository.deleteById(bagItem_id);
			
		}
		
	}



	@Override
	public Integer findByUserId(Integer id) {
		return bagRepository.findBagIdByUserId(id);
	}



	@Override
	public ShoppingBag updatePrice(Integer bag_id, Double price) {
		ShoppingBag bag=bagRepository.findById(bag_id).get();
		bag.setBag_price(price);
		return bagRepository.save(bag);
	}



	@Override
	public void deleteBag(Integer bag_id) {
		List<BagItem> bagItems=itemRepository.findByBagId(bag_id);
		for(BagItem b:bagItems) {
			itemRepository.deleteById(b.getBagItem_id());
		}
	}
	
	



	
	

	

}
