const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const mergepdfs = async (p1, p2) => {
  await merger.add(p1);
  await merger.add(p2);

  // await merger.add("1.pdf"); //merge all pages. parameter is the path to file and filename.
  // await merger.add("2.pdf", 1); // merge only page 1
  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};
module.exports = { mergepdfs };
