import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Payment from '@/models/Payment';
// improvements to stop people from socket and http explioting and sql injections

interface PaymentRequest {
    userId: string;
    cardName: string;
    cardType: string;
    lastFourDigits: string;
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const body = await request.json() as PaymentRequest;

        const payment = await Payment.create({
            userId: body.userId,
            cardName: body.cardName,
            cardType: body.cardType,
            lastFourDigits: body.lastFourDigits,
        });

        return NextResponse.json({ success: true, data: payment });
    } catch (error) {
        console.error('Payment creation error:', error);
        return NextResponse.json({ success: false, error: 'Failed to save payment information' });
    }
}

export async function GET(request: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json({ success: false, error: 'User ID is required' });
        }

        const payments = await Payment.find({ userId });
        return NextResponse.json({ success: true, data: payments });
    } catch (error) {
        console.error('Payment fetch error:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch payment information' });
    }
}