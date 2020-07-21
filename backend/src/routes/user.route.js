import express from 'express';
import {
    users_get,
    user_profile_get,
    user_profile_update
} from '../controllers/user.controller';

const usersRouter = express.Router()

usersRouter.get('/', users_get)

usersRouter.get('/:id', user_profile_get)

usersRouter.post('/:id', user_profile_update)

export default usersRouter;
