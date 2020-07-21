import express from 'express'
import {
    agents_get,
    agent_profile_get,
    agent_profile_post
} from '../controllers/agent.controller'

const agentsRouter = express.Router()

agentsRouter.get('/', agents_get)

agentsRouter.post('/', agent_profile_post)

agentsRouter.get('/:id', agent_profile_get)

export default agentsRouter
