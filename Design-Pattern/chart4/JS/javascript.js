/**
* value of module chart
*/
var myvalue = {
    canvas: myCanvas,
    rowChart: 5, // set up number row for chart 
    height: 48, // set up height for column 
	width: 30, // set up width for column
    text: ["A", "B", "C", "D", "E"],// set up text column for chart 
    value: [2, 0.5, 3, 4, 4], // set up ratio between column
    colorColumn: "#3366cc", // set up color of column in chart
    colorText: "#000000",  // set up color of text in chart
    colorLine: "gray",  // set up color of line in chart
};
/**
* value location of chart
*/
var myChart = {
    currentX: 363, // set up location of chart
    currentY: 180, // set up location of chart
    width: 450,  // set up width of chart
    height: 300, // set up height of chart
}
/**
* Function main of Chart
*/
var Chart = (function () {
    var canvas = myvalue.canvas;
    var ctx = canvas.getContext("2d"); 
	canvas.width = 1000;
    canvas.height = 1000;
    var currentX = myChart.currentX;
    var currentY = myChart.currentY;
    //canvas.height = myChart.height;
    //canvas.width = myChart.width;
	var checkValue = true;
    /**
     * Funtion to draw Line
     * @param {canvas} ctx
     * @param {number} point startX
     * @param {number} point startY
     * @param {number} point stopX
     * @param {number} point stopY
     * @param {color} color of line
     */
    function drawLine(ctx, startX, startY, stopX, stopY, color) {
        ctx.moveTo(startX, startY);
        ctx.lineTo(stopX, stopY);
        ctx.fillStyle = color;
        ctx.stroke();
    }
    /**
     * Funtion to draw text
     * @param {canvas} ctx
     * @param {pixel font} font text
     * @param {number} point startX
     * @param {number} point startY
     * @param {color} color of text
     */
    drawText = function(ctx,font, text, startX, startY, color) {
      ctx.font= font;
      ctx.fillStyle= color;
      ctx.fillText(text,startX,startY);
    }

    function drawTextChart() {
        drawText(ctx,"18px Arial"," LEVEL", 800, 220, "black");
        drawText(ctx,"18px Arial"," OF", 800, 240, "black");
        drawText(ctx,"18px Arial"," POSITION", 800, 260, "black");
    }
    /**
     * Funtion to draw Arc shape
     * @param {canvas} ctx
     * @param {number} point startX
     * @param {number} point startY
     * @param {color} color of text
     */
    drawIcon = function(ctx,startX,startY,stopX,stopY,color) {
        ctx.fillStyle= color;
        ctx.fillRect(startX,startY,stopX,stopY);
    }
    function drawIcon1() {
        drawIcon(ctx,800,170,63,25,"#3366cc");
    }
    /**
     * Funtion to draw Chart
     */
    function drawChart() {
        var height = myvalue.height;
        var size = 50;
        var width = myvalue.width;
        var value = myvalue.value;
        var beginX = (currentX + 22);
        var beginY = (currentY - 8) + size * 3;
        var temp = 0;
		var stepSizeY = 1;
		var maxValue = 0;
		var yMin;
		for (limit in value) {
			if(value[limit] > maxValue) {
				maxValue = value[limit] + 1;
			}
		}
		var margin = 10; //Distance of write letters
		var xScale = (myChart.width - size) / value.length; //width x of column
		var yScale = (myChart.height - size - margin) / maxValue;  //distance between each honrizontal line
        // Draw background for chart
        for (var i = myvalue.rowChart - 1; i >= 0; i--) {
            drawLine(ctx, currentX + 22, (currentY - 8) + temp, currentX + 22 + (size + width) * myvalue.rowChart, (currentY - 8) + temp);
            temp += height;
            ctx.font = "14px Arial";
            ctx.fillText(i, currentX, currentY + temp - height - 6);
        }
		yMin = (currentY - 8) + temp;
        //Draw name of column
		for (var i = 0; i < myvalue.rowChart; i++) {
			ctx.fillText(myvalue.text[i], beginX + 15, beginY + size + 15);
			beginX += width + size;
		}
		var temp = 1;
		//Draw column chart
		//ctx.translate(currentX + 22 + 0.5, yMin); //position first column 
		//ctx.scale(xScale, - yScale); //Invert the column which following y-axis, because y-axis is a top line of screen
		ctx.beginPath();
		ctx.fillStyle = myvalue.colorColumn;
		var tempX = currentX;
		for (var i = 0; i < value.length; i++) {	
			ctx.fillRect(tempX + 22, yMin, 0.5, value[i]);
			tempX += 1;
		} 	
	}
	
	/**
     * Funtion to draw Chart1
	 * check max value input
	 * draw chart
     */
	function drawChart1() {
		// Check max value	
		for (var limit in myvalue.value) {
			if(myvalue.value[limit] <= 0 || myvalue.value[limit] > 4) {
				checkValue = false;
			}
		}
		if (checkValue){
			drawChart();
			drawTextChart();
			drawIcon1();
		} else {
				alert("Invalid Input Limit");	
		}
	}
    return {
        draw : drawChart1
    }
})();
$(document).ready(function() {
    Chart.draw();
});
