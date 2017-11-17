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
    var graph = canvas.getContext("2d");
    canvas.height = 1100;
    canvas.width = 1100;
    
    /**
     * Funtion to draw Arc shape
     * @param {canvas} graph
     * @param {number} point startX
     * @param {number} point startY
     * @param {number} point stopX
     * @param {number} point stopY
     * @param {number} width of line
     * @param {color} color of line
     */
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
     * @param {pixel font} font text
     * @param {number} point startX
     * @param {number} point startY
     * @param {color} color of text
     */
    drawText = function(graph,font, text, startX, startY, color) {
      graph.font= font;
      graph.fillStyle= color;
      graph.fillText(text,startX,startY);
    }
    /**
     * Function to draw chart2
     */
    function drawChart2() {
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
        }
    /**
     * Function to draw coordinate axis in chart2
     */
    function drawLineChart2() {
        drawLine(graph,60,450,500,450,2,"black");
        drawLine(graph,60,450,60,20,2,"black");
    }
    /**
     * Function to draw text in chart2
     */
    function drawTextChart2() {
        drawText(graph,"40px Arial", 0, 30, 450, "black");
        drawText(graph,"40px Arial", 1, 30, 360, "black");
        drawText(graph,"40px Arial", 2, 30, 270, "black");
        drawText(graph,"40px Arial", 3, 30, 180, "black");
        drawText(graph,"40px Arial", 4, 30, 90, "black");
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
 