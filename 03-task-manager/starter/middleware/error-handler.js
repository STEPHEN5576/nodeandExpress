const { CustomAPIError } = require("../errors/custom-error");
const errorhandlerMiddleware = (err, req, res, next) => {
 if(err instanceof CustomAPIError){
  return err.statusCode.json({msg: err.message})
 }
  return res.status(err.status).json({ msg: err.message });
};

module.exports = errorhandlerMiddleware;
