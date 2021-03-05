import mongoose from "mongoose"

interface ITask {
  title: string;
  description: string;
}

interface TaskDoc extends mongoose.Document {
    title: string;
    description: string;
}

interface TaskModelInterface extends mongoose.Model<any>{
    build(attr: ITask): TaskDoc
}

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})




taskSchema.statics.build = (attr: ITask) => {
    return new Task(attr)
}

const Task = mongoose.model<any, TaskModelInterface>('Task', taskSchema)




Task.build({
    title: 'some title',
    description: 'something food'
})


export { Task }
