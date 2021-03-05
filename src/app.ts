import express, { Request, Response, NextFunction } from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import {taskRouter} from "./routes/tasks"
import { json } from "body-parser"



dotenv.config()
//import {connectDB}  from "./config/connection"



//connect to database
//connectDB()


const app = express()


app.use(json())
// app.use(taskRoutes)

app.use("/api/task", taskRouter )

// app.use((err: Error, req : Request, res : Response, next : NextFunction ) => {
//     res.status(500).json({message: err.message})
// })


mongoose.connect(`${process.env.MONGO_URI}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
        console.log(`MongoDB Connected`)
})
// mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
// mongoose.connection.on("error", err => {
//     console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
// });

const PORT = process.env.PORT || 3000

const server = app.listen(3000, () => {
    console.log(`server is listening on port ${PORT}`);
    console.log(process.env.MONGO_URI);
    console.log(process.env.NODE_ENV);
    
})


// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
