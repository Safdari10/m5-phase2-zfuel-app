import mongoose from 'mongoose';
import connectDB from './connection.js';
import ZFuelStation from './model.js';

const seedData = async () => {
  await connectDB();

  const stations = [
    {
      address: {
        street: '123 Main St',
        city: 'Auckland',
        state: 'AKL',
        zip: '1010'
      },
      prices: {
        diesel: 1.50,
        fuel91: 2.00,
        fuel95: 2.20
      }
    },
    {
      address: {
        street: '456 Queen St',
        city: 'Wellington',
        state: 'WLG',
        zip: '6011'
      },
      prices: {
        diesel: 1.55,
        fuel91: 2.05,
        fuel95: 2.25
      }
    },
    {
      address: {
        street: '789 King St',
        city: 'Christchurch',
        state: 'CHC',
        zip: '8011'
      },
      prices: {
        diesel: 1.60,
        fuel91: 2.10,
        fuel95: 2.30
      }
    }
  ];

  try {
    await ZFuelStation.deleteMany({});
    await ZFuelStation.insertMany(stations);
    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();