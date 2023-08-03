const fs = require('fs');
const PDFParser = require('pdf-parse');

async function extractTextFromPDF(pdfFilePath) {
  try {
    const data = await fs.promises.readFile(pdfFilePath);
    const pdfText = await PDFParser(data);
    return pdfText.text;
  } catch (error) {
    throw new Error('Error while extracting text from PDF: ' + error.message);
  }
}

module.exports = { extractTextFromPDF };