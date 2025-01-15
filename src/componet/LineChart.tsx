// LineChartComponent.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Revenue',
            data: [3000, 4000, 3200, 4500, 4700, 5200, 5800],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
            margin: {
                bottom: 780,
            },
        },
        title: {
            display: true,
            text: 'Revenue Over Time (Line Chart)',
            margin: {
                top:780,
            },
        },
    },
    scales: {
        y: {
            ticks: {
                stepSize: 500,
                beginAtZero: true,
                columnGap: 105,

            },
        },
    },
};

const LineChartComponent: React.FC = () => {
    return <Line data={data} options={options} />;
};

export default LineChartComponent;
