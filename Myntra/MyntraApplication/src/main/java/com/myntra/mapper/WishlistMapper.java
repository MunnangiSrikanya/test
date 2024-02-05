package com.myntra.mapper;

import org.springframework.stereotype.Component;

import com.myntra.dto.WishlistDTO;
import com.myntra.entity.Wishlist;

@Component
public class WishlistMapper {
	public WishlistDTO toWishlistDto(Wishlist wishList) {
		WishlistDTO dto=new WishlistDTO();
		dto.setWishlistId(wishList.getWishlistId());
		return dto;
	}

	public Wishlist toWishlist(WishlistDTO dto) {
		Wishlist wishList=new Wishlist();
		wishList.setWishlistId(dto.getWishlistId());
		return wishList;
	}
}
