import mongoose from 'mongoose';

// MongoDB connection options
const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
} as const;

// Local MongoDB connection string
const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/zfuel';

const connectDB = async () => {
    try {
        // If already connected, don't connect again
        if (mongoose.connection.readyState === 1) {
            return;
        }

        // Connect to MongoDB
        await mongoose.connect(URI, options);
        console.log('MongoDB connected successfully');

        // Handle connection events
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        // Handle process termination
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            process.exit(0);
        });

    } catch (error) {
        if (error instanceof Error) {
            console.error("MongoDB connection error:", error.message);
        } else {
            console.error("MongoDB connection error:", error);
        }
        process.exit(1);
    }
}

export default connectDB;