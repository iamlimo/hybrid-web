import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const PercentageChart = ({fill, text, data, innerRadius, outerRadius}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
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
