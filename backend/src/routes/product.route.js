import express from 'express'

const productsRouter = express.Router()

productsRouter.get('/', (req, res) => {
    res.json({ message: 'products here' })
})

productsRouter.post('/', (req, res) => {
    res.json({ message: 'creating product here' })
})

productsRouter.get('/:id', (req, res) => {
    res.json({ message: `product: ${req.params.id}` })
})

export default productsRouter
