import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/db/connection';
import ZFuelStation from '@/db/model';

export async function GET(req: NextRequest) {
  await connectDB();

  const searchParams = req.nextUrl.searchParams;
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 });
  }

  // Split by comma and trim each part to handle spaces
  const parts = address.split(',').map(part => part.trim());
  const [street, city] = parts;

  if (!street || !city) {
    return NextResponse.json({ error: 'Address must include street and city' }, { status: 400 });
  }

  try {
    // Case-insensitive search for both street and city
    const station = await ZFuelStation.findOne({
      'address.street': { $regex: new RegExp('^' + street + '$', 'i') },
      'address.city': { $regex: new RegExp('^' + city + '$', 'i') }
    });

    if (!station) {
      return NextResponse.json({ error: 'Station not found' }, { status: 404 });
    }

    return NextResponse.json({ prices: station.prices });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Error retrieving fuel prices' }, { status: 500 });
  }
}