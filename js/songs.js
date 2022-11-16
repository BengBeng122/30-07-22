var songs = [
	"audio/JustGiveMeaReason-PnkNateRuess.mp3",
	"audio/AThousandYears-christinaperri.mp3",
	"audio/ImYours-JasonMraz.mp3",
	"audio/I-Do-911.mp3"
];
var audio = new Audio();
var count = 0;

function switchAudio() {
	if(!audio.paused) {
		audio.pause();
		audio.load();
	}

	audio.src = songs[count++];
	audio.volume = 0.35;
	
	audio.addEventListener('ended', function() {
		audio.pause();
		audio.load();

		audio.src = songs[count++];
		if(count >= songs.length) count = 0;
		
		audio.play();
	});

	if(count >= songs.length) count = 0;

	audio.play();
}