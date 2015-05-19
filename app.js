var header = document.getElementsByTagName('h1')[0];
var playerDiv = document.getElementsByClassName('music-player')[0];
var player = document.getElementById('player');


var songs = [
	{name: "Where I'm From", artist:"Digable Planets", source:"music/where-im-from.mp3"},
	{name: "Favorite Food", artist: "Tokyo Police Club", source:"music/favourite-food.mp3"},
	{name: "Transgender Dysphoria Blues", artist: "Against Me!", source:"music/transgender-dysphoria-blues.mp3"},
	{name: "Thrill of the Hunt", artist: "Kind of Like Spitting", source:"music/thrill-of-the-hunt.mp3"},
	{name: "Graveyard", artist: "Goliath", source:"music/Graveyard-Goliath.mp3"},
	{name: "Mesmerized By Fire", artist: "Enforcer", source:"music/Enforcer-Mesmerized By Fire.mp3"},


];

player.addEventListener("ended", function() {
			var index;
	     for (var i =0; i < songs.length; i++) {
					if (player.id === songs[i].name) {
							index = i;
						}
					}
		for (var r = 0; r < butArr.length; r++) {
				
					if (butArr[r].id === songs[index].name) {
						
						play(butArr[r + 1], songs);
						
	}
}
});


var buildLine = function(song) {
	var newIcon = document.createElement('i');
	newIcon.className= 'fa fa-play';
	newIcon.id = song.name;
	var newHeader = document.createElement('h2');
	newHeader.innerHTML = song.name + ' by ' + song.artist;
	playerDiv.appendChild(newIcon);
	playerDiv.appendChild(newHeader);
};

var buildPlayer = function(songs){
	for(var i = 0; i < songs.length; i++) {
		buildLine(songs[i]);
	}

};
buildPlayer(songs);
var buttons = document.getElementsByTagName('i');
var butArr = document.getElementsByClassName('fa');



document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'i') {
     play(event.target, songs);

  }
});

var resetButtons = function() {
	for (var i = 0; i< butArr.length; i++) {
		buttons[i].className = "fa fa-play";
	}
};



var setHeader = function(song, isPlaying) {
	if (isPlaying === true) {
		header.innerHTML = 'Now Playing: ' + '<i>' + song.name + '</i>';
	} else {
		header.innerHTML = 'Select a Song!';
	}

};

var play = function(button, songs, index) {
		for(var r = 0; r < songs.length; r++) {
			if (button.id === songs[r].name) {
				if (button.classList[1] === "fa-play"){
					resetButtons();
					button.classList.remove("fa-play");
					button.classList.add("fa-stop");
					player.src = songs[r].source;
					player.id = songs[r].name;
					player.play();
					setHeader(songs[r], true);


				} else {
					player.pause();
					player.currentTime = 0;
					button.classList.remove("fa-stop");
					button.classList.add("fa-play");
					setHeader(songs[r],false);
				}

			}
		}


};
