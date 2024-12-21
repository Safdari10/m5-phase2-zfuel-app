import mongoose from 'mongoose';

interface GlobalMongoose {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: GlobalMongoose | undefined;
}

const URI = 'mongodb://localhost:27017/zfuel';

// Add caching mechanism
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // If we have a connection, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If we don't have a promise to connect, create one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    try {
      cached.promise = mongoose.connect(URI, opts);
      cached.conn = await cached.promise;
      console.log('MongoDB connected successfully');
      return cached.conn;
    } catch (error) {
      cached.promise = null;
      if (error instanceof Error) {
        console.error("MongoDB connection error:", error.message);
      } else {
        console.error("MongoDB connection error:", error);
      }
      throw error; // Let the calling code handle the error instead of exiting
    }
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
};

export default connectDB;