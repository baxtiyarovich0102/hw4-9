const fs = require("fs");

let getAllindexJobs = () => {
  let indexjobs = JSON.parse(
    fs.readFileSync("./config/indexjobs.json", "utf8")
  );
  return indexjobs;
};

module.exports = { getAllindexJobs };
