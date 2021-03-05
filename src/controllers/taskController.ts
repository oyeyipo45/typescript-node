import { Request, Response, NextFunction } from "express"
import { Task } from "../models/tasks"


export const getTask = async (req: Request, res: Response, next: NextFunction) => {
    const task = await Task.find({})
    return res.status(200).json({
        data: task
    })
}

export const createTask  = async  (req: Request , res: Response, next: NextFunction) => {
   const { title, description } = req.body
    const task = Task.build({ title, description })
    await task.save()
    return res.status(200).json({
        data: task
    })
}


