const appModel = require("../MongoDB/appSchema");
const postHomepage = async (req, res) => {
  try {
    // const newAppModel = new appModel(req.body);
    const x = await appModel.create(req.body);
    res.send(x);
  } catch (error) {
    res.send(error);
  }
};
module.exports = postHomepage;
