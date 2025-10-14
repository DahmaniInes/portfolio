import React from "react";

const TechCard = ({ icon, name }) => {
  return (
    <div className="group relative flex flex-col items-center gap-3">
      {/* Card principale */}
      <div className="relative w-24 h-24 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center overflow-hidden">
        {/* Icon container */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img 
            src={icon} 
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-blue-50/0 group-hover:from-violet-50/60 group-hover:to-blue-50/60 transition-all duration-300 rounded-2xl" />
      </div>
      
      {/* Label en bas */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors duration-300">
          {name}
        </p>
      </div>
    </div>
  );
};

const BallCanvas = ({ icon, name }) => {
  return <TechCard icon={icon} name={name} />;
};

export default BallCanvas;