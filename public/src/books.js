//loop thru authors and find authorId that matches id
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

//loop thru books and find bookId that matches id
function findBookById(books, id) {
  return books.find(book => book.id === id);
}
//declare an array of books not returned
//declare an array of books returned
//return an array with the two arrays
function partitionBooksByBorrowedStatus(books) {
  let checkedOut = books.filter(book => book.borrows[0].returned === false);
  let checkedIn = books.filter(book => book.borrows[0].returned === true);
  return [checkedOut, checkedIn];
}

// declare empty array
// loop thru accounts
// loop thru book.borrows
//// if borrows.id matches account.id
//// create temp object to spread account data into
////// create returned key for temp object with current returned status
////// push temp object to declared array
// return array
function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  accounts.forEach(account =>{
    book.borrows.forEach(lend =>{
      if (lend.id === account.id){
        let acc = {...account};
        acc.returned = lend.returned;
        borrowers.push(acc);
      }
    }

    )
  });
return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
