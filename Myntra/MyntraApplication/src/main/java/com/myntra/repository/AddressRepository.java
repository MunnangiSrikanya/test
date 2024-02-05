package com.myntra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.myntra.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{
	
	@Query(value="select * from address where user_id=?1",nativeQuery=true)
	public List<Address> findByUserId(@Param("user_id") Integer user_id);

}
