/**
* value of module chart
*/
var myvalue = {
    canvas: myCanvas,
    rowChart: 5, // set up number row for chart 
    height: 48, // set up height for column 
	width: 30, // set up width for column
    text: ["A", "B", "C", "D", "E"],// set up text column for chart 
    value: [2, 0.1, 3, 4, 4], // set up ratio between column
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
		var stepSizeY = 1;
		var maxValue = 0;
		
		var xLine = (currentX + 22);
		var yLine = (currentY - 8);
			
		for (limit in value) {
			if(value[limit] > maxValue) {
				maxValue = value[limit] + 1;
			}
		}
		var margin = 10; //Distance of write letters
		var xScale = (myChart.width - size) / value.length; //width x of column
		var yScale = (myChart.height - size - margin) / maxValue;  //distance between each honrizontal line
        // Draw background for chart
		ctx.font = "14px Arial";
		for (var i = myvalue.rowChart - 1; i >= 0; i--) {
			ctx.fillText(i, currentX, yLine + 3);
			drawLine(ctx, xLine, yLine, xLine + (size + width) * myvalue.rowChart, yLine);
			yLine += size;
		}
		yLine -= size;
        //Draw name of column
		for (var i = 0; i < myvalue.rowChart; i++) {
			ctx.fillText(myvalue.text[i], beginX + 21, beginY + size + 20);
			beginX += width + size;
		}
		//Draw column chart
		ctx.fillStyle = myvalue.colorColumn;
		var xCol = xLine;
		for (var i = 0; i < value.length; i++) {	
			ctx.fillRect(xCol, yLine - value[i] * size, size, value[i] * size);
			xCol += (size + width);
		}
		ctx.beginPath();
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