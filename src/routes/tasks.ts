import express from "express"
import { getTask, createTask, editTask, deleteTask, getSingleTask } from "../controllers/taskController"


const router = express.Router()


router.get('/', getTask)

router.get('/:id', getSingleTask)

router.post('/', createTask)

router.put('/edit/:id', editTask)

router.delete('/delete/:id', deleteTask)



export { router as taskRouter }