const numbers = [4, 50, 40, 32, 5, 56, 43, 10, 21, 48];
const filteredArray = numbers.filter(input => input > 40).sort();

console.log(filteredArray);

const poweredArray = filteredArray.map((item) => {
  item **= 2;
  return item;
});

console.log(poweredArray);

const categorizedObject = poweredArray.reduce((accumulator, currentValue, index) => {
  accumulator[currentValue] = index;
  return accumulator;
}, {});

console.log(categorizedObject);
