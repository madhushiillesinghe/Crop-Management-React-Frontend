// PieChartComponent.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Field', 'Crop', 'Vehicle', 'Equipment', 'Logs'],
    datasets: [
        {
            label: 'Votes',
            data: [12, 19, 3, 5, 7],
            backgroundColor: [
                'rgb(47,61,220)',
                'rgb(36,170,42)',
                'rgb(232,85,5)',
                'rgb(109,42,205)',
                'rgb(244,207,13)',
            ],
            borderColor: [
                'rgb(7,83,225)',
                'rgb(21,97,12)',
                'rgb(14,74,5)',
                'rgb(14,74,5)',
                'rgb(16,55,156)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Votes Distribution',
        },
    },
};

const PieChartComponent: React.FC = () => {
    return <Pie data={data} options={options} />;
};

export default PieChartComponent;
