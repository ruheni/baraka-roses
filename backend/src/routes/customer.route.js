import express from 'express';
import {
    customers_get,
    customer_profile_get,
    customer_profile_post
} from '../controllers/customer.controller';

const customersRouter = express.Router()

customersRouter.get('/', (req, res) => customers_get)

customersRouter.get('/:id', customer_profile_get)

customersRouter.post('/', customer_profile_post)

export default customersRouter
