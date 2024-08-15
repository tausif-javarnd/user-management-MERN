// routes.js
import express from 'express';
import { createUser } from '../controller/userController.js';
const userRouter = express.Router();


// Route to get all items (for example)
userRouter.route('/').get(createUser);

export default userRouter;