"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, Calendar, SlidersHorizontal } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Assuming these components exist in your project
import Card1 from "../shared/Card1"
import ExampleJobCard from "./JobCard"

const mockJobs = [
    {
        id: 1,
        title: "Senior UI/UX Designer",
        company: "Amazon",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$250/hr",
    },
    // Add more mock jobs as needed
]

export default function JobsPage() {
    const [salaryRange, setSalaryRange] = useState([1200, 20000])

    return (
        <div className="min-h-screen bg-white">
            {/* Top Filters - Hidden on mobile */}
            <div className="hidden md:block sticky top-0 z-10 bg-black text-white p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Select>
                                <SelectTrigger className="h-12 bg-transparent border-gray-700 hover:bg-gray-900 transition-colors">
                                    <span className="flex items-center gap-2">
                                        <Search className="w-5 h-5" />
                                        <SelectValue placeholder="Designer" />
                                    </span>
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white">
                                    <SelectItem value="ui">UI Designer</SelectItem>
                                    <SelectItem value="ux">UX Designer</SelectItem>
                                    <SelectItem value="graphic">Graphic Designer</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="h-12 bg-transparent border-gray-700 hover:bg-gray-900 transition-colors">
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        <SelectValue placeholder="Work location" />
                                    </span>
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white">
                                    <SelectItem value="remote">Remote</SelectItem>
                                    <SelectItem value="onsite">On-site</SelectItem>
                                    <SelectItem value="hybrid">Hybrid</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="h-12 bg-transparent border-gray-700 hover:bg-gray-900 transition-colors">
                                    <span className="flex items-center gap-2">
                                        <Briefcase className="w-5 h-5" />
                                        <SelectValue placeholder="Experience" />
                                    </span>
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white">
                                    <SelectItem value="entry">Entry Level</SelectItem>
                                    <SelectItem value="mid">Mid Level</SelectItem>
                                    <SelectItem value="senior">Senior Level</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger className="h-12 bg-transparent border-gray-700 hover:bg-gray-900 transition-colors">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <SelectValue placeholder="Per month" />
                                    </span>
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white">
                                    <SelectItem value="full">Full Time</SelectItem>
                                    <SelectItem value="part">Part Time</SelectItem>
                                    <SelectItem value="contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-sm whitespace-nowrap">Salary range</span>
                            <Slider
                                defaultValue={[1200, 20000]}
                                max={20000}
                                min={1200}
                                step={100}
                                value={salaryRange}
                                onValueChange={setSalaryRange}
                                className="w-full"
                            />
                            <span className="text-sm whitespace-nowrap">
                                ${salaryRange[0]} - ${salaryRange[1]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filters Button */}
            <div className="md:hidden sticky top-0 z-10 bg-black text-white p-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="w-full">
                            <SlidersHorizontal className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] bg-white-100">
                        <SheetTitle className="hidden">Filters</SheetTitle>
                        <FiltersContent />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto p-4">
                {/* Promotional Card */}

                <div className="lg:grid lg:grid-cols-[250px_1fr] gap-8">
                    {/* Desktop Filters */}
                    <div className="hidden lg:block">
                        <Card1 />
                        <FiltersContent />
                    </div>

                    {/* Jobs Content */}
                    <div className="space-y-6">
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
                            {[1, 2, 4, 5, 5].map((job, index) => (
                                <ExampleJobCard key={index} {...job} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FiltersContent() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4 text-xl mt-4">Filters</h3>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Working schedule</label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span>Full time</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span>Part time</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span>Internship</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Employment type</label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span>Full day</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span>Shift work</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                                <span>Flexible schedule</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

