import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip
  } from "recharts";

const Statistics = () => {

    const [width, setWidth] = useState(0);


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth * 0.8);
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  const data = [
    {
      Assignment: " Assignment 1",
      marks: 57,
      fullMark: 60,
    },
    {
      Assignment: "Assignment 2",
      marks: 59,
      fullMark: 60,
    },
    {
      Assignment: "Assignment 3",
      marks: 60,
      fullMark: 60,
    },
    {
      Assignment: "Assignment 4",
      marks: 60,
      fullMark: 60,
    },
    {
      Assignment: "Assignment 5",
      marks: 60,
      fullMark: 60,
    },
    {
      Assignment: "Assignment 6",
      marks: 54,
      fullMark: 60,
    },
    {
      Assignment: "Assignment 7",
      marks: 60,
      fullMark: 60,
    },
    {
      Assignment: "Assignment 8",
      marks: 60,
      fullMark: 60,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-44 sm:py-16 flex justify-center">


        <RadarChart
      cx={width/2}
      cy="50%"
      outerRadius={120}
      width={width}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="Assignment" />
      <PolarRadiusAxis />
      <Tooltip/>
      <Radar
        name="Marks Obtained"
        dataKey="marks"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
    
       
      
    </div>
  );
};

export default Statistics;
