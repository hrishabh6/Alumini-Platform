"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';

const OnboardingFlow = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    role: '',

    // Step 2
    profileImage: null,
    bio: '',
    linkedin: '',
    github: '',
    portfolio: '',

    // Step 3
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    isCurrentlyWorking: false,

    // Step 4
    college: '',
    degree: '',
    idCard: null,
    fieldOfStudy: '',
    rollNumber: ''
  });

  const totalSteps = 4;

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    // Here you would typically send the formData to your API
    console.log('Form submitted:', formData);
    router.push('/dashboard'); // Redirect after completion
  };

  const renderProgressBar = () => {
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between mb-2">
          <h2 className="text-xl font-semibold">Account set up</h2>
          <span className="text-lg">{currentStep}/{totalSteps}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Which describes you the best?</h1>
      <div className="flex flex-col gap-4">
        {['College Student', 'Working Professional', 'Looking for a job'].map((option) => (
          <label
            key={option}
            className={`p-6 border rounded-xl cursor-pointer hover:border-blue-500 transition-colors
              ${formData.role === option ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
          >
            <input
              type="radio"
              name="role"
              value={option}
              checked={formData.role === option}
              onChange={handleInputChange}
              className="hidden"
            />
            <span className="text-lg">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Personal Details</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Profile Image */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Profile Picture</label>
          <div className="flex items-center gap-4">
            {formData.profileImage && (
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={URL.createObjectURL(formData.profileImage)}
                  alt="Profile preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <label className="flex items-center px-4 py-3 text-sm border rounded-lg cursor-pointer hover:bg-gray-50">
              <Upload className="w-5 h-5 mr-2" />
              Upload Photo
              <input
                type="file"
                name="profileImage"
                onChange={handleInputChange}
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-sm"
            rows={4}
            placeholder="Tell us about yourself..."
          />
        </div>

        {/* Social Links */}
        {['linkedin', 'github', 'portfolio'].map((platform) => (
          <div key={platform}>
            <label className="block text-sm font-medium mb-2 capitalize">{platform}</label>
            <input
              type="url"
              name={platform}
              value={formData[platform]}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg text-sm"
              placeholder={`Your ${platform} URL`}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Professional Background</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Company */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Company Name</label>
          <select
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select Company</option>
            <option value="company1">Company 1</option>
            <option value="company2">Company 2</option>
          </select>
        </div>

        {/* Position */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
            placeholder="Your position"
          />
        </div>

        {/* Dates */}
        <div>
          <label className="block text-sm font-medium mb-2">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            disabled={formData.isCurrentlyWorking}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Currently Working */}
        <div className="md:col-span-2">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="isCurrentlyWorking"
              checked={formData.isCurrentlyWorking}
              onChange={handleInputChange}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm">I currently work here</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wrap Up and Complete</h1>
        <h2 className="text-lg text-gray-600 mt-2">Connect with your college as alumni</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* College */}
        <div>
          <label className="block text-sm font-medium mb-2">College</label>
          <select
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-sm"
          >
            <option value="">Select College</option>
            <option value="college1">College 1</option>
            <option value="college2">College 2</option>
          </select>
        </div>

        {/* Degree */}
        <div>
          <label className="block text-sm font-medium mb-2">Degree</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-sm"
            placeholder="Your degree"
          />
        </div>

        {/* Field of Study */}
        <div>
          <label className="block text-sm font-medium mb-2">Field of Study</label>
          <select
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-sm"
          >
            <option value="">Select Field</option>
            <option value="computer-science">Computer Science</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>

        {/* Roll Number */}
        <div>
          <label className="block text-sm font-medium mb-2">Roll Number</label>
          <input
            type="number"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-sm"
            placeholder="Your roll number"
          />
        </div>

        {/* ID Card Upload */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">ID Card</label>
          <div className="flex items-center gap-4">
            {formData.idCard && (
              <div className="relative w-20 h-20 rounded overflow-hidden">
                <Image
                  src={URL.createObjectURL(formData.idCard)}
                  alt="ID Card preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <label className="flex items-center px-4 py-3 text-sm border rounded-lg cursor-pointer hover:bg-gray-50">
              <Upload className="w-5 h-5 mr-2" />
              Upload ID Card
              <input
                type="file"
                name="idCard"
                onChange={handleInputChange}
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-[80vh]  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Arrow */}
        <button
          onClick={() => currentStep > 1 && setCurrentStep(prev => prev - 1)}
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 md:p-10 rounded-xl shadow-sm">
          {renderCurrentStep()}

          {/* Navigation Buttons */}
          <div className="mt-10 flex justify-between items-center">
            <button
              type="button"
              onClick={handleSkip}
              className="px-6 py-2.5 text-white font-semibold bg-[#5062ff] rounded-md "
            >
              Skip
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 font-medium"
            >
              {currentStep === totalSteps ? 'Complete' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardingFlow;