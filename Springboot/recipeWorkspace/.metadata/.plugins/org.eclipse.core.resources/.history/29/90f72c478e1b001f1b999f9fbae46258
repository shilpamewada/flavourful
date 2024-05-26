


package com.controllers;
import org.springframework.web.bind.annotation.CrossOrigin;



import java.security.NoSuchAlgorithmException;  
import java.security.MessageDigest; 

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.UserDao;
import com.model.User;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	UserDao userDao;
	
	@GetMapping("userLogin/{emailId}/{password}")
	public User userLogin(@PathVariable("emailId") String emailId, 
			@PathVariable("password") String password) {

		
		String encryptedpassword = null; 
		  try   
	        {  
	            /* MessageDigest instance for MD5. */  
	            MessageDigest m = MessageDigest.getInstance("MD5");  
	              
	            /* Add plain-text password bytes to digest using MD5 update() method. */  
	            m.update(password.getBytes());  
	              
	            /* Convert the hash value into bytes */   
	            byte[] bytes = m.digest();  
	              
	            /* The bytes array has bytes in decimal form. Converting it into hexadecimal format. */  
	            StringBuilder s = new StringBuilder();  
	            for(int i=0; i< bytes.length ;i++)  
	            {  
	                s.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));  
	            }  
	              
	            /* Complete hashed password in hexadecimal format */  
	            encryptedpassword = s.toString();  
	        }   
	        catch (NoSuchAlgorithmException e)   
	        {  
	            e.printStackTrace();  
	        }  
		
		System.out.println(encryptedpassword);
		
		return userDao.userLogin(emailId,encryptedpassword );
	}
	
	@GetMapping("getAllUsers")
	public List<User> getAllUsers() {
		return userDao.getAllUsers();
	}
	
	@GetMapping("getUserById/{id}")
	public User getUserById(@PathVariable("id") int userId) {
		return userDao.getUserById(userId);
	}
	
	@GetMapping("getUserByName/{name}")
	public List<User> getUserByName(@PathVariable("name") String userName) {
		return userDao.getUserByName(userName);
	}
	
	@PostMapping("addUser")
	public User addUser(@RequestBody User user) {
		
		return userDao.addUser(user);
	}
	
	@PutMapping("updateUser")
	public User updateUser(@RequestBody User user) {
		return userDao.updateUser(user);
	}
	
	@DeleteMapping("deleteUserById/{id}")
	public String deleteUserById(@PathVariable("id") int userId) {
		userDao.deleteUserById(userId);
		return "User Record Deleted Successfully!!!";
	}
}








