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

  const [street, city] = address.split(',');

  if (!street || !city) {
    return NextResponse.json({ error: 'Address must include street and city' }, { status: 400 });
  }

  try {
    const station = await ZFuelStation.findOne({
      'address.street': street.trim(),
      'address.city': city.trim()
    });

    if (!station) {
      return NextResponse.json({ error: 'Station not found' }, { status: 404 });
    }

    return NextResponse.json({ prices: station.prices });
  } catch (error) {
    return NextResponse.json({ error: 'Error retrieving fuel prices' }, { status: 500 });
  }
}