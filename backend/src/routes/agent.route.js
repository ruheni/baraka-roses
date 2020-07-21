import express from 'express'

const agentsRouter = express.Router()

agentsRouter.get('/', (req, res) => {
    res.json({ message: 'agents' })
})

agentsRouter.post('/', (req, res) => {
    res.json({ message: 'agent created' })
})

agentsRouter.get('/:id', (req, res) => {
    res.json({ message: `agent: ${req.params.id}` })
})
export default agentsRouter
