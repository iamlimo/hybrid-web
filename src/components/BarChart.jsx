import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  borderRadius: 20,
  borderSkipped: false,
  barPercentage: 0.3,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
        grid: {
            display: false,
        },
        ticks:{
            color: '#1338BE'
        }
    },
    y: {
       display: false,
    }
 },
};


export const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets:[
    {
      label: 'Data1',
      data: [50, 80, 70, 90, 120, 140],
      backgroundColor: 'rgba(181, 18, 18, .25)',
      hoverBackgroundColor: 'rgba(181, 18, 18, 1)',
    },
]
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
