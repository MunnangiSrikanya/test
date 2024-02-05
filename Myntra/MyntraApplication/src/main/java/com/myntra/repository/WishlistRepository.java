package com.myntra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myntra.entity.Wishlist;


import jakarta.transaction.Transactional;

@Repository
public interface WishlistRepository extends JpaRepository<Wishlist, Integer>{

	
	@Query(value="select * from Wishlist where id=?1", nativeQuery=true)
	public List<Wishlist> findWishlistItems(@Param("id") Integer id);

	@Query(value="SELECT * FROM wishlist where p_id=:p_id and id=:id",nativeQuery=true)
	public Wishlist existsByProductId(@Param("p_id") Integer productId,@Param("id") Integer userId);
	
	@Query(value="select wishlist_id from wishlist where p_id=:p_id and id=:id", nativeQuery=true)
	public Integer getWishlistId(@Param("p_id") Integer productId,@Param("id") Integer id);
	
	@Modifying
	@Transactional
	@Query(value = "delete from wishlist where wishlist_id=:wishlist_id ",nativeQuery = true)
	public void  deletebyid(@Param("wishlist_id") int wishlist_id);

}
