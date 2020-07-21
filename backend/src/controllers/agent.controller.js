/**
 *  GET - agents
 *  POST - create || update agent's data
 *  GET/:id - fetch agent's data
 */
const agents_get = (req, res) => {
    res.json({ message: 'coming soon GET' })
}

const agent_profile_post = (req, res) => {
    res.json({ message: 'coming soon POST' })
}

const agent_profile_get = (req, res) => {
    res.json({ message: 'coming soon' })
}

export {
    agent_profile_get,
    agent_profile_post,
    agents_get
}
