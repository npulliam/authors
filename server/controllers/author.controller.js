const Author = require("../models/author.model");

module.exports = {
    create: function(req, res) {
        console.log("create method executed");

        Author.create(req.body)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getAll: function(req, res) {
        console.log("getAll method executed");

        Author.find()
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getOne: function(req, res) {
        console.log("getOne method executed");

        Author.findById(req.params.id)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    delete: function(req, res) {
        console.log("delete method executed");

        Author.findByIdAndDelete(req.params.id)
            .then((author) => {
                res.json(author)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    update: function(req, res) {
        console.log("update method executed");

        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.json(err)
            })
    },
    random: function(req, res) {
        console.log("random method executed");
        Author.count().exec(function (err, count) {

        var random = Math.floor(Math.random() * count)
    
        Author.findOne().skip(random)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.json(err);
            })
        })
    }
}