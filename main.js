// set constants to make it easier
const FRAME_HEIGHT = 1000;
const FRAME_WIDTH = 1000;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

// add frame
//  need the # to specify it is an id
const FRAME1 = 
d3.select("#vis1")
	.append("svg")
	.attr("height", FRAME_HEIGHT)
	.attr("width", FRAME_WIDTH)
	.attr("class", "frame");


// Put a circle in the frame
// recommended to move the attributes based on the margins
FRAME1.append("rectangle")
		.attr("x", 10 + MARGINS.left)
		.attr("y", 10 + MARGINS.top)
		.attr("width", 10 + MARGINS.left)
		.attr("height", 10 + MARGINS.top)
		.attr("class", "firstCircle");


const data = [55000]