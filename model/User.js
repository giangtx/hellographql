import mongoose from 'mongoose';

const User = mongoose.model(
    "user",
    mongoose.Schema({
        id: Number,
        name: String,
        age: Number
    },{
        collection: "user"
    })
)
export default User;
