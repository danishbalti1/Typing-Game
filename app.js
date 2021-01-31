window.addEventListener('load',init);
//Globals

//Availables level
const levels={
    easy:5,
    medium:3,
    hard:2
};
//To change levels

const currentLevel = levels.easy;
let time = currentLevel;
let score=0;
let isPlaying;


//Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord= document.querySelector('#current-word');
const scoreDisplay= document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');


 const words= [
     'hat',
     'river',
     'lucky',
     'statue',
     'generate',
     'puzzle',
     'curious',
     'amazing',
     'javascript',
     'architecture',
     'bezzar',
     'intemidate',
     'sexing',
     'outstanding',
     'enourmous',
     'unexpeted','unrealistic','undefine','how','joke', 'comon', 'respect','legendary'
     ,'cocktail','developer','stubborn',
     ,'generate','hero',
     'villain','nutrition','revolver','master','defination'
 ];
 //initilization game

 function init()
 {
     //show number of seconds in ui
     seconds.innerHTML= currentLevel;
    //load word from array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input',startMatch);
    //call countdown every second
    setInterval(countdown,1000);
    //check game status
    setInterval(checkStatus,50);

 }
//Start match
function startMatch(){
    if(matchWords())
    {
        isPlaying;true;
        time=currentLevel;
        score++;
        showWord(words);
        wordInput.value='';
    }
    //if score is negatve -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML= 0;
    }
    else{
        scoreDisplay.innerHTML= score;
    }
    scoreDisplay.innerHTML = score;
}
//Match the current word to word input
function matchWords()
{
    if(wordInput.value === currentWord.innerHTML)
    {
        message.innerHTML="Correct!!!";
        return true;
    }
    else{
        return false;
    }
}
 function showWord(words){
     //Generate randowm array index
     const randIndex = Math.floor(Math.random() * words.length);
     //output random words
     currentWord.innerHTML = words[randIndex];
     
 }

 //coontdown timer
 function countdown(){

    //make sure time is not run out
    if(time>0)
    {
        //Decrement time 5 ha to phr woh 5 4 3 2 1 hoga
        time--;
    }
    else if(time==0)
    {
        //game is over
        isPlaying = off;
    }
    timeDisplay.innerHTML = time;
 }
 //check game status
 function checkStatus(){
  if(!isPlaying & time ==0)
  {
      message.innerHTML = 'Gave Over!!';
      score = -1;
      

  }    
 }