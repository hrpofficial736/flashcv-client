import React from "react";

export const TimelineCircles: React.FC<{ number: number }> = ({ number }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-white border-2 border-orange-400 row-center-flex font-bold">
      {number}
    </div>
  );
};
