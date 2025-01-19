"use client";

import React from 'react';

interface ErrorPopupProps {
    onClose: () => void;
    onTryAnotherCard: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ onClose, onTryAnotherCard }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-red-600">Payment Declined</h2>
                    
                    <p className="text-gray-600">
                        We're sorry, but your payment was not successful. Please check your payment details and try again.
                    </p>
                    
                    <p className="text-gray-600">
                        If the issue persists, contact your bank or reach out to our support team for assistance.
                    </p>

                    <p className="text-gray-600">Thank you!</p>

                    <div className="flex gap-4 w-full mt-6">
                        <button
                            onClick={onClose}
                            className="flex-1 py-3 text-[#1E1B4B] border-2 border-[#1E1B4B] rounded-full hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onTryAnotherCard}
                            className="flex-1 py-3 text-white bg-[#1E1B4B] rounded-full hover:bg-[#2d2a5c]"
                        >
                            Try another card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPopup;
