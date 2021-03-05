import express from "express"
import { getTask, createTask } from "../controllers/taskController"


const router = express.Router()


router.get('/', getTask)

router.post('/', createTask)


export { router as taskRouter }