import React from "react";

interface PaymentMethodProps {
  selectedMethod: string;
  setSelectedMethod: (method: string) => void;
}

const SelectPaymentMethod: React.FC<PaymentMethodProps> = ({
  selectedMethod,
  setSelectedMethod,
}) => {
  const paymentMethods = [
    { id: "bkash", label: "bKash" },
    { id: "nagad", label: "Nagad" },
    { id: "upay", label: "UPAY" },
    { id: "visa", label: "VISA" },
    { id: "mastercard", label: "MasterCard" },
    { id: "others", label: "Others" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {paymentMethods.map((method) => (
        <label
          key={method.id}
          className={`px-4 py-2 rounded-full flex items-center cursor-pointer ${
            selectedMethod === method.id
              ? "bg-[#37B1E2] text-white"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          <input
            type="radio"
            name="paymentMethod"
            value={method.id}
            checked={selectedMethod === method.id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedMethod(e.target.value)
            }
            className="hidden"
          />
          <span className="mr-1 text-2xl">●</span> {method.label}
        </label>
      ))}
    </div>
  );
};

export default SelectPaymentMethod;
