const studentScoreObject = {
  student1: 1,
  student2: 6,
  student3: 5,
  student4: 4,
  student5: 8,
  student6: 2,
  student7: 10,
  student8: 7,
  student9: 6,
};

const studentScoresArray = Object.entries(studentScoreObject);

const filteredArray = studentScoresArray.filter((item) => {
  return item[1] >= 4 && item[1] < 7;
});

const newFilteredObject = Object.fromEntries(filteredArray);
console.log(newFilteredObject);
