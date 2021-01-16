const { ApolloServer } = require('apollo-server');
require('dotenv').config()
const { typeDefs } = require('./src/schema/books.gql')
const resolvers = require('./src/resolvers/queries/books.js')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});