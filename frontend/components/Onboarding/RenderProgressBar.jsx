
const RenderProgressBar = ({currentStep, totalSteps}) => {
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

export default RenderProgressBar