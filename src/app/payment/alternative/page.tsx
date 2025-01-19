"use client";

import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AlternativePayment = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            
            <main className="flex-grow">
                <div className="bg-gradient-to-r from-[#FF8A00] to-[#FFB01F] h-32">
                    <div className="max-w-7xl mx-auto px-8 h-full flex justify-center items-center">
                        <h1 className="text-3xl font-extrabold text-white">Alternative Payment Methods</h1>
                    </div>
                </div>
                
                <div className="px-12 mt-12 mb-32">
                    <div className="max-w-md ml-8 space-y-6">
                        <h2 className="text-[#FF6B00] text-[28px] font-bold mb-8">Select a payment method</h2>
                        
                        {/* Payment options */}
                        <button className="w-full p-4 text-left border-2 border-[#1E1B4B] rounded-lg hover:bg-gray-50">
                            <div className="flex items-center">
                                <div className="flex-1">
                                    <p className="text-lg font-bold text-[#1E1B4B]">Internet Banking</p>
                                    <p className="text-sm text-gray-600">Pay directly from your bank account</p>
                                </div>
                            </div>
                        </button>

                        <button className="w-full p-4 text-left border-2 border-[#1E1B4B] rounded-lg hover:bg-gray-50">
                            <div className="flex items-center">
                                <div className="flex-1">
                                    <p className="text-lg font-bold text-[#1E1B4B]">PayPal</p>
                                    <p className="text-sm text-gray-600">Pay with your PayPal account</p>
                                </div>
                            </div>
                        </button>

                        <button 
                            onClick={() => router.back()}
                            className="mt-8 w-full py-3 text-[#1E1B4B] text-lg font-bold border-2 border-[#1E1B4B] rounded-lg hover:bg-gray-50"
                        >
                            Back to Card Payment
                        </button>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default AlternativePayment;
