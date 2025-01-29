"use client";
import React, { useState, useRef, useEffect } from "react";
import { MdClose, MdEvent, MdCelebration, MdMoreHoriz } from "react-icons/md";
import Image from "next/image";

const PostCreator = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-4 relative">
      {/* Header Section */}
      <div className="flex items-center gap-3">
        <Image
          src="/image/profilePicture.png"
          alt="Profile"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <button
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className="flex-grow text-left border border-gray-300 rounded-full px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
        >
          Start a post, try writing with AI
        </button>
      </div>

      {isPopupOpen && (
        <div
          ref={popupRef}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
        >
          <div className="bg-white w-full max-w-4xl mx-4 md:mx-auto rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
            {/* Popup Header */}
            <div className="flex justify-between items-center pb-3 border-b">
              <h2 className="text-lg font-semibold">Create a Post</h2>
              <button onClick={() => setIsPopupOpen(false)}>
                <MdClose className="text-gray-600 text-xl hover:text-gray-800 transition" />
              </button>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <Image
                src="/image/profilePicture.png"
                alt="Profile"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium text-gray-800">John Doe</span>
            </div>

            <textarea
              rows="8"
              placeholder="What do you want to talk about?"
              className="w-full mt-4 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 resize-none text-gray-700 text-lg"
            ></textarea>

            <div className="mt-3">
              <input
                type="file"
                className="block w-full text-sm text-gray-600"
              />
            </div>

            <div className="flex gap-4 mt-4 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                <MdEvent className="text-purple-500 text-2xl" />
                <span className="text-gray-700 font-medium">Event</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                <MdCelebration className="text-yellow-500 text-2xl" />
                <span className="text-gray-700 font-medium">Occasion</span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowMoreOptions(!showMoreOptions)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  <MdMoreHoriz className="text-gray-600 text-2xl" />
                  <span className="text-gray-700 font-medium">More</span>
                </button>
                {showMoreOptions && (
                  <div className="absolute bg-white border shadow-lg rounded-lg mt-2 right-0 w-48 p-2">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700">
                      Poll
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700">
                      Job
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700">
                      Offer help
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 text-lg rounded-md hover:bg-blue-700 transition">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreator;