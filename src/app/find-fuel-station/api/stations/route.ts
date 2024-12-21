import { NextResponse } from 'next/server';
import connectDB from '@/db/connection';
import Station from '@/app/find-fuel-station/models/Station';

export async function GET(request: Request) {
  try {
    // Connect to database
    await connectDB();
    
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const lat = parseFloat(searchParams.get('lat') || '0');
    const lng = parseFloat(searchParams.get('lng') || '0');

    // Validate coordinates
    if (isNaN(lat) || isNaN(lng)) {
      return NextResponse.json(
        { error: 'Invalid coordinates provided' }, 
        { status: 400 }
      );
    }
    
    // Find stations within 20km radius
    const stations = await Station.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          },
          $maxDistance: 20000 // 20km in meters
        }
      }
    }).exec(); // Add .exec() to properly execute the query
    
    // Return stations
    return NextResponse.json({ stations });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stations' }, 
      { status: 500 }
    );
  }
}