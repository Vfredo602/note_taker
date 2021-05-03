const path = require("path");
const router = require("express").Router();

// renders our notes.html files
router.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});
// renders index.html files
router.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;


