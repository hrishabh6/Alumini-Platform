import { Upload } from "lucide-react";

const RenderStep4 = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold">Wrap Up and Complete</h1>
      <h2 className="text-lg text-gray-600 mt-2">Connect with your college as an alumni</h2>
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

export default RenderStep4;
