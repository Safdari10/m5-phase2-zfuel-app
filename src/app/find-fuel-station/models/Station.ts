import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  name: String,
  address: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  phone: String,
  hours: {
    Sun: String,
    Mon: String,
    Tue: String,
    Wed: String,
    Thu: String,
    Fri: String,
    Sat: String
  },
  services: [String]
});

// Create a geospatial index
StationSchema.index({ location: '2dsphere' });

// Check if the model exists before creating a new one
const Station = mongoose.models.Station || mongoose.model('Station', StationSchema);

export default Station;