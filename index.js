const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach(element => {
let authorFirst = element.authorFirst 
let authorLast = element.authorLast 
let title = element.name 
let publish = element.publishDate 
let statement = authorFirst + " " + authorLast + " wrote " + title + " in " + publish;
console.log(statement);
});

//Sort books from oldest to most recent
function compareBypublishDate(a, b) {
  return a.publishDate - b.publishDate;
}
books.sort(compareBypublishDate);
console.log(books);

//sort books alphabetically


//Find who wrote War and Peace
let whowroteWarandPeace = books.filter((books) => {
  return books.name === 'War and Peace' ;
});
console.log(whowroteWarandPeace);

//how many books were written before 1900?
let booksbefore1900 = books.filter((books) => {
  return books.publishDate < '1900';
});
console.log(booksbefore1900);
//was there at least one book published within the last 100 years?
console.log('Yes');
//was every book published within the last 100 years?
console.log('No');
//print a list of books that "includes" the genre historical
let historical = books.filter((books) => {
  return books.genre == 'historical';
});
console.log(historical);