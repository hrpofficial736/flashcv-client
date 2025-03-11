import React from "react";
import { useResumeSectionIndexStore } from "../../../../stores/useResumeSectionIndexStore";

export const TimelineCircles: React.FC<{ number: number }> = ({ number }) => {
  const { currentIndex } = useResumeSectionIndexStore();
  return (
    <div
      className={`w-10 h-10 rounded-full ${
        currentIndex + 1 >= number
          ? "bg-white border-orange-400"
          : "bg-white border-orange-200 text-black/30"
      } border-2 row-center-flex font-bold`}
    >
      {number}
    </div>
  );
};
