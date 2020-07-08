// developer code
// https://s3.amazonaws.com/codecademy-content/projects/chore-door/chore-door-final/script.js

var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg" 
var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var currentlyPlaying = true;
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
var startButton = document.getElementById('start'); 

const isBot = (door) =>{
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
}

const isClicked = (door) =>{
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }

}
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
  gameOver('win');
  }else if(isBot(door)){
    gameOver('lose');
  }
}

randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
  openDoor1 = botDoorPath;
  openDoor2 = spaceDoorPath;
  openDoor3 = beachDoorPath ;
  } else if (choreDoor === 1) { 
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath ;
  openDoor3 = spaceDoorPath;
  } else if(choreDoor === 2) {
  openDoor3 = botDoorPath;
  openDoor2 = beachDoorPath ;
  openDoor1 = spaceDoorPath;
  } 
}

doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}
doorImage3.onclick= () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}
startButton.onclick = () => {
  if(!currentlyPlaying){
    startRound();
  }
}
const startRound = () =>{
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
const gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
  }else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();
