// Import libraries
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
// Import Files
const schema = require("./schema");
const MeterReading = require("./mongoSchema/MeterReading");
// Define variables
const app = express();
const port = process.env.PORT || 5000;
// Define Middleware
app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
// Create routes
app.post("/meter-readings", async (req, res) => {
  const readings = req.body;

  try {
    const result = await MeterReading.insertMany(readings);
    res.json({ success: true, msg: "Readings successfully inserted" });
  } catch (err) {
    console.log("An error occured on BulkInsert \n", err);
  }
});
// Listen on port 5000
app.listen(port, () => {
  console.log(`SUVIMIS Server running on port ${port}`);
});
