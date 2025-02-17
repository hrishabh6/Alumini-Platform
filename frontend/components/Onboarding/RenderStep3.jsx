const RenderStep3 = ({ formData, handleInputChange }) => (
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

export default RenderStep3;
