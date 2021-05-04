const router = require("express").Router();
const storage = require("../db/storage");

router.post("/notes", (req, res) => {
    // using the writeNote 
    storage.writeNote(req.body)
    .then((note) => res.json(note))
    .catch((error) =>res.json(error))
})

// router.get()finish

module.exports = router;