import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

const RightSideBar = () => {
  return (
    <aside className="w-80 h-fit bg-white border-l border-gray-200 p-4 rounded-xl">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Premium Banner */}
      <div className="bg-blue-50 rounded-xl p-4 mb-4">
        <h2 className="text-xl font-bold text-blue-900">40% off Premium</h2>
        <p className="text-blue-700 text-sm mb-3">For a limited time. Unlock the best opportunities.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700">
          Subscribe
        </button>
      </div>

      {/* Trending Jobs Section */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Trending Jobs</h2>
        
        {[
          { title: "Senior React Developer", company: "Google", posts: "5,867 applications" },
          { title: "Data Scientist", company: "Microsoft", posts: "10.6K applications" },
          { title: "Product Manager", company: "Amazon", posts: "2,237 applications" },
          { title: "UI/UX Designer", company: "Apple", posts: "5,552 applications" }
        ].map((job, index) => (
          <div key={index} className="py-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{job.company}</p>
                <p className="font-medium text-gray-900">{job.title}</p>
                <p className="text-sm text-gray-500">{job.posts}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Events Section */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Latest Events</h2>
        
        {[
          { title: "Tech Career Fair 2025", date: "Mar 15", location: "Virtual" },
          { title: "AI Summit", date: "Mar 20", location: "New York" },
          { title: "Web Dev Workshop", date: "Mar 25", location: "Online" },
          { title: "Startup Networking", date: "Mar 30", location: "San Francisco" }
        ].map((event, index) => (
          <div key={index} className="py-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">{event.title}</p>
                <p className="text-sm text-gray-500">{event.date} • {event.location}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="text-blue-500 hover:text-blue-600 text-sm font-medium mt-4 mb-8">
        Show more
      </button>
    </aside>
  );
};

export default RightSideBar;