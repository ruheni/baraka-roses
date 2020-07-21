import express from 'express'

const ordersRouter = express.Router()

ordersRouter.get('/', (req, res) => {
    res.json({ message: 'products here' })
})

ordersRouter.post('/', (req, res) => {
    res.json({ message: 'creating product here' })
})

ordersRouter.get('/:id', (req, res) => {
    res.json({ message: `product: ${req.params.id}` })
})

export default ordersRouter
