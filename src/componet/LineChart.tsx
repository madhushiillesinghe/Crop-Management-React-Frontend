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
                bottom: 780, // Add space at the bottom of the chart
            },
        },
        title: {
            display: true,
            text: 'Revenue Over Time (Line Chart)',
            margin: {
                top:780, // Add space at the bottom of the chart
            },
        },
    },
    scales: {
        y: {
            ticks: {
                stepSize: 500, // Adjust the gap between ticks on the y-axis (step size)
                beginAtZero: true, // Ensure the y-axis starts at zero
                columnGap: 105,

            },
        },
    },
};

const LineChartComponent: React.FC = () => {
    return <Line data={data} options={options} />;
};

export default LineChartComponent;
