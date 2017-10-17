var NOW = new Date(); 
var CUR_DAY = NOW.getDate();  
var CUR_MON = NOW.getMonth(); 
var CUR_YEAR = NOW.getFullYear(); 
var CELL_DAYS = document.getElementsByTagName('td'); 
var LISTMONTH = document.getElementById("select_months"); 
var LISTYEAR = document.getElementById("select_years"); 
showListYear();  
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
		CELL_DAYS[i].innerHTML = "";
		CELL_DAYS[i].style.backgroundColor = "white";
	}
	//write number into the cells
	for (var i = 1; i <= lastDate; i++) {
		CELL_DAYS[day].innerHTML = i;
		day++;
	}
	//it will set color "blue" for current day (in pc) on calender  
	if (year === NOW.getFullYear()) {
		if (month === NOW.getMonth()) {
			var showCurdate = 12 + firstDay + NOW.getDate();
			CELL_DAYS[showCurdate].style.backgroundColor = "blue";
		} 
	}
	showTimeBox(); //show CUR_MON and CUR_YEAR on combobox
}

//show list year in combobox of year
function showListYear() {
	var i;

	for (i = 1900; i < 2100; i++) {
		LISTYEAR.innerHTML += "<option value='" + i + "'>" + i + "</option>";
	}
	drawCalender(CUR_YEAR, CUR_MON);
}
// show current date (update from pc) into the combobox-month and combobox-year
function showTimeBox() {
	LISTMONTH.value = CUR_MON;
	LISTYEAR.value = CUR_YEAR;
}

//Building a combobox to display month
function chooseMonth(month) {
	CUR_MON += month;
	if (CUR_MON < 0) {
		CUR_MON = 11;
		CUR_YEAR -= 1;
	}
	if (CUR_MON > 11) { 
		CUR_MON = 0;
		CUR_YEAR += 1;
	}
	checkTime();
	drawCalender(CUR_YEAR,CUR_MON);
}

//Building a combobox to display years
function checkTime() {
	if (CUR_YEAR < 1900) {
		CUR_YEAR = 1900;
	}
	if (CUR_YEAR >= 2100) {
		CUR_YEAR = 2099;
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
	CUR_YEAR = parseInt(CUR_YEAR) + parseInt(year);
	checkTime();
	drawCalender(CUR_YEAR,CUR_MON);
}

//it use for combobox choose fast month
function chooseFastMonth() {
	CUR_MON = parseInt(LISTMONTH.value);
	drawCalender(CUR_YEAR, CUR_MON);
}

//it use for combobox choose fast year
function chooseFastYear() {
	CUR_YEAR = parseInt(LISTYEAR.value);
	drawCalender(CUR_YEAR, CUR_MON);
}

//function choose day by click at the cell of the table
function chooseAnyDay() {
	var pickedDay = document.getElementById("day-present");
	pickedDay.value = CUR_DAY + "/" + (CUR_MON + 1) + "/"+ CUR_YEAR;
	var i, picked_cell;

	for (i = 13; i < 55; i++) {
		CELL_DAYS[i].addEventListener("click", function() {
			var dayCheck = this.innerHTML;

			for (var j = 13; j < 55; j++) {
				CELL_DAYS[j].style.border = "";
			}
			this.style.border = "1px solid blue";

			if (dayCheck != "") {
				pickedDay.value = dayCheck + "/" + (CUR_MON + 1) + "/"+ CUR_YEAR;
			}
		});
	}
}