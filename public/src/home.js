const { partitionBooksByBorrowedStatus } = require("./books");

//find the length of books array
function totalBooksCount(books) {
  return books.length;
}

//find the length of accounts array
function totalAccountsCount(accounts) {
  return accounts.length;
}

// use partitionBooks.. function to return a var with [[borrowed books], [returned books]]
// return the length
function booksBorrowedCount(books) {
  stats = partitionBooksByBorrowedStatus(books)[0].length;
  return stats;
}
// seperate genres out of books array
// get rid of duplicate genres
function getMostCommonGenres(books) {
  let allGenres = books.map(book=> book.genre);
  singleGenres = Array.from(new Set(allGenres));
  // loop thru array of singleGenres and create an object to store: genre and count(loop thru books to get count of books 
  // with matching genre)
  // push object to empty array and sort then return top 5
  let genreCounts = singleGenres.reduce((acc, genre) =>{
    let genreCount = {
      name: genre,
      count: books.reduce((count, book) =>{
        if (book.genre === genre) count += 1;
        return count;
      },0) };
      acc.push(genreCount);
      return acc;
  }, []);
  let mostCommon = genreCounts.sort((genreA, genreB)=> genreB.count - genreA.count);
  //console.log(mostCommon);
  return mostCommon.slice(0,5);
}

function getMostPopularBooks(books) {
  let allTitles = books.map(book=> book.title);
  singleTitles = Array.from(new Set(allTitles));
  let titleCounts = singleTitles.reduce((acc, title) =>{
    let titleCount = {
      name: title,
      count: books.reduce((count, book) =>{
        if (book.title === title) count += book.borrows.length;
        return count;
      },0) };
      acc.push(titleCount);
      return acc;
  }, []);
  let mostPopular = titleCounts.sort((titleA, titleB)=> titleB.count - titleA.count);
  //console.log(mostPopular);
  return mostPopular.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let authorCounts = authors.reduce((acc, author) =>{
    let authorCount = {
      name: `${author.name.first} ${author.name.last}`,
      count: books.filter(book=> book.authorId === author.id).reduce((count, book)=> {
        if(book.borrows.length)
        count += book.borrows.length;
        return count;
      }, 0)};
      acc.push(authorCount);
      return acc;
  }, []);
  let mostPopular = authorCounts.sort((authorA, authorB)=> authorB.count - authorA.count);
  //console.log(mostPopular.slice(0,5));
  return mostPopular.slice(0,5);
}


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
