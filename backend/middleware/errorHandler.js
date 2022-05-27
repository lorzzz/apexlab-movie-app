const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json("Error occured!");
};

module.exports = errorHandler;
