const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async(req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}


module.exports.saveToDo = async (req, res) => {
    const {text} = req.body

    ToDoModel
        .create({text})
        .then((data) => {
            console.log("Added Successfully")
            console.log(data)
            res.send(data)
        })
 
}
// module.exports.updateToDo = async (req, res) => {
//     const { _id, text } = req.body;
//     try {
//         const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, text , { new: true });
//     } catch (err) {
//         console.error("Erreur lors de la mise à jour de la tâche :", err);
//         res.status(500).send("Erreur lors de la mise à jour de la tâche");
//     }
// }

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body

    ToDoModel
        .findByIdAndUpdate(_id, {text})
        .then(()=>res.send("Update successfully"))
        .catch((err)=> console.log(err))

 
}

// module.exports.updateToDo = async (req, res)=> {
//      const {_id, text} = req.body
//      ToDoModel
//          .findByIdAndUpdate(_id, {text},  { new: true })
//          .then(()=> res.send("Updated successfully"))
//          .catch((err)=> console.log(err))
//  }

module.exports.deleteToDo = async (req, res)=> {
    const {_id} = req.body
    ToDoModel
        .findByIdAndDelete(_id)
        .then(()=>res.send("Deleted successfully"))
        .catch((err)=> console.log(err))
}
