/**
 * 打地鼠游戏
 */
var time = 59; //时间,默认为1分钟，即59秒
var timeBox = document.querySelector("#time"); //显示时间的盒子
var score = 0; //得分
var scoreBox = document.querySelector("#score"); //显示得分的盒子
var level = 1000; //难度，即生成地鼠的时间频率，默认为1秒，也就是1000毫秒
var laughBox = document.querySelector("#mshow"); //笑的音效盒子
var cryBox = document.querySelector("#mcry"); //哭的音效盒子
var controlBtn = document.querySelector("#begin"); //控制按钮
var maps = document.querySelectorAll(".table>div>div"); //地图，为生成地鼠的单元格


var timerForT = null; //时间计时器
var timeForM = null; //地鼠生成计时器
/**
 * 时间显示函数
 */
function showTime() {
	
	timeBox.innerHTML=time<10?("0"+time.toString()):time.toString();
	time--;
	if(time<0){
		clearInterval(timerForT);
		clearInterval(timeForM);
		
	}
	
}
/**
 *随机生成地鼠
 */
function showMouse() { //随机生成地鼠
	var shuijishu=Math.round(Math.random()*100)%maps.length;
	
	for(var i=0;i<maps.length;i++){
		if(i==shuijishu){
			
			maps[i].innerHTML="<img src='images/init.png'/>";
			
			maps[i].setAttribute("v",1);
		
			laughBox.play();
		}else{
			maps[i].innerHTML="";
			
			maps[i].setAttribute("v",0);
		}
	}
}

/**
 * 打地鼠
 */
function breakMouse() { 
	
	if(event.target.parentNode.getAttribute("v")==1){
		score++;
		event.target.src="images/break.png";
		cryBox.play();
		scoreBox.innerHTML=score.toString();
		event.target.parentNode.setAttribute("v",0);
		
	}
}

/**
 * 开始游戏
 */
function gameStart() {
	time=59;
	score=0;
	controlBtn.innerHTML="结&nbsp;束";
	controlBtn.setAttribute("s",1);
	tbegin=window.setInterval("showMouse()",level);
	
	tend=window.setInterval("showTime()",1000);


}
/**
 * 结束游戏
 */
function gameFinish() {
	controlBtn.innerHTML="开&nbsp;始";
	controlBtn.setAttribute("s",0);
	clearInterval(tbegin);
	clearInterval(tend);
	
}

/**
 * 游戏初始化
 */
function gameInit() { 
	controlBtn.innerHTML="开&nbsp;始";
	controlBtn.setAttribute("s",0);
	for(var i=0;i<maps.length;i++){
			maps[i].addEventListener("click",breakMouse);
	}
	controlBtn.addEventListener("click",function(){
		if(event.target.getAttribute("s")==0){
			
			gameStart();
			}else{
				gameFinish();
			}
		
	});
}
