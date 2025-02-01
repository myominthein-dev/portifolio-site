"use client";

import { useEffect, useState } from "react";

export function CircularProgress({
  value,
  size = 80,
  strokeWidth = 8,
  circleColor = "rgb(109, 110, 109)",
  progressColor = "rgb(162, 163, 162)",
}) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth * 1.5) / 2; // Shrink the circle slightly
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        className="transition-all duration-300 ease-in-out"
        stroke={circleColor}
        strokeWidth={strokeWidth}
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="transition-all duration-1000 ease-out"
        stroke={progressColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize={`${size / 5}px`}
        fontWeight="bold"
        fill="currentColor"
      >
        {`${Math.round(progress)}%`}
      </text>
    </svg>
  );
}
