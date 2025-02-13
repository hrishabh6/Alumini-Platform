import React from "react";

const Card1 = () => {
  return (
    <div className="w-fit max-w-64 h-80 -z-20 rounded-2xl flex flex-col justify-between items-center p-4 text-white text-center"
         style={{ backgroundImage: 'url(/image/background.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <p className="text-3xl font-bold leading-tight mt-10">
        Get Your best profession with AluConnect
      </p>
      <button className="bg-blue-400 text-black font-semibold py-2 px-4 rounded-full mb-4">
        Learn more
      </button>
    </div>
  );
};

export default Card1;