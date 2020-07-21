import express from 'express'
import {
    products_get,
    product_details_post,
    product_details_get
} from '../controllers/product.controller'

const productsRouter = express.Router()

productsRouter.get('/', products_get)

productsRouter.post('/', product_details_post)

productsRouter.get('/:id', product_details_get)

export default productsRouter
