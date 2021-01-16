const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT title, author FROM book ORDER BY TITLE')
    .then(results => {
      resolve(results.rows)
    })
    .catch(err => {
      reject(err)
    })
  })
}

module.exports = { getAllBooks }