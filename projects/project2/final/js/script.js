

// switch (https://stackoverflow.com/questions/44565816/javascript-toggle-switch-using-data)
document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      playAudio();
      changeArmPosition();
      spinning();
      console.log("switch");
    } else {
      pauseAudio();
      restartArmPosition();
    }
  });
});
// audio object
const song = document.querySelector('#audioFile');
//song cover object
const song_cover = document.querySelector('#song_cover');
// song name object
const song_name = document.querySelector('.song_name');
//array of songs, covers and names to be able to go next, previous and shuffle
songIndex = 0;
songs = ['assets/images/songs/Orange Stick - Memories.mp3', 'assets/images/songs/Orange Stick - Yellow.mp3', 'assets/images/songs/Koosen - Better Together.mp3']; // object storing paths for audio objects
song_covers = ['assets/images/covers/memories.png', 'assets/images/covers/yellow.png', 'assets/images/covers/better together.png']; // object storing paths for audio objects
song_names = ['Memories', 'Yellow', 'Better together'];

//variable to
number_of_Songs = songs.length;
console.log("number of songs = " + number_of_Songs);
let playing = true;

//shuffle function, picks a random item from the array
//the the song's info get the same item since theyre follwoing the songIndex
//Math.floor(Math.random() * songs.length): taken from https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array

function shuffleSong() {
  songIndex = Math.floor(Math.random() * songs.length)
  song.src = songs[songIndex];
  song_cover.src = song_covers[songIndex];
  song_name.innerHTML = song_names[songIndex];
  console.log(song_name.innerHTML)
  playing = true;
  playAudio();

}
// next song function, loop for choosing the next item off the array
function nextSong() {
  songIndex++;
  if (songIndex >= number_of_Songs) { //number_of_Songs so it goes back to the first song when the list is over
    songIndex = 0;
  };
  song.src = songs[songIndex];
  song_cover.src = song_covers[songIndex];
  song_name.innerHTML = song_names[songIndex];
  playing = true;
  playAudio();
}
//same as next song function but the opposite
function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = number_of_Songs - 1;
  };
  song.src = songs[songIndex];
  song_cover.src = song_covers[songIndex];
  song_name.innerHTML = song_names[songIndex];
  playing = true;
  playAudio();
}
//this function is called when clicking on any control button, gets the elemnt by its ID
function playAudio() {
  var song = document.getElementById("audioFile");
  var song_cover = document.querySelector('#song_cover');

  song.play();
}

function pauseAudio() {
  song.pause();
}

function changeArmPosition() {
  document.getElementById("arm").style.transform = 'rotate(-5deg)';
};
function restartArmPosition() {
  document.getElementById("arm").style.transform = 'rotate(-26deg)';
};
function spinning() {
    document.getElementById("record").style.animation = 'spin (4s linear infinite);';
};


$(function() {
  // Disables next / prev / shuffle when power off
  $('.power').on('click', function() {
    $(".controls").toggleClass('no-click');
  });

});

// making the stickers draggable
$(".sticker").draggable();
