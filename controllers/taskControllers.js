const Task = require("../models/task")

const getAllTasks = (req,res)=>{
    Task.find()
    .then(result=>{
        res.status(200).json({tasks:result, success:true})
    })
    .catch(err=>{
        res.status(400).json({error:err.message})
    })
}

const saveTask = (req,res)=>{
    const newTask = new Task({
        title: req.body.title,
        body:req.body.body,
        reminder:req.body.reminder || false
    });

    newTask.save()
    .then(result =>{
        res.status(200).json({data:result, success:true})
    })
    .catch(err=>{
        res.status(400).json({error:err.message})
    })

}

module.exports = {
    getAllTasks,
    saveTask,
}