const router = require("express").Router()
const { createNewNote, updateDb } = require("../../lib/notes")
//Hi Meg, v4 has been deprecated to uuid can i use that instead? UUID Unique Universal Identifiers, clean way to hide sequental database IDs
const { v4: uuidv4 } = require("uuid")
const { notes } = require("../../db/db.json")

// show all notes in json data
router.get("/notes", (req, res) => {
  let results = notes
  res.json(results)
})

router.post("/notes", (req, res) => {
  req.body.id = uuidv4()
  const newNote = createNewNote(req.body, notes)
  res.json(newNote)
})

router.delete("/notes/:id", (req, res) => {
  const params = req.params.id
  updateDb(params, notes)
  res.redirect("")
})

module.exports = router
