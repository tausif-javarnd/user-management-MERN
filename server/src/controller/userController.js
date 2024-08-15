import User from "../models/userModel.js";
import asynHandler from "../middleware/asyncHandler.js";

const createUser = asynHandler(async (req, res) => {
    console.log('createUser')
    res.send('Hello')
})

export {
    createUser
}