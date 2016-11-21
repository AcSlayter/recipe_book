var express = require('express')
var app = express()


function db_connection () {
        // Load mongoose package
        var mongoose = require('mongoose');
        // Connect to MongoDB and create/use database called todoAppTest
        mongoose.connect('mongodb://192.168.1.155/app');
        // Create a schema
        var TodoSchema = new mongoose.Schema({
          name: String,
          completed: Boolean,
          note: String,
          updated_at: { type: Date, default: Date.now },
        });
        // Create a model based on the schema
        var Todo = mongoose.model('Todo', TodoSchema);

        // Create a todo in memory
        var todo = new Todo({name: 'Master NodeJS', completed: false, note: 'Getting there...'});
        // Save it to database
        todo.save(function(err){
          if(err)
            console.log(err);
          else
            console.log(todo);
        });
        Todo.find(function (err, todos) {
          if (err) return console.error(err);
          console.log(todos)
        });
}

app.use('/', express.static('static'));

//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})