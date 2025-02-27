import React from "react";

interface PaymentMethodProps {
  selectedMethod: string | null;
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
    <div className="pl-4 flex items-center flex-wrap gap-6">
      {paymentMethods.map((method) => (
        <label
          key={method.id}
          className={`px-4 py-1 rounded-full flex items-center cursor-pointer ${
            selectedMethod === method.id
              ? "bg-[#2782a7] text-white"
              : "bg-[#37B1E2] text-white"
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
            className="hidden "
          />
          <button className="mx-1 text-3xl flex">●</button> {method.label}
        </label>
      ))}
    </div>
  );
};

export default SelectPaymentMethod;
