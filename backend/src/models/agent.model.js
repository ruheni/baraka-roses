import mongoose from 'mongoose'

const Schema = mongoose.Schema

const agentSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    customers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'customers',
            array: true,
        }
    ]
})

