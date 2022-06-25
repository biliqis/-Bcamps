const Bootcamp = require("../model/bootcamp");

//@desc     Post create Nnew bootcamps
//@Route    Post /ap/v1/bootcamps
// @access   private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ sucess: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

//@desc     Get  All bootcamps
//@Route    Get /ap/v1/bootcamps
// @access   Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const getBootCamp = await Bootcamp.find();
    res.status(200).send({ sucess: true, data: getBootCamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

//@desc     Get all bootcamps
//@Route    Get /ap/v1/bootcamps
// @access   Public
exports.getSingleBootcamp = async (req, res, next) => {
  const getSingle = await Bootcamp.findById(req.params.id);
  if (!getSingle) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ sucess: true, data: getSingle });
};

//@desc     Put Update bootcamps
//@Route    Put /ap/v1/bootcamps/:id
// @access  private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const update = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!update) {
      return res.status(400).json({ success: false });
    }
    res.status(200).send({ sucess: true, data: update });
  } catch (error) {}

  //@desc     Delete bootcamps
//@Route    Delete /ap/v1/bootcamps
// @access   Private


  exports.deleteBootcamp = async (req, res, next) => {
    const deleteBoot = await Bootcamp.findByIdAndDelete(req.params.id)
    if (!deleteBoot) {
      return res.status(400).json({ success: false });
    }
    res.status(200).send({ sucess: true, data: deleteBoot });
  };
};

