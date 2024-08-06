console.log("welcome to kashif music app");

// initilize the variables 
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "salam ya hussain" , filePath: "1.mp3" , coverPath: "cover.jpg" },
    {songName: "hasbi rabi .." , filePath: "n2.mp3" , coverPath: "c2.png" },
    {songName: "shah-e-medina" , filePath: "n3.mp3" , coverPath: "c3.jpg" },
    {songName: "tu-kuja-man-kuja" , filePath: "n4.mp3" , coverPath: "c4.jpg" },
    {songName: "ali-mola-ali-dam-dam" , filePath: "n5.mp3" , coverPath: "c5.jpg" },
    {songName: "durood-e-pak" , filePath: "n6.mp3" , coverPath: "c6.jpg" },
    {songName: "aye-hasnain-ke-nana" , filePath: "n7.mp3" , coverPath: "c7.jpg" },
]

songItems.forEach((element , i) => {
    console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

//  audioElement.play();

// handle play pause click 
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "pause-button-icon.png";
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.src = "circle-play-regular.svg";
        gif.style.opacity = 0;

    }
})

// listen to events 
audioElement.addEventListener('timeupdate' , ()=>{
console.log('timeupdate');
// update progress bar 
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})



const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.src =  "circle-play-regular.svg";
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element , songIndex) =>{
    element.addEventListener('click' , (e)=>{
        makeAllPlay();
        
        // index = parseInt(e.target.id);
        e.target.src =  "pause-button-icon.png";
        // audioElement.src = `${index}.mp3`;
        audioElement.src = `${songs[songIndex].filePath}`; // Corrected the template literal usage
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.src = "pause-button-icon.png";
        gif.style.opacity = 1;


    })
})

// for previous and next button 

// for next 
document.getElementById('next').addEventListener('click' , ()=>{
if(songIndex>7){
    songIndex = 0;
}
else{
    songIndex += 1
}

audioElement.src = `${songs[songIndex].filePath}`; // Corrected the template literal usage
masterSongName.innerText = songs[songIndex].songName;

audioElement.currentTime = 0;
audioElement.play();
masterPlay.src = "pause-button-icon.png";
})
// for next end 
// for previous 
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `${songs[songIndex].filePath}`; // Corrected the template literal usage
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = "pause-button-icon.png";
    })


// for checking volume 
const volumeControl = document.getElementById('volumeControl');

volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    audioElement.volume = volume;
});
