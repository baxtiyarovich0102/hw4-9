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




module.exports= {
    renderIndex,
    renderFeature
}