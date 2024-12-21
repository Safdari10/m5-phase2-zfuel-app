import { mongoose } from '@/db/connection';

const StationSchema = new mongoose.Schema({
  name: String,
  address: String,
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
}, {
  collection: 'stations'
});

// Create the model only if it doesn't exist
const Station = mongoose.models.Station || mongoose.model('Station', StationSchema);

export default Station;