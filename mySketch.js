 function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	
}

function draw() {
background("#d6e2e9");
noFill();
for(var x=0;x<width;x=x+50){
for(var y=0;y<height;y=y+50){
var S= map(mouseX,0,width,0,25);
stroke("#fbc3bc")	 
rectMode(CENTER);
rect(x,y,50+S);//方形
stroke("#723d46")	
strokeWeight(3);
ellipse(x+25,y+25,15+S);//大圓
stroke("#64b5f6")	
ellipse(x+50,y+50,50+S);//小圓
stroke("#709775")
rect(x+60,y+60,50+S)//方形	
  }	
 }
}
//  for(var x=0;x<width;x=x+50){
//  for(var y=0;y<height;y=y+50){
//  var S= map(mouseX,0,width,0,25);
// noFill(); 
// stroke("#fbc3bc")	 
// rectMode(CENTER);
// rect(x,y,50+S);//方形
// //ellipseMode(CENTER);
// stroke("#723d46")	
// strokeWeight(3);
// ellipse(x+25,y+25,15+S);//大圓
// //ellipseMode(CENTER);
// stroke("#64b5f6")	
// ellipse(x+50,y+50,50+S);//小圓
// stroke("#709775")		 
// rect(x+60,y+60,50+S)//方形
// 	}
//  }
// }