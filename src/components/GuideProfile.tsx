import { Car, Clock, Star, Users } from "lucide-react";
import { FC } from "react";
import { FaPhone } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const GuideProfile: FC = () => {
  return (
    <div className=" mb-10 flex justify-between items-center ">
      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row gap-6 items-center w-[70%]">
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
            alt="Raihan Ahmad"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>

        <div className="flex-grow ">
          <div className="flex flex-wrap items-center gap-3 mb-2 pt-4">
            <span className="bg-[#7BBCB0] text-white px-6 py-1 rounded-full text-sm">
              KUAKATA
            </span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-gray-300" />
              <span className="ml-1 text-sm text-gray-600">(584 reviews)</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-3 font-volkhov">Raihan Ahmad</h1>

          <div className="flex flex-wrap gap-4 mb-2">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-1" />
              <span>2 hours</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Car className="w-5 h-5 mr-1" />
              <span>Transport</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-1" />
              <span>Family Plan</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <GrUserExpert className="mx-1" />
              <span>2 years</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MdLocationPin className="text-xl mr-1" />
              <span>Kuakata</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaPhone className=" mr-1" />
              <span>+8801700000000</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between pr-6">
          <div className="text-right">
            <p className="text-2xl font-bold text-teal-600">Tk 250.00</p>
            <p className="text-sm text-gray-500">per person</p>
          </div>
        </div>
      </div>
      <Link
        to="/payment"
        className="bg-gray-900 hover:bg-gray-800 text-white w-[20%] text-center font-orbitron rounded-[42px] font-medium text-2xl py-8"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default GuideProfile;
