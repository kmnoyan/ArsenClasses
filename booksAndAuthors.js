const writers = [
  {
    author: "Hovhannes Tumanyan",
    book: "Giqor",
  },
  {
    author: "Hovhannes Shiraz",
    book: "Ani",
  },
  {
    author: "Eghishe Charenc",
    book: "Yerkir Nairi",
  },
  {
    author: "Hovhannes Tumanyan",
    book: "The dog and cat",
  },
  {
    author: "Derenik Demirchyan",
    book: "Vardanank",
  },
  {
    author: "Eghishe Charenc",
    book: "Land of fire",
  },
];

const authorsObject = writers.reduce(
  (futureAuthorsObject, currentAuthorsObject) => {
    let key = currentAuthorsObject.author;
    let value = currentAuthorsObject.book;

    if (!futureAuthorsObject[key]) {
      futureAuthorsObject[key] = [];
    }
    futureAuthorsObject[key].push(value);

    return futureAuthorsObject;
  },
  {}
);
console.log(authorsObject);