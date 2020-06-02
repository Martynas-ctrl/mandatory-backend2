let express = require('express');
let mongojs = require('mongojs');
let app = express.Router();
let db = mongojs(
  'todos'
);

app.get('/todos', (req, res,) => {
  db.todos.find({}, { _id: 1, title: 1, description: 1, date: 1, listId: 1}, (error, todos) => {
    if (error) {
      res.send(error);
    };
    let dataArr = [];
    Object.keys(todos).map((key) => {
      let value = todos[key];
      dataArr.push([ value.title, value._id, value.description, value.date, value.listId]);
    });
    res.send(dataArr);
  });
});

app.get('/todo/:id', (req, res) => {
  db.todos.findOne({ _id: mongojs.ObjectId(req.params.id) }, (error, todo) => {
    if (error) {
      res.send(error);
    }
      res.json(todo);
  });
});

app.post('/todo', (req, res) => {
  let todo = req.body;

  if (todo.title) {
    db.todos.save(todo, (error, todo) => {
      if (error) {
        res.send(error);
      }
        res.json(todo);
    });
  }else {
    res.status(400);
    res.json({ error: 'Bad Request' });
  };

  if (!todo.date) {
    res.status(400);
    res.json({ error: 'Bad Request' });
  };
});

app.patch('/todo/:id', (req, res) => {
  let todo = req.body;
  let updateTodo = {};

  if (todo.title) {
    updateTodo.title = todo.title;
  };

  if (todo.description) {
    updateTodo.description = todo.description;
  };

  if (todo.date) {
    updateTodo.date = todo.date;
  };

  if (todo.listId) {
    updateTodo.listId = todo.listId;
  };
  
  if (updateTodo) {
    db.todos.update({ _id: mongojs.ObjectId(req.params.id) }, updateTodo, {}, (error, todo) => {
      if (error) {
        res.send(error);
      }
        res.json(todo);
    });
  }else {
    res.status(400);
    res.json({ error: 'Bad Request' });
  };
});

app.delete('/todo/:id', (req, res) => {
  db.todos.remove({ _id: mongojs.ObjectId(req.params.id) }, ( error, todo) => {
    if (error) {
      res.send(error);
    }
      res.json(todo);
  });
});

module.exports = app