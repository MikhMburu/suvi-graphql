const puppeteer = require("puppeteer");
const path = require("path");

const generatePDF = async (date) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:5000/print-invoice", {
      waitUntil: "networkidle0",
    });
    await page.emulateMediaType("screen");
    await page.pdf({
      path: path.join(process.cwd(), `documents/${date}.pdf`),
      format: "a4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "1cm", bottom: "1cm", left: "1cm", right: "1cm" },
      // marginBottom: 2mm,
    });
    console.log("Invoice created..");
    browser.close();
    process.exit();
  } catch (err) {
    console.log("An error occured during generation of PDF\n", err);
  }
};
module.exports = generatePDF;
