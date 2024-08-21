import User from "../models/userModel.js";
import asynHandler from "../middleware/asyncHandler.js";
import bcrypt from 'bcryptjs';

const createUser = asynHandler(async (req, res) => {
   const {username, email, password} = req.body;

   if(!username || !email || !password){
    throw new Error('Please fill all the inputs.')
   }
   const {userExit} = await User.findOne({email}) || {};
   if(userExit) res.status(400).send('User already exists');

   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   const newUser = new User({username, email, password: hashedPassword});

   try {
    await newUser.save();
    res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin
    })
   } catch (error) {
    res.status(400);
    throw new Error('Invalid user data')
   }

})

const getAllUser = asynHandler(async (req, res) => {
    const users = User.find()
    res.status(200).json(users);
})

export {
    createUser,
    getAllUser
}