import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin', 'sales_exec', 'general_manager', 'store_clerk'],
        default: 'user'
    },
})

const userModel = mongoose.model('users', userSchema)

export default userModel
