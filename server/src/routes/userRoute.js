// routes.js
import express from 'express';
import { createUser, loginUser } from '../controller/userController.js';
const userRouter = express.Router();


// Route to get all items (for example)
userRouter.route('/').post(createUser);

// userRouter.route('/login').post(loginUser);
userRouter.post('/login', loginUser);

export default userRouter;