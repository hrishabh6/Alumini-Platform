"use client"
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button'; // Assuming Button is a custom component
import { MdClose, MdEvent, MdCelebration, MdMoreHoriz } from 'react-icons/md';

const PostForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [formData, setFormData] = useState({
    post: '',
    image: null,
    postType: null,
  });

  const popupRef = useRef();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handlePostTypeChange = (type) => {
    setFormData({
      ...formData,
      postType: type,
    });
    setShowMoreOptions(false); // Close the options after selection
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full bg-white shadow-sm p-4 max-md:rounded-none">
      {/* Header Section */}
      <div className="flex items-center gap-3 w-full">
        <Image
          src="/image/profilePicture.png"
          alt="Profile"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <Button
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className="w-full flex-grow text-left border border-gray-100 rounded-full lg:px-4 py-7 my-4 bg-transparent text-black-200 font-medium text-md hover:bg-transparent transition"
        >
          Start a post, try writing with AI
        </Button>
        
      </div>
      <hr className='md:hidden'/>
      {isPopupOpen && (
        <form onSubmit={submitHandler}>
          <div
            ref={popupRef}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
          >
            <div className="bg-white w-full max-w-4xl mx-4 md:mx-auto rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
              {/* Popup Header */}
              <div className="flex justify-between items-center pb-3 border-b">
                <h2 className="text-lg font-semibold">Create a Post</h2>
                <Button onClick={() => setIsPopupOpen(false)}>
                  <MdClose className="text-gray-600 text-xl hover:text-gray-800 transition" />
                </Button>
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
                name="post"
                value={formData.post}
                onChange={handleInputChange}
                rows="8"
                placeholder="What do you want to talk about?"
                className="w-full mt-4 p-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 resize-none text-gray-700 text-lg"
              ></textarea>

              <div className="mt-3">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-600"
                />
              </div>

              <div className="mt-3 flex gap-4">
                <Button
                type='button'
                  onClick={() => handlePostTypeChange('Event')}
                  className={`px-4 py-2 rounded-md transition ${formData.postType === 'Event' ? 'bg-purple-500 text-white' : 'hover:bg-gray-100'}`}
                >
                  <MdEvent className="text-purple-500 text-2xl" />
                  Event
                </Button>
                <Button
                  type='button'
                  onClick={() => handlePostTypeChange('Occasion')}
                  className={`px-4 py-2 rounded-md transition ${formData.postType === 'Occasion' ? 'bg-yellow-500 text-white' : 'hover:bg-gray-100'}`}
                >
                  <MdCelebration className="text-yellow-500 text-2xl" />
                  Occasion
                </Button>

                <div className="relative">
                  <Button
                    type='button'
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <MdMoreHoriz className="text-gray-600 text-2xl" />
                    More
                  </Button>

                  {showMoreOptions && (
                    <div className="absolute bg-white border shadow-lg rounded-lg mt-2 right-0 w-48 p-2">
                      <span
                        onClick={() => handlePostTypeChange('Poll')}
                        className={`w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700 cursor-pointer ${formData.postType === 'Poll' ? 'bg-blue-500 text-white' : ''}`}
                      >
                        Poll
                      </span>
                      <span
                        onClick={() => handlePostTypeChange('Job')}
                        className={`w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700 cursor-pointer ${formData.postType === 'Job' ? 'bg-green-500 text-white' : ''}`}
                      >
                        Job
                      </span>
                      <span
                        onClick={() => handlePostTypeChange('Offer Help')}
                        className={`w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md text-gray-700 cursor-pointer ${formData.postType === 'Offer Help' ? 'bg-red-500 text-white' : ''}`}
                      >
                        Offer help
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-blue-600 text-white py-3 text-lg rounded-md hover:bg-blue-700 transition"
              >
                Post
              </Button>
            </div>
          </div>
        </form>
      )}
      
    </div>
  );
};

export default PostForm;
