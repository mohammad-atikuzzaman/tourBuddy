import React from "react";
import { Star } from "lucide-react";
import Review from "../components/Review";
import GuideProfile from "../components/GuideProfile";

const GuideDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-16 py-8 font-mulish">
      <h2 className="text-xl font-semibold mb-6">Your Selected Guide:</h2>

      <GuideProfile/>

      <div className="mb-10 flex justify-between items-center">
        <div className="mb-4">
          <div className="flex items-center">
            <h2 className="text-5xl font-black mr-4">4.0</h2>
            <span className="ml-4 text-gray-500">14 Reviews</span>
          </div>
          <div className="flex">
            <Star className="w-10 h-10 text-yellow-400 fill-current" />
            <Star className="w-10 h-10 text-yellow-400 fill-current" />
            <Star className="w-10 h-10 text-yellow-400 fill-current" />
            <Star className="w-10 h-10 text-yellow-400 fill-current" />
            <Star className="w-10 h-10 text-gray-300" />
          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl pl-6 pt-6 pr-3 pb-3 mb-6">
          <p className="font-medium">
            Proficiency in: English, Bangla, and French.
          </p>
          <p>Guided: Nearly 20 individuals.</p>
        </div>
      </div>

      <div className="flex flex-col justify-start">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-6">Customer Review</h2>

          <div className="text-sm font-bold text-gray-600">
            <div className="flex items-center justify-between">
              <span>Guide</span>
              <div className="flex items-center">
                <div className="w-48 bg-gray-200 rounded mr-2">
                  <div className="w-44 h-2 bg-yellow-400 rounded"></div>
                </div>
                <span>4.8</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Transportation</span>
              <div className="flex items-center">
                <div className="w-48 bg-gray-200 rounded mr-2">
                  <div className="w-32 h-2 bg-yellow-400 rounded"></div>
                </div>
                <span>3.0</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Value for money</span>
              <div className="flex items-center">
                <div className="w-48 bg-gray-200 rounded mr-2">
                  <div className="w-40 h-2 bg-yellow-400 rounded"></div>
                </div>
                <span>4.5</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Safety</span>
              <div className="flex items-center">
                <div className="w-48 bg-gray-200 rounded mr-2">
                  <div className="w-36 h-2 bg-yellow-400 rounded"></div>
                </div>
                <span>4.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 px-4 mt-6">
          <Review />
          <Review />
        </div>

        <button className="text-[#7BBCB0] text-sm mt-24 underline font-bold">View More Comments</button>
      </div>
    </div>
  );
};

export default GuideDetailsPage;
