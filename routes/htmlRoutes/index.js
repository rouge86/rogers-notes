const path = require("path")
const router = require("express").Router()

//retrieve html paths, when localhost:**** go to index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"))
})

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"))
})

//retrieve html paths, when * wildcard go to index.html
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"))
})

module.exports = router
