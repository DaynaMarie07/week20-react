const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with articles
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches :id
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
