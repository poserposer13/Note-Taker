const path = require("path");



module.exports = function(app, notes){
    app.get("/api/notes", function (req, res){
        return res.json(notes);
    });

    app.post("/api/characters", function (req, res) {

        let newNote = req.body;

        console.log(newNote);

        characters.push(newNote);

        res.json(newNote);
    });

    // app.delete("/api/notes/:id")
}