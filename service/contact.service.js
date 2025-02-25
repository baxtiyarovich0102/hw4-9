const fs = require("fs");

let getAllContact = () => {
  let contacts = JSON.parse(fs.readFileSync("./config/contact.json", "utf8"));
  return contacts;
};

module.exports = { getAllContact };
