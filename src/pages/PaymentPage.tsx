import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                className="w-full p-3 border-none  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Transaction Id:
              </label>
              <input
                type="text"
                placeholder="----------"
                className="w-full p-3 border-none  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number:</label>
              <input
                type="tel"
                placeholder="+8801321454687"
                className="w-full p-3 border-none  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Pin Code:</label>
              <input
                type="password"
                placeholder="--------"
                className="w-full p-3 border-none  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* <div className="mb-8">
            <p className="font-medium mb-3">Select Method:</p>
            <SelectPaymentMethod
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
            />
          </div>

          <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium">
            Confirm Payment
          </button> */}

          {/* <div className="mt-8 grid grid-cols-4 sm:grid-cols-5 gap-4">
            {[
              "visa",
              "mastercard",
              "amex",
              "unionpay",
              "diners",
              "dbbl",
              "rocket",
              "bkash",
              "nagad",
              "upay",
            ].map((method) => (
              <div
                key={method}
                className="border border-gray-200 rounded p-2 flex items-center justify-center"
              >
                <img
                  src={`https://via.placeholder.com/80x40/f3f4f6/718096?text=${method}`}
                  alt={method}
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div> */}
        </div>

        <div className="w-[30%] flex justify-center items-center">
          <img
            src="/paymentImage/payment1.png"
            alt="Payment Method"
            className=" object-contain"
          />
        </div>
      </div>
      <div>
        <div className="mb-8">
          <p className="font-medium mb-3">Select Method:</p>
          <SelectPaymentMethod
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
        </div>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium">
          Confirm Payment
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">Payment</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Press Room
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Payment methods possible</h3>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              "mastercard",
              "visa",
              "amex",
              "discover",
              "paypal",
              "applepay",
              "googlepay",
            ].map((method) => (
              <div
                key={method}
                className="border border-gray-200 rounded p-1 flex items-center justify-center"
              >
                <img
                  src={`https://via.placeholder.com/40x25/f3f4f6/718096?text=${method}`}
                  alt={method}
                  className="h-5 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Become a Tour guide for Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
