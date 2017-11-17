var now = new Date();
var cur_Mon = now.getMonth();
var cur_Day = now.getDate();
var cur_Year = now.getFullYear();
var calender = $('td');
var show_Year = $('#select_years');
var show_Month = $('#select_months');
createcalender(cur_Year, cur_Mon);
slYear();

/**
 * Create calendar follow to Year , Month put in function
 */
function createcalender(valueYear, valueMon) {
    parseInt(valueYear);
    parseInt(valueMon);
    var firstDay = new Date(valueYear, valueMon, 1).getDay(); // First Day Of Month
    var lastDate = new Date(valueYear, valueMon + 1, 0).getDate(); // Total Day Of Month
    var i;
    var iDay = 13 + firstDay; // Location start show, 13 is first location show calender
    for (i = 13; i < 55; i++) {//Create calender empty
        calender.eq(i).html("");
        calender.eq(i).css("background","white");
    }
    for (i = 1; i <= lastDate; i++) {//Write calender
        calender.eq(iDay).html(i);
        iDay++;
    }
    if (valueYear === now.getFullYear()) {//Show Time Current
        if (valueMon === now.getMonth()) {
            cDay = 12 + firstDay + now.getDate();
            calender.eq(cDay).css("background","blue");
        }
    }
    curTime();
}

// Click Prev Month
$("#prev_month").click(function() {
    cur_Mon = parseInt(cur_Mon) - 1;
	if (cur_Mon < 0) {
        cur_Mon = 11;
        cur_Year -= parseInt(1);
    }
    update()
});

// Click Next Month
$("#next_month").click(function() {
    cur_Mon = parseInt(cur_Mon) + 1;
	if (cur_Mon > 11) {
        cur_Mon = 0;
        cur_Year += parseInt(1);
    }
    update()
});

// Click Prev Year
$("#prev_year").click(function() {
    cur_Year = parseInt(cur_Year) - 1;
    update();
});

// Click Next Year
$("#next_year").click(function() {
    cur_Year = parseInt(cur_Year) + 1;
    update();
});

/*
 * Click Year. Value Year -> calender Year
 */
show_Year.change(function() {
    cur_Year = parseInt(show_Year.val());
    createcalender(cur_Year, cur_Mon);
});

/*
 * Click Month. Value Month -> calender Month of Year
 */
show_Month.change(function() {
    cur_Mon = parseInt(show_Month.val());
    createcalender(cur_Year, cur_Mon);
});

function update() {
    checkTime();
    createcalender(cur_Year, cur_Mon);
}

/*
 * Check Value Year, Mon correct
 */
function checkTime() {
	if (cur_Year > 2099) {
        cur_Year = 2099;
    }
	if (cur_Year < 1990) {
        cur_Year = 1990;
    }
}

/*
 * Show Year for Combobox Select Year
 */
function slYear() {
    var i;
    for (i = 1990; i < 2100; i++) {
        show_Year.append("<option value='" + i + "'>" + i + "</option");
    }
    createcalender(cur_Year, cur_Mon);
}

/*
 * Current Month , Year Select;
 */
function curTime() {
    show_Year.val(cur_Year);
    show_Month.val(cur_Mon);
}

/* Chose Day */
calender.click(function() {
    init_click = calender.index(this);
    init_day = calender.eq(init_click).html();
    val_click = init_day + "/" + (cur_Mon + 1) + "/" + cur_Year;
    if (init_click >= 13 && init_day > 0 && init_day < 32) {
        $('#day-present').val(val_click);
		//alert(cur_Day + "/" + (cur_Mon + 1) + "/" + cur_Year;);
    }
});

$("#show").click(function(){
    $("day-present").show();
});
