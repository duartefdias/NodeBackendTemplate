import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    date: {
        type: Date
    }

})

const User = mongoose.model('users', userSchema)

export default User