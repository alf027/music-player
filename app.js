var butArr = document.getElementsByClassName('fa');
var audArr = document.getElementsByTagName('audio');

var header = document.getElementsByTagName('h1')[0];
var songNames = document.getElementsByTagName('h2');

var playOne = document.getElementById('playOne');
var playTwo = document.getElementById('playTwo');
var playThree = document.getElementById('playThree');
var playFour = document.getElementById('playFour');
//
//var audioOne = document.getElementById('one');
//var audioTwo = document.getElementById('two');
//var audioThree = document.getElementById('three');
//var audioFour = document.getElementById('four');

var stopAll = function() {
	for (var i = 0; i < audArr.length; i++) {
		audArr[i].pause();
	}
//	audioOne.pause();
//	audioTwo.pause();
//	audioThree.pause();
//	audioFour.pause();
};

var resetButtons = function() {
	for (var i = 0; i< butArr.length; i++) {
		butArr[i].className = "fa fa-play";
	}

};

var setHeader = function(button, index) {
	header.innerHTML = 'Now Playing: ' + songNames[index].innerHTML;
};

var play = function(button, audio, index) {
	if (button.classList[1] === "fa-play"){
		resetButtons();
		stopAll();
		audio.play();
		setHeader(button,index);
		button.classList.remove("fa-play");
		button.classList.add("fa-stop");
	} else if (button.classList[1] === "fa-stop"){
		stopAll();
		button.classList.remove("fa-stop");
		button.classList.add("fa-play");
		header.innerHTML = 'Select a Song';
	}
};

playOne.addEventListener('click', function(){
	play(butArr[0], audArr[0], 0);
	
});

playTwo.addEventListener('click', function(){
	play(butArr[1], audArr[1], 1);
	
});

playThree.addEventListener('click', function(){
	play(butArr[2], audArr[2], 2);
	
});

playFour.addEventListener('click', function(){
	play(butArr[3], audArr[3], 3);
	
});