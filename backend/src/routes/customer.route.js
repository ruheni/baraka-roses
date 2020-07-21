import express from 'express';

const customersRouter = express.Router()

customersRouter.get('/', (req, res) => {
    res.json({ message: 'fetching customers' })
})

customersRouter.get('/:id', (req, res) => {
    res.json({ message: `fetching customer of id: ${req.params.id}` })
})

customersRouter.post('/', (req, res) => {
    // create new or update existing customer
    res.json({ message: 'posting customer data' })
})

export default customersRouter
