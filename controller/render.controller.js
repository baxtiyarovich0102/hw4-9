let renderIndex = (req, res, next) => {
  res.render("index", {
    title: "Xususiy klinika",
    join: "Rejalashtirish",
  });
};
let renderAbout = (req, res, next) => {
  res.render("about", {
    title: "Biz haqimizda",
  });
};
let renderService = (req, res, next) => {
  res.render("service", {
    title: "Xizmatlarimiz",
  });
};
let renderContact = (req, res, next) => {
  res.render("contact", {
    title: "Aloqalarimiz",
  });
};

module.exports = {
  renderIndex,
  renderAbout,
  renderService,
  renderContact,
};
