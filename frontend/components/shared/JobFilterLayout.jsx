"use client"
import React, { useState } from 'react';
import JobCard from "./JobCard";
import { X, Filter } from 'lucide-react';

const JobFilterLayout = ({ children }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F9F9F9] p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Mobile Filter Button */}
                    <div className="md:hidden flex justify-between items-center mb-4">
                        <h1 className="text-2xl md:text-4xl font-bold font-sans">Recommended Jobs</h1>
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="bg-black text-white p-2 rounded-lg flex items-center gap-2"
                        >
                            <Filter size={20} />
                            <span>Filters</span>
                        </button>
                    </div>

                    {/* Mobile Filter Overlay */}
                    <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        onClick={() => setIsFilterOpen(false)}
                    />

                    {/* Left sidebar with filters */}
                    <aside className={`fixed md:static inset-y-0 right-0 w-[80%] md:w-auto md:col-span-3 bg-[#F9F9F9] z-0 max-md:z-50 transform transition-transform duration-300 ${isFilterOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
                        <div className="h-full md:h-auto overflow-y-auto md:overflow-visible p-6 md:p-0 space-y-6">
                            {/* Mobile Close Button */}
                            <div className="flex justify-between items-center md:hidden">
                                <h2 className="text-xl font-bold">Filters</h2>
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-gray-800" />
                                </button>
                            </div>

                            {/* Black Card - Hidden on mobile */}
                            <div className="hidden xl:block">
                                <JobCard />
                            </div>

                            {/* Filters Section */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h2 className="text-lg font-semibold mb-4 hidden md:block">Filters</h2>

                                {/* Working Schedule */}
                                <div className="mb-6">
                                    <h3 className="text-sm text-gray-600 mb-3">Working schedule</h3>
                                    <div className="space-y-3">
                                        {["Full time", "Part time", "Internship", "Project work", "Volunteering"].map((item, index) => (
                                            <label key={item} className="flex items-center space-x-3">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-gray-300"
                                                    defaultChecked={index < 2 || index === 3}
                                                />
                                                <span className="text-sm">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Employment type */}
                                <div>
                                    <h3 className="text-sm text-gray-600 mb-3">Employment type</h3>
                                    <div className="space-y-3">
                                        {["Full day", "Flexible schedule", "Shift work", "Distant work", "Shift method"].map((item, index) => (
                                            <label key={item} className="flex items-center space-x-3">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-gray-300"
                                                    defaultChecked={index < 2}
                                                />
                                                <span className="text-sm">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right side - Job Cards Grid */}
                    <div className="md:col-span-9">
                        {/* Desktop Title */}
                        <h1 className="hidden md:block text-4xl font-bold font-sans">Recommended Jobs</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-8">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobFilterLayout;