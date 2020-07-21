import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema({
    status: {
        type: String,
        enum: ['pending', 'cancelled', 'reviewed'],
        required: true,
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true,
        array: true,
    }
})

const orderModel = mongoose.model('orders', orderSchema)

export default orderModel
