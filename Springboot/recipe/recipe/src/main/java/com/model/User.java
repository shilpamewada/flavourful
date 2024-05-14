
package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

	@Id@GeneratedValue
	private int userId;
	private String userName;
	private String gender;
	private String country;
	
	@Column(unique = true)
	private String mobileNum;
	
	@Column(unique = true)
	private String emailId;
	private String password;
	
	
	
	public User() {
	}

	public User(int userId, String userName, double salary, String gender, String country, String emailId,
			String password) {
		this.userId = userId;
		this.userName = userName;
		this.gender = gender;
		this.country = country;
		this.emailId = emailId;
		this.password = password;
	}
	
	

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMobileNum() {
		return mobileNum;
	}

	public void setMobileNum(String mobileNum) {
		this.mobileNum = mobileNum;
	}

	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", gender=" + gender + ", country=" + country
				+ ", mobileNum=" + mobileNum + ", emailId=" + emailId + ", password=" + password + "]";
	}

	
	
}