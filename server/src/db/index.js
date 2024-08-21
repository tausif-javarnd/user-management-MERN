import mongoose from 'mongoose';

const connectDB = async () => {
    try {
      // Connect to MongoDB
      await mongoose.connect('mongodb://127.0.0.1:27017/latest_db');
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1); // Exit process with failure
    }
  };
  
export default connectDB;
