

const button=document.getElementById('btn');
const audioElement=document.getElementById('audio')
// disabled button during speech
function toggleButton(){

button.disabled=!button.disabled;

}
// fetch speech

async function tellMe(joke){


  VoiceRSS.speech({
    key: '262873587c274624a29b09e5614dd145',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});


};

//fetch joke

async function getJoke(){

  let joke='';

  const apiUrl=`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,racist`

try{

const response= await fetch(apiUrl);
const data = await response.json();


if (data.setup) {
  joke = `${data.setup} ... ${data.delivery}`;
} else {
  joke = data.joke;
}
 tellMe(joke);
 toggleButton();
console.log(joke)
} catch(error){

}



}


button.addEventListener('click', getJoke)
audioElement.addEventListener('ended', toggleButton)





