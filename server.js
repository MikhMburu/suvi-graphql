// Import libraries
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
// Import Files
const schema = require("./schema");
// Define variables
const app = express();
const port = process.env.PORT || 5000;
// Define Middleware
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
// Create routes
// Listen on port 5000
app.listen(port, () => {
  console.log(`SUVIMIS Server running on port ${port}`);
});
