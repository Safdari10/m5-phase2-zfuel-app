import { NextResponse } from 'next/server';
import connectDB from '@/db/connection';
import Station from '@/app/find-fuel-station/models/Station';
export async function GET(request: Request) {
 const { searchParams } = new URL(request.url);
 const lat = parseFloat(searchParams.get('lat') || '0');
 const lng = parseFloat(searchParams.get('lng') || '0');
 
 try {
   await connectDB();
   
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
   });
   
   return NextResponse.json(stations);
 } catch (error) {
   console.error('Database error:', error);
   return NextResponse.json({ error: 'Failed to fetch stations' }, { status: 500 });
 }
}