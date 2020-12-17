//loop thru accounts and find accound id that matches id given
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

//loop thru, setting values to lowercase, and sort alphabetically
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}
//declare a counter
//loop thru each book, then loop thru the borrows of the book
//compare account id to borrower id, if match, add to counter
//return counter;
function numberOfBorrows(account, books) {
  total = 0;
  books.forEach(book => book.borrows.forEach(borrower => account.id === borrower.id ? total++ : total));
  return total;
}
// use helper function below to return a copy of the books with the authors added
//// execute helper function 
//// loop thru books and 
//// if borrower.id matches account.id and borrower.returned matches false
//// push book to new array
function addAuthorsToBooks(authors, books) {
  books.forEach(book => authors.forEach( author => {
    if(author.id === book.authorId) {
      book.author = author;
    }
  }));
  return books;
}

function getBooksPossessedByAccount(account, books, authors) {
  addAuthorsToBooks(authors, books);
  let possessedBooks = [];
  books.forEach(book => book.borrows.forEach(borrower => {
    if (borrower.id === account.id && borrower.returned === false){
      possessedBooks.push(book);
    }
  }));
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
