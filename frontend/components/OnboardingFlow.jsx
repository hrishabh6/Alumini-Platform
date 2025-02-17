"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload } from 'lucide-react';
import Image from 'next/image';
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import RenderStep1 from './Onboarding/RenderStep1';
import RenderProgressBar from './Onboarding/RenderProgressBar';
import RenderStep2 from './Onboarding/RenderStep2';
import RenderStep3 from './Onboarding/RenderStep3';
import RenderStep4 from './Onboarding/RenderStep4';
const OnboardingFlow = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [stepValidation, setStepValidation] = useState({ })
  const [formData, setFormData] = useState({
    role: '',
    profileImage: null,
    bio: '',
    linkedin: '',
    github: '',
    portfolio: '',
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    isCurrentlyWorking: false,
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

  // Function to mark filled fields in cookies before submission
  const markFieldsInCookies = () => {
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== '' && formData[key] !== null) {
        Cookies.set(`field_${key}`, true);
      }
    });
  };

  const handleSubmit = async () => {
    markFieldsInCookies(); // Mark filled fields in cookies

    console.log('Form submitted:', formData);
    router.push('/');
  };


  
  // Simplified validateStep function - just marks the step as "seen"
  const validateStep = (step) => {
    // Simply mark the step as completed when user goes through it
    setStepValidation(prev => ({
      ...prev,
      [`step${step}`]: true
    }));

    // Set cookie to remember this step was seen
    Cookies.set(`onboarding_step${step}`, true);
    return true; // Always return true since all fields are optional
  };

  // Simplified handleNext
  const handleNext = () => {
    // Mark current step as seen
    validateStep(currentStep);

    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  // Simplified handleSkip - works the same as handleNext now
  const handleSkip = handleNext;

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <RenderStep1 formData={formData} handleInputChange={handleInputChange} />;
      case 2:
        return <RenderStep2 formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <RenderStep3 formData={formData} handleInputChange={handleInputChange} />;
      case 4:
        return <RenderStep4 formData={formData} handleInputChange={handleInputChange} />;
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
        {<RenderProgressBar currentStep={currentStep} totalSteps={totalSteps}/>}

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