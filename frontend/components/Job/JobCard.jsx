import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookmarkIcon } from 'lucide-react';

const JobCard = ({ 
  date,
  company,
  position,
  location,
  salary,
  tags,
  companyLogo
}) => {
  return (
    <Card className="max-w-sm bg-[#FFE1CB] rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-sm text-stone-900 mb-2">{date}</div>
            <div className="flex items-center gap-2 mb-2">
              {companyLogo}
              <span className="font-medium">{company}</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">{position}</h3>
          </div>
          <button className="text-stone-900 hover:text-gray-600">
            <BookmarkIcon size={20} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full text-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="font-semibold">{salary}</div>
            <div className="text-sm text-slate-900">{location}</div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
            Details
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

// Example usage
const ExampleJobCard = () => {
  return (
    <JobCard
      date="20 Mar, 2023"
      company="Amazon"
      position="Senior UI/UX Designer"
      location="San Francisco, CA"
      salary="$250/hr"
      tags={["Full time", "Senior level", "Remote", "Project work"]}
      companyLogo={
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">
          A
        </div>
      }
    />
  );
};

export default ExampleJobCard;