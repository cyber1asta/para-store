import React from 'react';
import { Link } from 'react-router-dom';

const JournalSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8 lg:pr-12">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Sukin_Journal_Heading_2-01_2500x2500_6e692e60-90cb-4cd0-9006-a6f1d09fe1c4_360x.png?v=1613561992" 
              alt="Sukin Journal" 
              className="w-72 mx-auto lg:mx-0"
            />
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Discover the world of natural through our <br />
            eyes! From skincare tips, lifestyle and <br />
            environmental hacks to inspirational <br />
            interviews! Explore it all.
          </p>
          
          <Link to="/journal/april">
            <button className="group relative overflow-hidden px-8 py-4 bg-green-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="relative z-10">READ THE JOURNAL</span>
              <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Article */}
            <Link to="/journal/april" className="group">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/400x400_blog_540x.jpg?v=1652511342" 
                    alt="April Blog" 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                  APRIL BLOG: PROTECTIVE HAIRCARE STYLE AND TIPS
                </h3>
                <div className="w-12 h-1 bg-green-700 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
            </Link>

            {/* Second Article */}
            <Link to="/journal/bbq" className="group">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0081/7374/8305/articles/BBQ_1200x440_7b63676b-f505-4b21-9192-e1b43a53be32_540x.jpg?v=1625596357" 
                    alt="BBQ Guide" 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                  SUKIN'S GUIDE TO A BACKYARD BBQ
                </h3>
                <div className="w-12 h-1 bg-green-700 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalSection;