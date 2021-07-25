// Import libraries
const puppeteer = require("puppeteer");

const moment = require("moment");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const exhbs = require("express-handlebars");
// Import Files
const schema = require("./schema");
const MeterReading = require("./mongoSchema/MeterReading");
const Invoice = require("./mongoSchema/Invoice");
const generatePDF = require("./utilities/generatePDF");

// Define variables
const app = express();
const port = process.env.PORT || 5000;

// Define functions and template engine
const hbs = exhbs.create({
  helpers: {
    dateFormat: (date, format) => {
      return moment(date).format(format);
    },
  },
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Define Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
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
app.post("/invoice", async (req, res) => {
  // Define object for saving
  const newInv = new Invoice(req.body);
  const inv = await newInv.save();

  res.json({ msg: "Invoices successfully saved", inv });
});
app.get("/print-invoice", async (req, res) => {
  const inv = await Invoice.find().lean();
  await res.render("invoice", inv[0]);
  // console.log(process.cwd());
  await generatePDF(inv[0].inv_date);
});
app.get("/test", async (req, res) => {
  const data = await Invoice.find().lean();
  res.json(data);
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`SUVIMIS Server running on port ${port}`);
});
