
package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.User;

@Service
public class UserDao {

	@Autowired
	UserRepository userRepo;
	
	
	public User userLogin(String emailId, String password) {
		return userRepo.userLogin(emailId, password);
	}

	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	public User getUserById(int userId) {
		return userRepo.findById(userId).orElse(null);
	}

	public List<User> getUserByName(String userName) {
		return userRepo.findByName(userName);
	}

	public User addUser(User user) {
		return userRepo.save(user);
	}
	
	public User updateUser(User user) {
		return userRepo.save(user);
	}

	public void deleteUserById(int userId) {
		userRepo.deleteById(userId);
	}
}
