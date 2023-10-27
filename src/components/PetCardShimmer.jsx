import React from "react";

function PetCardShimmer() {
  return (
    <div className="w-full shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-orange-400/20 rounded-xl">
      {/* Shimmer Effect - Loading Animation */}
      <div className="animate-pulse rounded-xl">
        {/* Shimmer Image */}
        <div className="h-[180px] bg-gray-300 shimmer-loading"></div>
        {/* Shimmer Card Body */}
        <div className="p-3 text-sm flex justify-between bg-white">
          <div className="shimmer-loading shimmer-text w-1/2"></div>
          <div className="flex gap-1 items-center">
            <div className="shimmer-loading shimmer-text w-1/4"></div>
            <div className="shimmer-loading shimmer-text w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetCardShimmer;
