import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
    color: {
        type: String,
        enum: ['bi_color', 'cerise', 'lilac', 'orange', 'peach', 'pink', 'red', 'white', 'yellow'],
        required: true,
    },
    grade: {
        type: String,
        enum: ['graded', 'ungraded'],
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    variety: {
        type: String,
        required: true,
        trim: true,
    }
})

const productModel = mongoose.model('products', productSchema)

export default productModel
