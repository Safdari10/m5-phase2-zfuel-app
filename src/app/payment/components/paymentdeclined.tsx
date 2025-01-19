import React from 'react';
import { useRouter } from 'next/navigation';

const PaymentDeclined = () => {
    const router = useRouter();

    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center">
            <div className="max-w-md w-full p-6">
                <div className="flex items-center mb-4">
                    <button
                        onClick={() => router.back()}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        ←
                    </button>
                    <div className="ml-4 flex items-center">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <h2 className="ml-2 text-xl font-bold">Payment Declined</h2>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <p className="text-gray-600">
                        We're sorry, but your payment was not successful. Please check your payment details and try again.
                    </p>
                    <p className="text-gray-600">
                        If the issue persists, contact your bank or reach out to our support team for assistance.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={() => router.back()}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => router.push('/payment')}
                            className="flex-1 px-4 py-2 border border-transparent rounded-full text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Try another card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDeclined;
