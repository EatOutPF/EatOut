const { Router } = require("express");

const router = Router();

const menuRouter = require("./menu");

router.use("/restaurant/menu", menuRouter);

module.exports = router;
