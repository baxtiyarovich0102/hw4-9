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




module.exports= {
    renderIndex,
    renderFeature,
    renderTeam,
    renderAppointment
}