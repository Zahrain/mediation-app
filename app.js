const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");

    //Time Display
    const timeDisplay = document.querySelector('.time-display');

    //Duration
    const timeSelect = document.querySelectorAll(".time-select button");

    //get the length of outline
   const oulineLength = outline.getTotalLength();

    let fakeDuration = 600;
    
// console.log('outline : ' + outline.getTotalLength()); 
   outline.getElementsByClassName.strokeDasharray = oulineLength;
   outline.getElementsByClassName.strokeDashoffset = oulineLength;


   //play and pause the song

   const checkPlaying = song => {
    if(song.paused){
       song.play();
       video.play();
       play.src = './svg/pause.svg';
    }   else {
        song.pause();
        video.pause();
        play.src = './svg/play.svg';
    }
  };


   //play sound
 play.addEventListener("click", () => {
    checkPlaying(song);

});

//select sound
timeSelect.forEach(option => {
    option.addEventListener("click", function() {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
  });


//pick different sound
sounds.forEach(sound => {
    sound.addEventListener("click", function(){
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlaying(song); 
    });
});


  //animate the circle
  song.ontimeupdate = () => {
      let currentTime = song.currentTime;
      let elapsed  = fakeDuration - currentTime;
      let seconds = Math.floor(elapsed % 60);
      let minutes = Math.floor(elapsed/60);

      //animate the circle
      let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
     outline.getElementsByClassName.strokeDashoffset = progress;
 
      // animate the text 
      timeDisplay.textContent = `${minutes}:${seconds}`;

      if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = "./svg/play.svg";
        video.pause();
    }

  };


};

 

app();



