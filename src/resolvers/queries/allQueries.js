const { books } = require('../../books') 

module.exports = { 
  books: () => books,
  authors: () => 
    books.map(book => {
      return ({ author: book.author })
    })
}