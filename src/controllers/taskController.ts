import { Request, Response, NextFunction } from "express"


export const getTask = (req: Request , res: Response, next: NextFunction) => {
    return res.send("the todo")
}

export const createTask  = (req: Request , res: Response, next: NextFunction) => {
    return res.send("new the todo")
}