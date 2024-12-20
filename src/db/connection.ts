import mongoose from 'mongoose';


const URI ='mongodb://localhost:27017/express-mongo';

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        if (error instanceof Error) {
            console.error("MongoDB connection error:", error.message);
        } else {
            console.error("MongoDB connection error:", error);
        }
        process.exit(1);
    }
}

module.exports = connectDB;