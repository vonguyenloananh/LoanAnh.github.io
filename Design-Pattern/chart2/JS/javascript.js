/**
 * Options of module chart
 */
var options = {
    canvas : myCanvas,
};
/**
 * Function main of Chart
 */
	var Chart = (function() {
    // Private
    var canvas = options.canvas;
<<<<<<< HEAD
    var graph = canvas.getContext("2d");
=======
    var ctx = canvas.getContext("2d");
>>>>>>> feature/design-pattern
    canvas.height = 1100;
    canvas.width = 1100;
    
    /**
     * Funtion to draw Arc shape
<<<<<<< HEAD
     * @param {canvas} graph
=======
     * @param {canvas} ctx
>>>>>>> feature/design-pattern
     * @param {number} point startX
     * @param {number} point startY
     * @param {number} point stopX
     * @param {number} point stopY
     * @param {number} width of line
     * @param {color} color of line
     */
<<<<<<< HEAD
    drawLine = function(graph,startX, startY, stopX, stopY, width, color) {
    graph.beginPath();
    graph.moveTo(startX, startY);
    graph.lineTo(stopX, stopY);
    graph.lineWidth= width;
    graph.strokeStyle = color;
    graph.stroke();
    } 
    /**
     * Funtion to draw Arc shape
     * @param {canvas} graph
=======
    drawLine = function(ctx,startX, startY, stopX, stopY, width, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(stopX, stopY);
    ctx.lineWidth= width;
    ctx.strokeStyle = color;
    ctx.stroke();
    } 
    /**
     * Funtion to draw Arc shape
     * @param {canvas} ctx
>>>>>>> feature/design-pattern
     * @param {pixel font} font text
     * @param {number} point startX
     * @param {number} point startY
     * @param {color} color of text
     */
<<<<<<< HEAD
    drawText = function(graph,font, text, startX, startY, color) {
      graph.font= font;
      graph.fillStyle= color;
      graph.fillText(text,startX,startY);
=======
    drawText = function(ctx,font, text, startX, startY, color) {
      ctx.font= font;
      ctx.fillStyle= color;
      ctx.fillText(text,startX,startY);
>>>>>>> feature/design-pattern
    }
    /**
     * Function to draw chart2
     */
    function drawChart2() {
<<<<<<< HEAD
        graph.beginPath();
        graph.moveTo(90, 300);
        graph.quadraticCurveTo(100, 310, 150, 160)
        graph.bezierCurveTo(220, -10, 180, 550, 280, 150);
        graph.quadraticCurveTo(300, 90, 330, 180)
        graph.quadraticCurveTo(350, 200, 400, 170)
        graph.quadraticCurveTo(420, 155, 440, 150)
        graph.lineTo(450, 150);
        graph.lineJoin = 'round';
        graph.lineWidth = 4;
        graph.strokeStyle = '#00aeef';
        graph.stroke();
=======
        ctx.beginPath();
        ctx.moveTo(90, 300);
        ctx.quadraticCurveTo(100, 310, 150, 160)
        ctx.bezierCurveTo(220, -10, 180, 550, 280, 150);
        ctx.quadraticCurveTo(300, 90, 330, 180)
        ctx.quadraticCurveTo(350, 200, 400, 170)
        ctx.quadraticCurveTo(420, 155, 440, 150)
        ctx.lineTo(450, 150);
        ctx.lineJoin = 'round';
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#00aeef';
        ctx.stroke();
>>>>>>> feature/design-pattern
        }
    /**
     * Function to draw coordinate axis in chart2
     */
    function drawLineChart2() {
<<<<<<< HEAD
        drawLine(graph,60,450,500,450,2,"black");
        drawLine(graph,60,450,60,20,2,"black");
=======
        drawLine(ctx,60,450,500,450,2,"black");
        drawLine(ctx,60,450,60,20,2,"black");
>>>>>>> feature/design-pattern
    }
    /**
     * Function to draw text in chart2
     */
    function drawTextChart2() {
<<<<<<< HEAD
        drawText(graph,"40px Arial", 0, 30, 450, "black");
        drawText(graph,"40px Arial", 1, 30, 360, "black");
        drawText(graph,"40px Arial", 2, 30, 270, "black");
        drawText(graph,"40px Arial", 3, 30, 180, "black");
        drawText(graph,"40px Arial", 4, 30, 90, "black");
=======
        drawText(ctx,"40px Arial", 0, 30, 450, "black");
        drawText(ctx,"40px Arial", 1, 30, 360, "black");
        drawText(ctx,"40px Arial", 2, 30, 270, "black");
        drawText(ctx,"40px Arial", 3, 30, 180, "black");
        drawText(ctx,"40px Arial", 4, 30, 90, "black");
>>>>>>> feature/design-pattern
    }
    //Return value for function draw
    return {
        draw: drawLineChart2,
        drawChart: drawChart2,
        drawText: drawTextChart2,
    }
})();
$(document).ready(function() {
    Chart.draw();
    Chart.drawChart();
    Chart.drawText();
});
 