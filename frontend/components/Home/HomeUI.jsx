import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomeUI = () => {
  return (
    <div className="min-h-[93vh] bg-white">
      <div className="h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          {/* Left Content Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900">
                Reliable Platform for Alumini Engagement
              </h1>
              <p className="text-lg text-gray-600">
                Aluconnect provides reliable platform for colleges to engage with their alumini. and also provides a platform for alumini to connect with their colleges.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Get Started Now
                <ArrowRight size={20} />
              </button>
              <button className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
                Register Your College
              </button>
            </div>

            <div className="flex gap-16 pt-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900">20+</h3>
                <p className="text-sm text-gray-600 mt-2">
                  States where we operate
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900">300+</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Colleges registered
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative max-md:hidden">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="/image/stockImage.jpeg"
                alt="Business professional"
                className="w-full h-[700px] object-cover"
              />
              
              {/* Analytics Cards */}
              <div className="absolute bottom-8 left-[20%] -translate-x-1/2 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg w-max min-w-[300px]">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">User Joined This Month</p>
                      <p className="text-2xl font-bold">4,000</p>
                    </div>
                    <span className="text-green-500 ml-8">↑ 31%</span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg w-max min-w-[300px]">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Colleges Joined This Month</p>
                      <p className="text-2xl font-bold">35</p>
                    </div>
                    <span className="text-red-500 ml-8">↓ 3%</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUI;