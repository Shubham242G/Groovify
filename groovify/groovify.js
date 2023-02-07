let songIndex = 0;
let audioElement = new Audio('C:\Users\Shubham\OneDrive\Desktop\groovify\songs\21savage_feat_JCole-A_lot.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
        {songsName: "a_lot" , filePath:"songs/21savage_feat_JCole-A_lot.mp3" , coverPath:"covers/alot.jpg"},
        {songsName: 'false_prophets' , filePath:'songs/JCole_False_Prophets.mp3',coverPath:'covers/falseprophets.jpg'},
        {songsName: 'Future_Ft_The_Weeknd_-_Low_Life.mp3' , filePath:'songs/Future_Ft_The_Weeknd_-_Low_Life.mp3',coverPath:'covers/lowlife.jpg'},
        {songsName: 'Future-Mask_Off' , filePath:'songs/Future-Mask_Off.mp3',coverPath:'covers/Future-Mask_Off.mp3.jpg'},
        {songsName: 'J_Cole_-_Middle_Child' , filePath:'songs/J_Cole_-_Middle_Child.mp3',coverPath:'covers/middlechid.jpg'},
        {songsName: 'Kanye_West_-_Homecoming' , filePath:'songs/Kanye_West_-_Homecoming.mp3',coverPath:'covers/homecoming.jpg'},
        {songsName: 'Lil-Wayne-Lollipop-ft-Static-Major' , filePath:'songs/Lil-Wayne-Lollipop-ft-Static-Major.mp3',coverPath:'covers/lollipop.jpg'},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
    }
})



