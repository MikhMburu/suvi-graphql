// Import Libraries
const {
  
  GraphQLSchema,
  
} = require("graphql");
const db = require("../config/db-mongo");
// Import files and functions
const Mutation = require("./Mutations");
const RootQuery = require("./RootQuery");

// Initialize MongoDB database
db();



const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
