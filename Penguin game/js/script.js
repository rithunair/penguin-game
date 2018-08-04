
function instructions(){
	alert("This is a game of instinct and luck. The 9 pods below contain 8 penguins and one yeti. Try to catch all 8 penguins without alerting the Yeti!");
}

var clickCount = 0;
function startGame(){
	var gameBox = document.getElementById("game");
	gameBox.style.visibility="visible";
	
	//Get all pods
	var pods = document.getElementsByClassName("pod");
	
	//set all of the pods to initial stage
	document.getElementById("gameOver").style.visibility = "hidden";
	for(var i=0;i<pods.length;i++){
		pods[i].src = "image/mound.png";
		pods[i].clicked = false;
		pods[i].style.opacity="1";
	}
	
	//initialize initial array that will hold positions of penguins and yeti
	var arr=[];
	var index=0;
	for(var i=pods.length-1;i>=0;i--){
		arr[index]=i;
		index++;	
	}
	
	//shuffle the array 
	arr = shuffle(arr);
	
	//assign shuffled index to each pod
	for(var i=0;i<pods.length;i++){
		pods[i].num = arr[i];
	}
    
    clickCount = 0;
	console.log(arr);
}

function checkPod(pod){
   if(!pod.clicked){
	pod.clicked = true;
	pod.src = "image/penguin" + pod.num + ".png";
    clickCount++;
    
    //If you found all eight penguins before the yeti
    if(clickCount==8){
        document.getElementById("gameOver").innerHTML = "Congratulations! <br> You have saved all the penguins! <br>Start new game to play again.";
        document.getElementById("gameOver").style.visibility = "visible";
		var allPods =document.getElementsByClassName("pod");
		for(var i=0;i<allPods.length;i++){
				allPods[i].style.opacity="0.2";
				allPods[i].clicked = true;
		}
    }
	
	//If pod contains yeti
	if(pod.num==8){
        document.getElementById("gameOver").innerHTML = "Whoops! You woke up the Yeti!<br> GAME OVER!";
		document.getElementById("gameOver").style.visibility = "visible";
		var allPods =document.getElementsByClassName("pod");
		for(var i=0;i<allPods.length;i++){
				allPods[i].style.opacity="0.2";
				allPods[i].clicked = true;
		}
	}
   }
}

function MouseOver(pod){
	if(!pod.clicked)
		pod.src="image/mound_hover.png";
}

function MouseOut(pod){
    if(!pod.clicked)
    	pod.src="image/mound.png";
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}