const readline = require("readline");
const readFromLine = (callback) => {
  const arrayOfInputs = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (input) => {
    const arr = input.split(" ");
    arr.forEach((element) => arrayOfInputs.push(element));
  });

  rl.on("close", (input) => {
    callback(arrayOfInputs);
  });
};
readFromLine(main);

function main(arrayOfStrings) {
  let resultArray = [];
  let finalWord;
  for(let i=0; i<arrayOfStrings.length; i++){
      if(typeof(arrayOfStrings[i]) === 'string'){
          if(arrayOfStrings[i].length >10){
            finalWord = arrayOfStrings[i].charAt(0)+(arrayOfStrings[i].length-2)+arrayOfStrings[i].slice(inputs.length-1)
            resultArray.push(finalWord)
          }
          else if(arrayOfStrings[i].length <=10){
              resultArray.push(arrayOfStrings[i])
          }
      }
      else if(typeof(arrayOfStrings[i]) != 'string'){
           arrayOfStrings.splice(index,i)
      }
  }
  console.log(resultArray)
  }