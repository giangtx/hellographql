import mongoose from 'mongoose';

const Todo = mongoose.model(
    "todo",
    mongoose.Schema({
        id: Number,
        name: String,
        description: String,
        task: {
            id: Number,
            name: String
        }
    }, {
        collection: "todo"
    })
)
export default Todo;