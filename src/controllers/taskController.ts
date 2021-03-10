import { Request, Response, NextFunction } from "express"
import { Task } from "../models/tasks"



// @desc 		Get all Tasks
// @route 		GET /api/v1/task
// @access 		Public

export const getTask = async (req: Request, res: Response, next: NextFunction) => {

    // const count = await Subscription.countDocuments({
    //   user_id: { $ne: req.user._id },
    // });
    const count = await Task.countDocuments();
    const task = await Task.find()
    return res.status(200).json({
        data: task,
        count
    })
}


// @desc 		Get a Task
// @route 		GET /api/v1/task/:id
// @access 		Public

export const getSingleTask = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const task = await Task.findById(id)
    if (!task) {
        return new Error("task does not exist")
    }
    if (task) {
        return res.status(200).json({
        data: task
    })
    }
    
}


// @desc 		Create a Task
// @route 		POST /api/v1/task
// @access 		Public

export const createTask  = async  (req: Request , res: Response, next: NextFunction) => {
   const { title, description } = req.body
    const task = Task.build({ title, description })
    await task.save()
    return res.status(200).json({
        data: task
    })
}


// @desc 		Update a Task
// @route 		PUT /api/task/edit/:id
// @access 		Public

export const editTask = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const {title, description} = req.body
    const task = await Task.findById({ _id  : id})
    if (!task) {
        return new Error("task does not exist")
    }

    if (task) {
        task.title = title,
            task.description = description
        
        const newTask = await task.save()
        return res.status(200).json({
            success: "true",
            data: newTask
        })
    }
    
}



// @desc 		Delete a Task
// @route 		DELETE /api/tasks/delete/:id
// @access 		Public

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const task = await Task.findById({ _id: id })
    
    if (!task) {
        return new Error("task does not exist")
    }

    if (task) {
        await task.remove()

        return res.status(200).json({
            succees: true,
            message: "Task Deleted Successfully"
        })
    }
}