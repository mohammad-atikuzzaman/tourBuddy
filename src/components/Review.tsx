import { CheckCheck, Star } from "lucide-react";
import React, { FC } from "react";

const Review: FC = () => {
  return (
    <div className="border-b pb-2 flex justify-between items-center">
      <div className="flex items-center gap-2 mb-3 w-[25%]">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          alt="Arlene McCoy"
          className="w-12 h-16 border-4 border-white rounded-full object-cover mr-4"
        />
        <div className="space-y-2">
          <div className="flex ">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-gray-300" />
          </div>
          <h3 className="font-medium  text-[15px]">Arlene McCoy</h3>
          <p className="text-sm text-gray-500">2 October 2022</p>
        </div>
        <CheckCheck className="text-green-700" />
      </div>

      <div className="w-[80%]">
        <h4 className="font-medium mb-2 text-[15px]">"Amazing Guide!"</h4>
        <p className="text-gray-700 text-sm">
          Our Tour Guide in Kuakata Was Fantastic! They Showed Us The Best Spots
          For Sunrise And Sunset, Shared Fascinating Local Stories, And Made The
          Trip Smooth And Enjoyable. Their Friendly Attitude And Attention To
          Detail Truly Made Our Visit Unforgettable. Highly Recommend!
        </p>
        <div className="flex justify-end mt-3">
          <p className="text-sm text-gray-500 mr-2">Helpful?</p>
          <button className="text-sm text-green-600">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
