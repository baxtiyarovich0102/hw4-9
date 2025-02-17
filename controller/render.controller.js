let renderIndex = (req, res, next) => {
    res.render("index", {
      title: "Xususiy klinika",
      join: "Rejalashtirish",
    });
  };



  
module.exports= {
    renderIndex
}