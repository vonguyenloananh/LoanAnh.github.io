$(document).ready(function(){	
	var date = new Date().getDate();
	var month = new Date().getMonth();
	var year = new Date().getFullYear();
	$("#day-present").val((month + 1) + "/" + date + "/" + year);

	var checkInputUsername = false;
	var checkIntputPassword = false;
	var checkIntputEmail = false;
	var checkIntputBirthday = false;
	
	var username = $("#username");
	var password = $("#password");
	var email = $("#email");
	var birthday = $("#day-present")
	
	var errorUsername = $("#validate_user");
	var errorPassword = $("#validate_pass");
	var errorEmail = $("#validate_email");
	var errorBirthday = $("#validate_day");
	var date = $("#day-present").val();

	$(".btn_sbm").click(function(){
		if (username.val() == "" || username.val() == null) {				/* Check Format Username*/					
			errorUsername.html("Please enter username");
			checkInputUsername = false;
		} else if (username.val().length < 8) {
			errorUsername.html("Username min length 8 letter");
			checkInputUsername = false;
		} else if (!checkValidate(username.val())) {
			errorUsername.html("Username have some special character!");
			checkInputUsername = false;
		} else {
			errorUsername.html("OK");
			checkInputUsername = true;
		}

		if (password.val() == "" || password.val() == null) {				/* Check Format Password*/	
			errorPassword.html("Please enter password");
			checkInputPassword = false;
		} else if (password.val().length < 8) {
			errorPassword.html("Password min length 8 letter");
			checkInputPassword = false;
		} else if (!checkValidate(password.val())) {
			errorPassword.html("Password wrong format");
			checkInputPassword = false;
		} else {
			errorPassword.html("OK");
			checkInputPassword = true;
		}

		if (email.val() == "" || email.val() == null) {						/* Check Format Email*/	
			errorEmail.html("Please enter email");
			checkInputEmail = false;
		} else if (!checkValidateEmail(email.val())) {
			errorEmail.html("Email wrong format");
			checkInputEmail = false;
		} else {
			errorEmail.html("OK");
			checkInputEmail = true;
		}
		
		if (!checkValidateBirthday(birthday.val())) {						/* Check Format Birthday*/	
			errorBirthday.html("Birthday wrong format");
			checkInputBirthday  = false;
		} else {
			errorBirthday.html("OK");
			checkInputBirthday = true;
		}
		var xhttp = new XMLHttpRequest(); // XMLHttpRequest
		document.getElementById("status").innerHTML = ""; 
		/*var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var email = document.getElementById("email").value;
		var birthDay = document.getElementById("day-present").value;*/
		var data = "username=" + username + "&password=" + password + "&email=" + email + "&birthday=" + birthday;
		if (checkInputUsername && checkInputPassword && checkInputEmail && checkInputBirthday) {
			if (window.XMLHttpRequest) {
				// code for modern browsers
				xhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById("status").innerHTML = xhttp.responseText;
				}
			};
			
			// Send data to login.php
			xhttp.open("POST", "login.php", true);
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhttp.send(data);
		} else {
			return false;
		}
	});
	
	$(".btn_ref").click(function() {
		$("#day-present").val("");
		$("#username").val("");
		$("#password").val("");
		$("#email").val("");
		
		$("#validate_day").html("");
		$("#validate_user").html("");
		$("#validate_pass").html("");
		$("#validate_email").html("");
		$("#validate_day").html("");
	});
	
function checkValidateEmail(email) {
	var results = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,6}$/;
	return results.test(email);
}

function checkValidateBirthday (date) {		
	var birthDay = document.getElementById("day-present").value; 
	var chooseDate = new Date(birthDay);
	var today = new Date();
	var validate_day = document.getElementById("validate_day"); 
	
	if (chooseDate > today) {
		return false;
	} else {
		return true;
	}
}

function checkValidate(text) {
	var results = /^([0-9a-zA-Z])+$/;
	return results.test(text);
}
//if ((checkUsername() && checkPassword() && checkEmail() && checkBirthDay()) {
	
});