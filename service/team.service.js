const fs = require("fs");
let getAllTeam = () => {
  let jobs = JSON.parse(fs.readFileSync("./config/team.json", "utf8"));
  return jobs;
};

module.exports = { getAllTeam };
