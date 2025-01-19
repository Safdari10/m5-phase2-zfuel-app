"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface SuccessPopupProps {
    onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={onClose} 
        >
            <div 
                className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8"
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-[#1E1B4B]">Order Confirmed</h2>
                    
                    <p className="text-gray-600">
                        Your request has been successfully sent to our team at Z.
                    </p>
                    
                    <p className="text-gray-600">
                        We'll notify you shortly with a confirmation and details on when your order will be ready for pick-up. Stay tuned!
                    </p>

                    <div className="w-32 h-32 my-6">
                        <div className="bg-gradient-to-r from-[#FF8A00] to-[#FFB01F] w-full h-12 rounded-full transform -rotate-12"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPopup;
