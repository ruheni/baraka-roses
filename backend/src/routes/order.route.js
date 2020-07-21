import express from 'express'
import {
    orders_get,
    order_details_get,
    order_details_post
} from '../controllers/order.controller'

const ordersRouter = express.Router()

ordersRouter.get('/', orders_get)

ordersRouter.post('/', order_details_post)

ordersRouter.get('/:id', order_details_get)

export default ordersRouter
