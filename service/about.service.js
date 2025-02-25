const fs = require("fs");

let getAllFuture = () => {
  let future = JSON.parse(fs.readFileSync("./config/future.json", "utf8"));
  return future;
};
let getAllJobs = () => {
  let jobs = JSON.parse(fs.readFileSync("./config/jobs.json", "utf8"));
  return jobs;
};
module.exports = { getAllJobs, getAllFuture };
