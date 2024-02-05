package com.myntra.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myntra.entity.Product;
import com.myntra.entity.Category;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	@Query(value="Select * from Product where c_id=?1",nativeQuery = true)
	List<Product> findByCId(@Param("id") Integer id);
	
	List<Product> findByProductNameStartingWith(String name);
	
	List<Product> findByProductNameContaining(String name);
	
	@Query(value="Select * from product where p_id=?1",nativeQuery=true)
	Product findByPId(@Param("id") Integer id);
	

	
	@Query(value="select * from product where c_id=:c_id order by price",nativeQuery=true)
	List<Product> sortByAscending(@Param("c_id") Integer id);
	
	@Query(value="select * from product where c_id=:c_id order by price desc",nativeQuery=true)
	List<Product> sortByDescending(@Param("c_id") Integer id);
	
	@Query(value="select * from product where c_id=:c_id order by rating desc",nativeQuery=true)
	List<Product> sortByRatingDesc(@Param("c_id") Integer id);
	
	@Query(value="select * from product where c_id=:c_id order by offer desc",nativeQuery=true)
	List<Product> sortByOfferDesc(@Param("c_id") Integer id);
	
	
//	@Query(value = "SELECT * FROM product WHERE product_name LIKE %:product_name% AND (:color IS NULL OR product_name LIKE  %:color% OR product_description LIKE  %:color%) AND (:brand IS NULL OR brand_name = :brand) AND (:category iS NULL OR product_name like :category%) AND (:discount IS NULL OR offer>=:discount) ", nativeQuery = true)
//	List<Product> filter(@Param("product_name") String productName,@Param("category") String category,@Param("brand") String brand,@Param("color") String color,@Param("discount") String discount);
	
	@Query(value = "SELECT * FROM product WHERE product_name LIKE %:product_name% AND (:color IS NULL OR product_name LIKE %:color% OR product_description LIKE %:color%) AND (:brand IS NULL OR brand_name = :brand) AND (:category IS NULL OR product_name LIKE :category%) AND (:discount IS NULL OR offer >= :discount) ORDER BY "
	        + "CASE WHEN :sortBy = 'priceLowToHigh' THEN price END ASC, "
	        + "CASE WHEN :sortBy = 'priceHighToLow' THEN price END DESC, "
	        + "CASE WHEN :sortBy = 'rating' THEN rating END DESC, "
	        + "CASE WHEN :sortBy = 'discount' THEN offer END DESC",
	        nativeQuery = true)
	List<Product> filter(@Param("product_name") String productName,
	                    @Param("category") String category,
	                    @Param("brand") String brand,
	                    @Param("color") String color,
	                    @Param("discount") String discount,
	                    @Param("sortBy") String sortBy);
}
