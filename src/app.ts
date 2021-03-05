import express, { Request, Response, NextFunction } from "express"
import {taskRouter} from "./routes/tasks"
import { json } from "body-parser"

const app = express()

app.use(json())
// app.use(taskRoutes)

app.use("/api/task", taskRouter )

app.use((err: Error, req : Request, res : Response, next : NextFunction ) => {
    res.status(500).json({message: err.message})
})

const PORT = process.env.PORT || 3000

app.listen(3000, () => {
    console.log(`server is listening on port ${PORT}`);
})