import express from 'express';
import * as userController from '../controllers/userController.js';
import { validateString, validateStringAsNumber } from './typeValidators.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    try {
        const limit = validateStringAsNumber(req.query.limit, "limit");
        const offset = validateStringAsNumber(req.query.offset, "offset");
        const users = await userController.getAllUsers(limit, offset);

        res.send(users);
    } catch (err) {
        console.error(err, err.message);
        res.status(400).send(err.message);
    }
});

userRouter.get('/usersByName/:name', async (req, res) => {
    try {
        const name = validateString(req.params.name, "name");
        const users = await userController.getUsersByName(name);

        res.send(users);
    } catch (err) {
        console.error(err, err.message);
        res.status(400).send(err.message);
    }
});

userRouter.get('/usersByEmail/:email', async (req, res) => {
    try {
        const email = validateString(req.params.email, "email");
        const users = await userController.getUsersByEmail(email);

        res.send(users);
    } catch (err) {
        console.error(err, err.message);
        res.status(400).send(err.message);
    }
});

export default userRouter;
