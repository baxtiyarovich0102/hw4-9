let renderIndex = (req, res, next) => {
    res.render("index", {
      title: "Xususiy klinika",
      join: "Rejalashtirish",
    });
  };
let renderFeature = (req, res, next) => {
    res.render("feature", {
      title: "Imkoniyat"
    });
  };
let renderTeam = (req, res, next) => {
    res.render("team", {
      title: "Xodimlar"
    });
  };
let renderAppointment = (req, res, next) => {
    res.render("appointment", {
      title: "Rejalashtirish"
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
let renderTetstimonial = (req, res, next) => {
  res.render("testimonial", {
    title: "Sharh",
  });
};
let renderError = (req, res, next) => {
  res.render("404", {
    title: "Xatolik",
  });
};

module.exports = {
  renderIndex,
  renderAbout,
  renderService,
  renderContact,
  renderFeature,
  renderTeam,
  renderAppointment,
  renderTetstimonial,
  renderError
};
