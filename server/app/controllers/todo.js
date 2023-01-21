const Todo = require('../models/todo')

const todoController = {}

todoController.create = async(req, res) => {
    const body = req.body
    const todo = await new Todo(body)
     todo.save()



    res.json({todo:todo, msg: "added successfully"})
}

todoController.list = async(req, res) => {
    const data = await Todo.find()
    res.json(data)
}

// get data only login user based on id

todoController.userList = async(req, res) => {
    const id =  req.params.id
    const data = await Todo.find({userId: id})
    res.json(data)
}

// edit todo only valid user who is login
todoController.edit = async(req, res) => {
    const id =  req.params.id
    const body = req.body
    const data = await Todo.findByIdAndUpdate({_id: id}, {$set: body}, {new: true})
    res.json(data)
}

// delete todo only valid user who is login
todoController.destroy = async(req, res) => {
    const id =  req.params.id
    const data = await Todo.findByIdAndDelete({_id: id})
    if(data){
        res.json("deleted successfully")
    }
    
}

module.exports = todoController