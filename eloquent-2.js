//Exercise: Looping a triangle
let resultStr = "";
//add '#' to resultStr and display on console until resultStr is 7 characters long
while (resultStr.length < 7) {
  resultStr += "#";
  console.log(resultStr);
}

//Exercise: FizzBuzz
//iterate from 1 to 100
for (let i=1;i<=100; i++) {
  //check if i is divisable by 3 or 5 and display to console appropriatly
  if (i%3 === 0 && i%5 === 0) console.log('FizzBuzz');
  else if (i%3 === 0) console.log('Fizz');
  else if (i%5 === 0) console.log('Buzz');
  else console.log(i);
                            
}

//Excercise: Chess Board
let gridSize = 8;
let gridStr = "";
//iterate through and build grid
for (let i=0; i < gridSize; i++){
  for (let j=0; j < gridSize; j++){
    // if coulum and row number are both even add 'space' else add '#'
    if ((i+j)%2 === 0) gridStr += " ";
    else gridStr += "#";
  }
  gridStr += "\n";
}
//display grid on console
console.log(gridStr);