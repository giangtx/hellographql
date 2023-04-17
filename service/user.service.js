import User from '../model/User.js';

export const getAll = async() => {
    try {
        return await User.find({}).limit(100)
    } catch (error) {
        return error
    }
}
export const getById = async(id) => {
    try {
        return await User.findOne({id:id}).limit(100)
    } catch (error) {
        return error
    }
}
export const createUser = async(user) => {
    let { id, name, age} = user;
    try {
        return await User.create({ id, name, age });
    } catch (error) {
        return error;
    }
}
export const updateUser = async(user) => {
    let { _id, name, age } = user;
    try {
        const userUpdate = await User.findOneAndUpdate({_id},{name,age},{returnOriginal: false,useFindAndModify: false});
        console.log(userUpdate)
        return userUpdate;
    } catch (error) {
        return error;
    } 
}