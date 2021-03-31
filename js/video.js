
var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML=video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate*=0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate/=0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value)
	var slider = this.value;
	video.volume = slider/100;
	document.querySelector('#volume').innerHTML=video.volume * 100 + "%"

});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
});

document.querySelector("#mute").addEventListener("click", function() {
	
	if (video.muted===false){
		video.muted=true;
		document.querySelector('#mute').innerHTML="Unmute"
	}
	else{
		video.muted=false;
		document.querySelector('#mute').innerHTML="Mute"
	}
	
});

document.querySelector("#skip").addEventListener("click", function() {
	
	console.log("Original Location " + video.currentTime);
	video.currentTime=video.currentTime+15;
	if (video.currentTime===67.403333){
		video.currentTime=0
		console.log("Going back to beginning");
	}
	console.log("New Location " + video.currentTime);
});