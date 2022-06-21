const express = require("express");
const {
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("./controller/controller");

const router = express.Router();

router.route("/").get(getBootcamp).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
 