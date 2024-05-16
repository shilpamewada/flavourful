package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("from User e where e.userName = :name")
	List<User> findByName(@Param("name") String userName);

	@Query("from User e where e.emailId = :emailId and e.password = :password")
	User userLogin(@Param("emailId") String emailId, @Param("password") String password);
}