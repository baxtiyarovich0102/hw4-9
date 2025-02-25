const fs = require("fs");

let getAllService = () => {
  let service = JSON.parse(fs.readFileSync("./config/service.json", "utf8"));
  return service;
};

module.exports = { getAllService };
