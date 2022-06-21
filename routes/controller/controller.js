const Bootcamp = require('../../model/bootcamp') 
exports.createBootcamp = (req, res, next) => {
  res.status(200).send({ sucess: true, msg: "create new bootcamp" });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ sucess: true, msg: `update bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ sucess: true, msg: `delete bootcamp ${req.params.id}` });
};

exports.getBootcamp = () => {
  res.status(200).send({ sucess: true, msg: `get bootcamp ${req.params.id}` });
};
