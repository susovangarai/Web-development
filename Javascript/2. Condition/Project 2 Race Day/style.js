let raceNumber = Math.floor(Math.random() * 1000);

let early = false;
let age = 22;

(early && age > 18)? raceNumber+=1000 : raceNumber;


if(age>18 && early){
  console.log(`your time is 9:30 ${raceNumber}`);
}else if(age > 18 && !early){
  console.log('Late adults run at 11:00 am')
}else if (age < 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}else{
  console.log('later for 18 years!');
}

