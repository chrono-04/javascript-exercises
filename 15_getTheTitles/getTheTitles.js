const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (prop) {
  const titles = prop.map((item) => {
    return item.title;
  });
  return titles;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
