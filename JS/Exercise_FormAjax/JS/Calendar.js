var today = new Date();
var calendar = document.getElementsByClassName("calendar"); 
var currentDay = today.getDate();  
var currentMonth = today.getMonth(); 
var currentYear = today.getFullYear(); 
var cell_day = document.getElementsByTagName('td'); 
var listMonth = document.getElementById("select_months"); 
var listYear = document.getElementById("select_years"); 
var presentDay = document.getElementById("day-present");
showlistYear();  
chooseAnyDay(); 

//Creating a calendar's frame
function drawCalender(year, month) {
	parseInt(year);
	parseInt(month);
	var firstDay = new Date(year, month, 1).getDay(); 
	var lastDate = new Date(year, month + 1, 0).getDate(); 
	var i, day;
	day = 13 + firstDay;
	//cells from 13 to 55 is the days of a months
	for (var i = 13; i < 55; i++) {
		cell_day[i].innerHTML ="";
		cell_day[i].style.backgroundColor = "white";
	}
	//write number into the cells
	for (var i = 1; i <= lastDate; i++) {
		cell_day[day].innerHTML = i;
		day++;
	}
	//it will set color "blue" for current day (in pc) on calender  
	if (year === today.getFullYear()) {
		if (month === today.getMonth()) {
			var showCurdate = 12 + firstDay + today.getDate();
			cell_day[showCurdate].style.backgroundColor = "blue";
		} 
	}
	showTimeBox(); //show currentMonth and currentYear on combobox
}

//show list year in combobox of year
function showlistYear() {
	var i;

	for (i = 1900; i < 2100; i++) {
		listYear.innerHTML += "<option value='" + i + "'>" + i + "</option>";
	}
	drawCalender(currentYear, currentMonth);
}
// show current date (update from pc) into the combobox-month and combobox-year
function showTimeBox() {
	listMonth.value = currentMonth;
	listYear.value = currentYear;
}

//Building a combobox to display month
function chooseMonth(month) {
	currentMonth += month;
	if (currentMonth < 0) {
		currentMonth = 11;
		currentYear -= 1;
	}
	if (currentMonth > 11) { 
		currentMonth = 0;
		currentYear += 1;
	}
	checkTime();
	drawCalender(currentYear,currentMonth);
}

//Building a combobox to display years
function checkTime() {
	if (currentYear < 1900) {
		currentYear = 1900;
	}
	if (currentYear >= 2100) {
		currentYear = 2099;
	}
}

//Function to handle a leapyear
function LeapYear(year) {
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
		return true;
	}
}

//When you choose a year, it will be show the current month of this year 
function chooseYear(year) {
	currentYear = parseInt(currentYear) + parseInt(year);
	checkTime();
	drawCalender(currentYear,currentMonth);
}

//it use for combobox choose fast month
function chooseFastMonth() {
	currentMonth = parseInt(listMonth.value);
	drawCalender(currentYear, currentMonth);
}

//it use for combobox choose fast year
function chooseFastYear() {
	currentYear = parseInt(listYear.value);
	drawCalender(currentYear, currentMonth);
}

//function choose day by click at the cell of the table
function chooseAnyDay() {
	var pickedDay = document.getElementById("day-present");
	pickedDay.value = currentYear + "-" + (currentMonth + 1) + "-"+  currentDay;
	var i, picked_cell;

	for (i = 13; i < 55; i++) {
		cell_day[i].addEventListener("click", function() {
			var dayCheck = this.innerHTML;

			for (var j = 13; j < 55; j++) {
				cell_day[j].style.border = "";
			}
			this.style.border = "1px solid blue";

			if (dayCheck != "") {
				pickedDay.value = currentYear + "-" + (currentMonth + 1) + "-"+ dayCheck;
				calendar[0].style.display = "none";
			}
		});
	}
}

presentDay.addEventListener("click", function() {
		calendar[0].style.display = "block";
});