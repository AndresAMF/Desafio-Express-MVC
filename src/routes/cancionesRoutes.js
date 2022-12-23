const cancionesController = require("./../controllers/cancionesController");

const express = require("express");
const router = express.Router();

router.get("/", cancionesController.show);

router.post("/", cancionesController.create);

router.put("/:id", cancionesController.update);

router.delete("/:id", cancionesController.delete);

module.exports = router;
