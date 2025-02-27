import React, { useState } from "react";
import SelectPaymentMethod from "../components/SelectPaymentMathod";

const PaymentPage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment</h1>

      <div className="flex justify-between">
        <div className="w-[65%]">
          <h2 className="text-4xl font-bold mb-6">Choose Payment Method</h2>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Name:</label>
              <input
                type="text"
                placeholder="Ahnaf Amer"
                className="w-full p-3 border-none bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Transaction Id:
              </label>
              <input
                type="text"
                placeholder="........"
                className="w-full p-3 border-none bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number:</label>
              <input
                type="tel"
                placeholder="+8801321454687"
                className="w-full p-3 border-none bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Pin Code:</label>
              <input
                type="password"
                placeholder="......."
                className="w-full p-3 border-none bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="w-[30%] flex justify-center items-center">
          <img
            src="/paymentImage/payment1.png"
            alt="Payment Method"
            className=" object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full pl-4">
          <div className="items-start mb-8">
            <p className="mb-3 text-[15px] font-bold">Select Method:</p>
            <SelectPaymentMethod
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
            />
          </div>
        </div>
        <button className="bg-gray-900 w-[15%] hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium">
          Confirm Payment
        </button>
        <img src="/paymentImage/ssl2.png" alt="" className="mt-6" />
      </div>
    </div>
  );
};

export default PaymentPage;
