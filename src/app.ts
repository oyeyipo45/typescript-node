import express, { Request, Response, NextFunction } from "express"
import taskRoutes from "./routes/tasks"


const app = express()

app.use("/tasks", taskRoutes)

app.use((err: Error, req : Request, res : Response, next : NextFunction ) => {
    res.status(500).json({message: err.message})
})
app.listen(3000)