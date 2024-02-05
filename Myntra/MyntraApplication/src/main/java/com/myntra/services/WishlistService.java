package com.myntra.services;

import java.util.List;

import com.myntra.dto.ProductDTO;
import com.myntra.entity.Product;
import com.myntra.entity.Wishlist;


public interface WishlistService {
		public Wishlist addToWishlist(Integer productId,Integer userId);
//		public List<ProductDTO> findProductId(Integer id);
		public void deleteByItemId(Integer productId,Integer wishlistId);
		public List<Wishlist> getItemsInWishlist(Integer userId);
//		public void deleteByItemId(int itemId);
		public Wishlist getById(int id);
//		public Integer findByUserId(Integer id);
}
