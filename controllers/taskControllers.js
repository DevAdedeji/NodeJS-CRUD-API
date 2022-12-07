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

const getATask = (req,res) =>{
    const id = req.params.id
    Task.findById(id)
    .then(result=>{
        if(result === null){
            res.status(400).json({error:'Task Not Found'})
        }
        else{
            res.status(200).json({data:result, success:true})
        }
        
    })
    .catch(err=>{
        res.status(400).json({error:err.message})
    })
}

const deleteATask = (req,res) =>{
    const id = req.params.id
    Task.findByIdAndDelete(id)
    .then(result=>{
        res.status(200).json({message:'Task deleted successfully', success:true})
    })
    .catch(err=>{
        res.status(400).json({error:err.message})
    })
}

const updateATask = (req,res) =>{
    const id = req.params.id
    Task.findByIdAndUpdate(id, req.body, {new:true})
    .then(result=>{
        res.status(200).json({data:result, success:true, message:'Task updated successfully', })
    })
    .catch(err=>{
        res.status(400).json({error:err.message})
    })
}

module.exports = {
    getAllTasks,
    saveTask,
    getATask,
    deleteATask,
    updateATask
}