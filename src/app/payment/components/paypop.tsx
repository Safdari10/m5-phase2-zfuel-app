"use client";

import React, { useState } from "react";
import Image from 'next/image';

interface PaymentPopupProps {
    onClose: () => void;
    onPaymentComplete: (success: boolean) => void;
}

const PaymentPopup: React.FC<PaymentPopupProps> = ({ onClose, onPaymentComplete }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePayment = async () => {
        try {
            setIsLoading(true);
            setError("");

            // Basic validation
            if (!cardNumber || !expiryDate || !cvv || !nameOnCard) {
                throw new Error("Please fill in all fields");
            }

            // Format card data
            const lastFourDigits = cardNumber.slice(-4);
            const cardType = cardNumber.startsWith("4") ? "Visa" : "Mastercard";

            // Simulate payment processing
            const response = await fetch('/payment/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: "user123",
                    cardName: nameOnCard,
                    cardType,
                    lastFourDigits,
                }),
            });

            const data = await response.json();

            // Simulate random success/failure for demo
            const success = Math.random() > 0.5;
            
            // Call the completion handler with the result
            onPaymentComplete(success);

        } catch (err: any) {
            setError(err.message || "Something went wrong");
            onPaymentComplete(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-2xl">
                <div className="p-8 space-y-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 border-b pb-6">
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <div className="flex items-center gap-3">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span className="text-2xl font-medium">Add New Card</span>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <label className="block text-[#1E1B4B] text-lg font-medium">Name on Card</label>
                            <input
                                type="text"
                                value={nameOnCard}
                                onChange={(e) => setNameOnCard(e.target.value)}
                                placeholder="Enter name as shown on card"
                                className="w-full p-4 text-lg border rounded-lg"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[#1E1B4B] text-lg font-medium">Card number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                                    placeholder="Please enter your card number"
                                    className="w-full p-4 text-lg border rounded-lg pr-24"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3">
                                    <Image src="/mastercard.png" alt="Mastercard" width={32} height={32} />
                                    <Image src="/visa.png" alt="Visa" width={32} height={32} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-[#1E1B4B] text-lg font-medium">Expiry date</label>
                                <input
                                    type="text"
                                    value={expiryDate}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '');
                                        if (value.length <= 4) {
                                            const month = value.slice(0, 2);
                                            const year = value.slice(2);
                                            setExpiryDate(value.length > 2 ? `${month}/${year}` : value);
                                        }
                                    }}
                                    placeholder="MM/YY"
                                    className="w-full p-4 text-lg border rounded-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[#1E1B4B] text-lg font-medium">CVV</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                                        placeholder="000"
                                        className="w-full p-4 text-lg border rounded-lg pr-12"
                                    />
                                    <button 
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        onClick={() => alert("The CVV is the 3-digit security code on the back of your card")}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 pt-4">
                            <button
                                onClick={onClose}
                                className="w-[100px] h-[28px] bg-white border border-[#1E1B4B] rounded-full text-[#1E1B4B] text-sm font-medium shadow-md"
                                disabled={isLoading}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handlePayment}
                                className="w-[100px] h-[28px] bg-[#1E1B4B] rounded-full text-white text-sm font-medium shadow-md"
                                disabled={isLoading}
                            >
                                {isLoading ? "Processing..." : "Pay"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPopup;
