"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import PaymentPopup from "./components/paypop";
import SuccessPopup from "./components/SuccessPopup";
import ErrorPopup from "./components/ErrorPopup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Card {
    userId: string;
    cardName: string;
    cardType: string;
    lastFourDigits: string;
    _id: string;
}

const Payment = () => {
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [cards, setCards] = useState<Card[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const userId = "user123"; 
                const response = await fetch(`/payment/api?userId=${userId}`);
                const data = await response.json();
                if (data.success) {
                    setCards(data.data);
                }
            } catch (error) {
                console.error('Failed to fetch cards:', error);
            }
        };

        fetchCards();
    }, []);

    const handlePaymentResult = (success: boolean) => {
        setShowPaymentPopup(false);
        if (success) {
            setShowSuccessPopup(true);
        } else {
            setShowErrorPopup(true);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            
            <main className="flex-grow">
                <div className="bg-gradient-to-r from-[#FF8A00] to-[#FFB01F] h-32">
                    <div className="max-w-7xl mx-auto px-8 h-full flex justify-center items-center">
                        <h1 className="text-3xl font-extrabold text-white">My Payment Cards</h1>
                    </div>
                </div>
                
                <div className="px-12 mt-12 mb-32">
                    <div className="max-w-md ml-8">
                        <h2 className="text-[#FF6B00] text-[28px] font-bold mb-8">Use my card</h2>
                        
                        {cards.map((card, index) => (
                            <div key={index} className="border border-[#FF6B00] rounded-2xl p-6 bg-white mb-4">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-0.5">
                                        <p className="text-base font-bold">{card.cardName}</p>
                                        <p className="text-base font-bold">{card.cardType}</p>
                                    </div>
                                    <div className="text-base font-bold">{card.lastFourDigits}</div>
                                </div>
                            </div>
                        ))}
                        
                        <div className="flex justify-center gap-4 mb-12">
                            <button
                                onClick={() => router.back()}
                                className="w-[100px] h-[28px] bg-white border border-[#1E1B4B] rounded-full text-[#1E1B4B] text-sm font-medium shadow-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setShowPaymentPopup(true)}
                                className="w-[100px] h-[28px] bg-[#1E1B4B] rounded-full text-white text-sm font-medium shadow-md"
                            >
                                Pay
                            </button>
                        </div>

                        <button
                            onClick={() => router.push('/payment/alternative')}
                            className="w-full py-3 text-[#1E1B4B] text-lg font-bold border-2 border-[#1E1B4B] rounded-lg hover:bg-gray-50"
                        >
                            Use another payment method
                        </button>
                    </div>
                </div>
            </main>
            
            {showPaymentPopup && (
                <PaymentPopup 
                    onClose={() => setShowPaymentPopup(false)} 
                    onPaymentComplete={handlePaymentResult}
                />
            )}
            
            {showSuccessPopup && (
                <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
            )}
            
            {showErrorPopup && (
                <ErrorPopup 
                    onClose={() => setShowErrorPopup(false)}
                    onTryAnotherCard={() => {
                        setShowErrorPopup(false);
                        setShowPaymentPopup(true);
                    }}
                />
            )}
            
            <Footer />
        </div>
    );
};

export default Payment;
