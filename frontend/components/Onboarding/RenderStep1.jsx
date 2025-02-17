const RenderStep1 = ({ formData, handleInputChange }) => (
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

export default RenderStep1;
