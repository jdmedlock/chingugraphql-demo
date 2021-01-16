//const { books } = require('../../books') 
const { getAllBooks } = require('../../database/queries')

module.exports = { 
  //books: () => books,
  books: () => {
    const allBooks = getAllBooks()
    .then(result => {
      return result
    })
    .catch(err => {
      throw err
    })
    return allBooks
  },
  authors: () => 
    books.map(book => {
      return ({ author: book.author })
    })
}