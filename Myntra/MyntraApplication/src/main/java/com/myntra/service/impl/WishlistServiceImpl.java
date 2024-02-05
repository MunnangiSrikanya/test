package com.myntra.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myntra.dto.ProductDTO;
import com.myntra.entity.BagItem;
import com.myntra.entity.Product;
import com.myntra.entity.RegisterUser;
import com.myntra.entity.ShoppingBag;
import com.myntra.entity.Wishlist;

import com.myntra.mapper.ProductMapper;
import com.myntra.repository.ProductRepository;
import com.myntra.repository.RegistrationRepository;

import com.myntra.repository.WishlistRepository;
import com.myntra.services.WishlistService;

@Service
public class WishlistServiceImpl implements WishlistService{
	@Autowired
	private ProductRepository proRepository;
	@Autowired
	private WishlistRepository wishlistRepository;
	@Autowired
	private RegistrationRepository userRepository;
	@Autowired
	private ProductMapper proMapper;
	
	//Adding to Wishlist based on productId and wishlist id
	@Override
	public Wishlist addToWishlist(Integer productId, Integer userId){
		Product product=proRepository.findById(productId).get();
		System.out.println(product.toString());
		RegisterUser user=userRepository.findById(userId).get();
		Wishlist wishlist=new Wishlist();
		wishlist.setProduct(product);
		wishlist.setUser(user);
		
		return wishlistRepository.save(wishlist);
		
	}

	
	@Override
	public void deleteByItemId(Integer productId,Integer id) {
		Integer wliId=wishlistRepository.getWishlistId(productId,id);
		System.out.println(wliId);
		if(wishlistRepository.findById(wliId).isPresent()) {
			System.out.println(wishlistRepository.findById(wliId).isPresent());
			wishlistRepository.deletebyid(wliId);
		}
		System.out.println(wishlistRepository.findById(wliId).isPresent());
		
	}
	
	@Override
	public List<Wishlist> getItemsInWishlist(Integer userId) {
		RegisterUser user=userRepository.findById(userId).get();
		List<Wishlist> productsList=wishlistRepository.findWishlistItems(userId); 
		
		return productsList;
	}

	@Override
	public Wishlist getById(int id) {
		// TODO Auto-generated method stub
		return wishlistRepository.findById(id).get();
	}

}
