const db = require("../models");

exports.getTodos = (req,res) => {
        db.Todo.find() 
        .then(todos => {
            res.json(todos);
        })
        .catch(err => {
            res.send(err);
        });
}

exports.createTodo = (req,res) => {
    db.Todo.create(req.body)
    .then(newtTodo => {
       res.status(201).json(newtTodo); 
    })
    .catch(err => {
        res.send(err);
    });
}

exports.getTodo = (req,res) => {
   db.Todo.findById(req.params.todoId)
    .then(foundTodo => {
       res.json(foundTodo);
    })
    .catch(err => {
        res.send(err);
    });
}

exports.updateTodo = (req,res) => {
   db.Todo.findOneAndUpdate(
       {_id: req.params.todoId},
       req.body,
       {new: true} //returns updated todo, otherwise it returns the old one
       )
    .then(updatedTodo => {
       res.json(updatedTodo);
    })
    .catch(err => {
        res.send(err);
    });
}

exports.deleteTodo = (req,res) => {
   db.Todo.remove({_id: req.params.todoId})
    .then(updatedTodo => {
       res.json({message: "Deleted!"})
    })
    .catch(err => {
        res.send(err);
    });
}

module.exports = exports;