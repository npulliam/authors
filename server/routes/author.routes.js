const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.post("/api/authors/new", AuthorController.create);
    app.get("/api/authors", AuthorController.getAll);
    app.get("/api/authors/random", AuthorController.random);
    app.get("/api/authors/:id", AuthorController.getOne);
    app.delete("/api/authors/:id/delete", AuthorController.delete);
    app.put("/api/authors/:id/update", AuthorController.update);
}