

module.exports = function(app, notes){
    app.get("/api/notes", function (req, res){
        return res.json(notes);
    });

    app.post("/api/notes", function (req, res) {

        let newNote = req.body;

        console.log(newNote);

        notes.push(newNote);

        res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res){

    })
}