const router = require("express").Router()

const registerController = require("../app/controllers/register")
const todoController = require("../app/controllers/todo")

//Register and login api
router.post('/register', registerController.create)
router.post('/login', registerController.login)

//Crud todo api
router.post('/addtodo', todoController.create)
router.get('/gettodo', todoController.list)
router.get('/gettodo/:id', todoController.userList)
router.put('/edittodo/:id', todoController.edit)
router.delete('/deletetodo/:id', todoController.destroy)

module.exports = router