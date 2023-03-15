const { Router } = require("express");
const express = require("express");
const postMenu = require("../Controllers/POST/postMenu");
const getMenu = require("../Controllers/GET/getMenu");

const router = Router();
router.use(express.json());

router.post("/", async (req, res) => {
  let { name } = req.body;
  try {
    let resultado = await postMenu({
      name,
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

router.get('/', async(req, res) => {
    let { name } = req.body;
    try {
        let resultado = await getMenu(name);
        res.status(200).json( resultado );
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    });


module.exports = router;
