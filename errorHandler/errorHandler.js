const notFound = require("../Error/notFound");
const errorHandler = (err, req, res, next) => {
  if (err instanceof notFound) {
    //return res.send("w")
    const NotFound = new notFound();
    return res.status(NotFound.statusCode).send(NotFound.message);
  } else if (err.message === "id not found") {
    return res.send("id not found");
  }
  res.send("it is bad");
};

module.exports = errorHandler;
