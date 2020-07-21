import express from 'express';

const usersRouter = express.Router()

usersRouter.get('/', (req, res) => {
    res.json({ message: 'users here' })
})

usersRouter.post('/', (req, res) => {
    // create new or update existing..
    const { firstName, lastName, email, password } = req.body

    res.json({ message: 'successful post req', data: { firstName, lastName, email, password } })
})

usersRouter.get('/:id', (req, res) => {
    res.json({ message: `user of id: ${req.params.id}` })
})

usersRouter.delete('/:id', (req, res) => {
    res.json({ message: `deleted user of id: ${req.params.id}` })
})

export default usersRouter;
