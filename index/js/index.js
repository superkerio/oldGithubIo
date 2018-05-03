// 获取min和max之间的随机整数
var getRandom = function(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
var getRandomReal=function(min,max){
	return Math.random()*(max-min+1)+min;
}
var getRandomColor = function(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
//canvas绘图函数
var drawCircle=function(x,y,r,color){
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle=color;
	ctx.fill();
}
var drawLine=function(x1,y1,x2,y2){
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}
var drawClear=function(){
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0,0,c.width,c.height);
	// console.log(c.width,c.height)  
}
//配置球的数量，大小，等相关数据
var circle=function(){
	var o={};
	o.color=function(){	
		return getRandomColor();
	}
	o.number=function(){
		var min=20;
		var max=25;		
		return getRandom(min,max);
	}
	o.r=function(){
		var min=5;
		var max=30;
		return getRandom(min,max);
	}
	o.x=function(){
		var min=0;
		var max=3840;
		return getRandom(min,max);
	}
	o.y=function(){
		var min=0;
		var max=2160;
		return getRandom(min,max);
	}
	o.speed=function(){
		var min=(-1);
		var max=1;
		return getRandomReal(min,max);
	}
	return o;
}
//运行的函数
var main=function(){
	var c=circle();
	var time=c.number();
	var color=c.color();
	// console.log(time)
	var x,y,r,s1,s2;
	var arr=[];
	function test(){
		drawClear();
		if(arr.length>0){
			for(var i=0;i<time;i++){
				var arr2=arr[i];
				x=arr2[0];
				y=arr2[1];
				r=arr2[2];
				s1=arr2[3];
				s2=arr2[4];
				// console.log(x,y,r,s1,s2);
				var red=function(){
					 if(x<0||x>3840){
					 	s1=-s1;
					 }
					 if(y<0||y>2160){
					 	s2=-s2
					 }
					 x=x+s1;
					 y=y+s2;
					drawCircle(x,y,r,color);
					// console.log(x,y,r,s1,s2);
					arr[i]=[x,y,r,s1,s2];
				}
				red();
			}
		}else{
		for(var i=0;i<time;i++){
		var x=c.x();
		var y=c.y();
		var r=c.r();
		var s1=c.speed();
		var s2=c.speed();
		// console.log(x,y,r,s1,s2);
		var red=function(){
			 if(x<0||x>3840){
			 	s1=-s1;
			 }
			 if(y<0||y>2160){
			 	s2=-s2
			 }
			 x=x+s1;
			 y=y+s2;
			drawCircle(x,y,r,color);
			// console.log(x,y,r,s1,s2);
			arr[i]=[x,y,r,s1,s2];
		}
		red();
	}	
	}
	}
	setInterval(test,1000/60)
}
main();