import React from "react";
import { TimelineCircles } from "./TimelineCircles";

export const Timeline: React.FC = () => {
  return (
    <main className="w-[90%] h-1 bg-orange-400 rounded-2xl m-10 flex items-center justify-between">
      <TimelineCircles number={1} />
      <TimelineCircles number={2} />
      <TimelineCircles number={3} />
      <TimelineCircles number={4} />
      <TimelineCircles number={5} />
      <TimelineCircles number={6} />
    </main>
  );
};
