"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="flex justify-center p-10 text-gray-300">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}% Gastado`}
        styles={buildStyles({
          pathColor: percentage >= 100 ? "#dc2626" : "#4dd307",
          trailColor: "#4b5563",
          textColor: percentage >= 100 ? "#dc2626" : "#4dd307",
          textSize: 10,
        })}
      />
    </div>
  );
};

export default ProgressBar;
