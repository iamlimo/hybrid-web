import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Red', value: 70 },
  { name: 'Transparent', value: 30, fill: 'rgba(256, 256, 256' },
];


const PercentageChart = ({fill, text}) => {
  return (
    <ResponsiveContainer width="70%" height="70%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={50}
          cornerRadius={30}
          fill={fill}
          dataKey="value"
          startAngle={90}
          endAngle={450}
          sectorBorderRadius={50}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20"
          fill="#1338BE"
        >
          {text}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PercentageChart;
