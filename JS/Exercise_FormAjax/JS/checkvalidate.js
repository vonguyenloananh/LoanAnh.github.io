// Set Username
function checkUsername() {
	var usernameRegex = new RegExp("^[A-Za-z0-9]+$"); //username has not any special character
	var username = document.getElementById("username").value;
	var validate_user = document.getElementById("validate_user");
	if(username.length < 8) {
		validate_user.innerHTML = "Username length min 8 letter";
		validate_user.style.color = "red";
		return false;
	}
	else if(!usernameRegex.test(username)) {
		validate_user.innerHTML = "Username have some special character!";
		validate_user.style.color = "red";
		return false;
	}
	else { 
		validate_user.innerHTML = "OK"; 
		validate_user.style.color = "green";
		return true;
	} 
}

// Set Password
function checkPassword() {
	var password = document.getElementById("password").value;
	var validate_pass = document.getElementById("validate_pass");
	if(password.length < 8) {
		validate_pass.innerHTML = "Password length min 8 letter";
		validate_pass.style.color = "red";
		return false;
	}
	else { 
		validate_pass.innerHTML = "OK"; 
		validate_pass.style.color = "green";
		return true;
	}		
}

// Set Email
function checkEmail() {
	var emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$"); //username has not any special character
	var email = document.getElementById("email").value;
	var validate_email = document.getElementById("validate_email");
	if(!emailRegex.test(email)) {
		validate_email.innerHTML = "Email wrong format";
		validate_email.style.color = "red";
		return false;
	}
	else { 
		validate_email.innerHTML = "OK"; 
		validate_email.style.color = "green";
		return true;
	}
}

// Set Birthday 
function checkBirthDay() {
	var birthDayRegex = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
	var birthDay = document.getElementById("day-present").value;
	var validate_day = document.getElementById("validate_day");
	if (!birthDayRegex.test(birthDay)) {
		validate_day.innerHTML = "Birthday wrong format";
		validate_day.style.color = "red";
		return false;
	}
	else {
		validate_day.innerHTML = "OK";
		validate_day.style.color = "green";
		return true;
	}
}

// Set Reset all information
function refresh() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var email = document.getElementById("email");
	var picked_day = document.getElementById("day-present");
	var validate_user = document.getElementById("validate_user");
	var validate_pass = document.getElementById("validate_pass");
	var validate_email = document.getElementById("validate_email");
	var validate_day = document.getElementById("validate_day");
	var calendar = document.getElementsByClassName("calendar"); 

	username.value = "";
	password.value = "";
	email.value = "";
	picked_day.value = "";

	username.innerHTML = "";
	password.innerHTML = "";
	email.innerHTML = "";
	picked_day.innerHTML = "";

	validate_user.innerHTML = "";
	validate_pass.innerHTML = "";
	validate_email.innerHTML = "";
	validate_day.innerHTML = "";
	//set calendar is non-display and text for check bellow server is ""
	calendar[0].style.display = "none";
	document.getElementById("txtHint").innerHTML = "";
}
// Set Submit
function clickSubmit() {
	var xmlhttp;
	//if all info is true, it will be sent to server
	if(checkUsername() && checkPassword() && checkEmail() && checkBirthDay()) {
		var checkedUser = document.getElementById("username").value;
		var checkedPassword = document.getElementById("password").value;
		var checkedEmail = document.getElementById("email").value;
		var checkedDay = document.getElementById("day-present").value;
		var calendar = document.getElementsByClassName("calendar");
		calendar[0].style.display = "none"; // when click "submit", calendar will disappear
		var url = "username=" + checkedUser + "&password=" + checkedPassword + 
		   "&email=" + checkedEmail + "&calen=" + checkedDay;
		if(url.length == 0) {
		  	document.getElementById("txtHint").innerHTML = "";
		  	return;
		} else if(window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		}
		else {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("txtHint").innerHTML = this.responseText;
			} else {
				console.log("HTTP Error: " + " " + this.status + " " + this.statusText);
			}
		};
		xmlhttp.open("GET", "gethint.php?"+ url, true);
		xmlhttp.send();   
	}
	else return false;
}