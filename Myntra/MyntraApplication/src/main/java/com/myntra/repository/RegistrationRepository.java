package com.myntra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.myntra.dto.RegistrationDTO;
import com.myntra.entity.RegisterUser;
@Repository
public interface RegistrationRepository extends JpaRepository<RegisterUser, Integer>{
	public RegisterUser findByEmail(String email);
	
	@Query(value="Select profile_id from register where id=?1",nativeQuery=true)
	public Integer findProfileId(Integer id);

}
