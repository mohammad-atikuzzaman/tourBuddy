import { FC } from "react";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer: FC = () => {
  return (
    <footer className="bg-[#13253F] text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-slate-500">tour buddy</h2>
        <div className=" px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {/* Language & Currency Selectors */}
            <div className="space-y-4 mt-8">
              <div className="relative inline-block min-w-[200px]">
                <button
                  className="w-full flex items-center justify-between border border-navy-dark/50 bg-navy-dark/30 rounded p-3 text-sm"
                  aria-label="Select language"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex items-center">
                      <img
                        src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                        alt="UK Flag"
                        className="w-5 h-3.5 mr-2"
                      />
                      English (UK)
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </button>
              </div>
              <br />

              <div className="relative inline-block min-w-[200px]">
                <button
                  className="w-full flex items-center justify-between border border-navy-dark/50 bg-navy-dark/30 rounded p-3 text-sm"
                  aria-label="Select currency"
                >
                  <span>U.S. Dollar ($)</span>
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </button>
              </div>
            </div>

            {/* Payment Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Payment</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press Room
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Help</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-lg font-medium mb-14">
                Payment methods possible
              </h3>
              <div className="grid grid-cols-5 gap-y-2 mb-2 justify-center">
                <img
                  src="/paymentMethodsImages/mastercard.png"
                  alt="Mastercard"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/bitpay.png
                "
                  alt="BitPay"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/visa.png"
                  alt="Visa"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/americanExpress.png"
                  alt="American Express"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/discover.png"
                  alt="Discover"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/mastreo.png"
                  alt="Klarna"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/sofort.png"
                  alt="Klarna"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/gpay.png"
                  alt="Google Pay"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/applePay.png"
                  alt="Apple Pay"
                  className="h-8 bg-white rounded"
                />
                <img
                  src="/paymentMethodsImages/paypal.png"
                  alt="PayPal"
                  className="h-8 bg-white rounded"
                />
              </div>

              <a href="#" className="text-sm hover:underline transition-colors">
                Become a Tour guide for Us
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright 2025 Tour Buddy. All Rights Reserved
            </p>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <RiInstagramFill />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
