const Task = require('../models/Tasks')

const createTask =async (req, res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({error: 'General Server Error'})
    } 
}

const getAllTasks = async (req, res)=>{
    try {
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({err: "Internal Server Error"})
    }
}

const updateTask = async (req, res)=>{
    try {
        const taskId= req.params.id;
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {new: true, runValidators:true})
        if(!task)
            res.status(404).json({err: "No task found with the given ID"})
        else
            res.status(201).send(task)
    } catch (error) {
        res.status(500).json({err: "Internal Server Error. This isn't valid"})   
    }
}

const deleteTask =async (req, res)=>{
    try {
        const taskId= req.params.id;
        const task = await Task.findOneAndDelete({_id: taskId})
        if(!task)
            res.status(404).json({err: "No task found with the given ID"})
        else
            res.status(201).send(task)
    } catch (error) {
        res.status(500).json({err: "Internal Server Error. This isn't valid"})   
    }
}

module.exports = {getAllTasks, createTask, updateTask, deleteTask}