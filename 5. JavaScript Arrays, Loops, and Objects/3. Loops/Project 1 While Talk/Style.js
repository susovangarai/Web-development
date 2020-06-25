let input = "hi".toUpperCase();
const vowels = ['A', 'E', 'I', 'O', 'U'];
const resultArray = [];
console.log(input);
for(i=0;i<input.length;i++){
  for(j=0;j<vowels.length;j++){
    if(input[i]===vowels[j]){
        console.log(input[i]);
    }
  } 
  if(input[i] === 'E'||input[i] === 'U'){
    resultArray.push(input[i]);
    }
}
console.log(resultArray.join());