var index = 0;
var time_interval = 5000;
var img_list = new Array;
var img = new Image();

var alpha = 0;
var value = 0.01;

// img_list[0] = "images/bg001~1.png";
// img_list[1] = "images/bg002~1.png";
// img_list[2] = "images/bg003~1.png";


// img_list[0] = "images/bg001.png";
// img_list[1] = "images/bg002.png";
// img_list[2] = "images/bg003.png";

img_list[0] = "images/bg001.webp";
img_list[1] = "images/bg002.webp";
img_list[2] = "images/bg003.webp";

// setInterval(changeImg, time_interval);

function changeImg(){
	if(index == img_list.length - 1){
		index = 0;
	}else{
		index ++;
	}
	
	img.src = img_list[index];
	
	// setInterval(changeAlpha, 50);
	
	document.body.style.backgroundImage = "url("+ img_list[index]+")";
	// document.body.style.opacity = 0.5;
	// document.getElementById("main_div").style.backgroundImage = "url("+ img_list[index]+")";
}





// function changeAlpha(){
// 	if(alpha + 0.1 > 1){
// 		alpha = 0;
// 	}else if(alpha - 0.1 < 0){
// 		alpha = 0;
// 	}else{
// 		alpha += value;
// 	}
// 	// return alpha;
// 	document.body.style.opacity = alpha;
// }

// document.getElementById("main_body").style.backgroundImage = "URL("+ img_list[index]+")";

// document.getElementById("main_body").style.backgroundImage = "url(images/bg001.png)";
