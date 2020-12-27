import Task from "../models/Task";
import { request } from "express";

export const findAllTasks = async (req,res) => {
    const tasks = await Task.find()
    res.json(tasks)
}

export const createTask = async (req,res) => {
    const newTask = new Task({
        title: req.body.title, 
        description: req.body.description,
        done: req.body.done ? req.body.done : false 
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
}

export const findAllDoneTask = async (req,res) => {
    const tasks = await Task.find({done: true})
    res.json(tasks);
}


export const findOneTask = async (req,res) => {
    const task = await Task.findById(req.params.id)
    res.json(task);
}

export const deleteTask = async (req,res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json({message: 'Task were deleted successfully'});
}