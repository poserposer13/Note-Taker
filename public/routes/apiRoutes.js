const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        let notes = JSON.parse(fs.readFileSync("./db/db.json", 'utf-8'))
        return res.json(notes)
    });

    app.post("/api/notes", function (req, res) {
        let notes = JSON.parse(fs.readFileSync("./db/db.json", 'utf-8'));
        let newNote = req.body;
        newNote.id = uuidv4()
        console.log(newNote);
        notes.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), 'utf-8', (err) => {
            if (err) throw err;
            console.log("New Note Added")
        });
        return res.json(notes)
    });

    app.delete("/api/notes/:id", function (req, res) {
        let notes = JSON.parse(fs.readFileSync("./db/db.json", 'utf-8'))
        console.log(notes);
        let id = req.params.id;
        console.log(id);
        const newNotes = notes.filter(note => id !== note.id);
        console.log(newNotes);
        fs.writeFileSync("./db/db.json", JSON.stringify(newNotes), 'utf-8', (err) => {
            if (err) throw err;
            console.log("New Note Added")
        })
        return res.json(newNotes)
    })
}
