package com.myntra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myntra.entity.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
	Category findBycategoryName(String catName);
	

}
