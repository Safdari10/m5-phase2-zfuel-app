import mongoose, { Document } from 'mongoose';

export interface IPayment extends Document {
    userId: string;
    cardName: string;
    cardType: string;
    lastFourDigits: string;
    createdAt: Date;
}

const PaymentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    cardName: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    lastFourDigits: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema);
