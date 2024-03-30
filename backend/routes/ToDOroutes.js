const  {Router} = require ("express")
const { getToDo } = require("../controllers/ToDoControllers")
const {saveToDo} = require ("../controllers/ToDoControllers")
const {deleteToDo, updateToDo} = require("../controllers/ToDoControllers")

const router = Router()

router.get('/', getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)


module.exports = router;