import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ZFuelStationSchema = new Schema({
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true }
  },
  prices: {
    diesel: { type: Number, required: true },
    fuel91: { type: Number, required: true },
    fuel95: { type: Number, required: true }
  }
});

const ZFuelStation = mongoose.model('ZFuelStation', ZFuelStationSchema);

export default ZFuelStation;