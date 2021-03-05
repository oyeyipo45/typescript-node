import express from "express"
import { getTask, createTask } from "../controllers/taskController"

const router = express.Router()


router.get('/', getTask)

router.get('/', createTask)




export { router as taskRouter }