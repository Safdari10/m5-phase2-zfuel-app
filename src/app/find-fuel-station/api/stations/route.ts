import { NextResponse } from 'next/server';
import connectDB from '@/app/find-fuel-station/db/connection';
import Station from '@/app/find-fuel-station/models/Station';

export async function GET(request: Request) {
  try {
    // Connect to database
    await connectDB();
    
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const lat = parseFloat(searchParams.get('lat') || '0');
    const lng = parseFloat(searchParams.get('lng') || '0');

    console.log('Searching for stations near:', { lat, lng });

    // First verify we can get all stations
    const allStations = await Station.find({}).exec();
    console.log('Total stations in database:', allStations.length);

    // Then do the geospatial query
    const stations = await Station.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          },
          $maxDistance: 20000
        }
      }
    }).exec();

    console.log('Found nearby stations:', stations.length);

    return NextResponse.json({
      success: true,
      count: stations.length,
      stations: stations.map(station => {
        const stationObj = station.toObject();
        return {
          ...stationObj,
          id: stationObj._id.toString() // Convert MongoDB _id to string id
        };
      })
    });

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch stations',
        details: error instanceof Error ? error.message : String(error)
      }, 
      { status: 500 }
    );
  }
}