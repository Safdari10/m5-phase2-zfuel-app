import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/Phase2';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  try {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      family: 4,
    };

    console.log('Connecting to MongoDB at:', MONGODB_URI);
    cached.conn = await mongoose.connect(MONGODB_URI, opts);
    
    // Create indexes after connection
    const Station = mongoose.models.Station || mongoose.model('Station', new mongoose.Schema({
      location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
    }), 'ZFUEL');

    // Ensure index exists
    await Station.collection.createIndex({ location: '2dsphere' });
    
    console.log('Connected to MongoDB successfully');
    return cached.conn;

  } catch (e) {
    console.error('MongoDB connection error:', e);
    throw e;
  }
}

// Export mongoose instance and connection function
export { mongoose };
export default connectDB;