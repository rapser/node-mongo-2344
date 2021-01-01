import Task from "../models/Task";
import { getPagination }  from '../libs/getPagination'

export const createTask = async (req, res) => {

    if(!req.body.title){
        return res.status(400).send({message: 'El titulo es necesario'});
    }

    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        });
        const taskSaved = await newTask.save();
        res.json(taskSaved); 
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Algun error'
        });
    }
}

export const findOneTask = async (req, res) => {

    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if(!task){
            return res.status(404).json({message: 'La tarea no existe'});
        }
    
        res.json(task);
    } catch (error) {
        
        res.status(500).json({
            message: error.message || 'Algun error'
        });
    }
}

export const findAllTasks = async (req, res) => {

    try {

        const {size, page, title} = req.query

        const condition = title ? {
            title: { $regex: new RegExp(title), $options: "i"}
        }: {}

        const {limit, offset} = getPagination(page, size)

        const data = await Task.paginate(condition, {offset, limit})

        res.json({
            totalItems: data.totalDocs,
            tasks: data.docs,
            totalPages: data.totalPages,
            currentPage: data.page - 1
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Algun error'
        });
    }
}

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task were deleted successfully' });
}

export const findAllDoneTask = async (req, res) => {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
}

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    });
    res.json({ message: 'La tarea ha sido actualizada' });
}