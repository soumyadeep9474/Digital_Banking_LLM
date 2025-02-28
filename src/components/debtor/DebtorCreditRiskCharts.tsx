import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js'

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)

const DebtorCreditRiskCharts: React.FC = () => {
    // Data for the Doughnut Chart (Risk Level Distribution)
    const riskData = {
        labels: ['Very Low', 'Low', 'Medium', 'High'],
        datasets: [
            {
                data: [1, 1, 1, 1], // For demonstration, equal distribution
                backgroundColor: ['#10B981', '#34D399', '#FBBF24', '#EF4444'],
                hoverBackgroundColor: ['#059669', '#059669', '#F59E0B', '#DC2626']
            }
        ]
    }

    const riskOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Debtor Risk Level Distribution',
            },
        },
    }

    // Data for the Bar Chart (Credit Scores per Debtor)
    const creditData = {
        labels: ['ABC Pvt Ltd', 'XYZ Inc.', 'LMN Enterprises', 'PQR Holdings'],
        datasets: [
            {
                label: 'Credit Score',
                data: [750, 620, 550, 810],
                backgroundColor: ['#60A5FA', '#F472B6', '#34D399', '#FBBF24'],
            }
        ]
    }

    const creditOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Credit Scores of Debtors',
            },
        },
    }

    return (
        <div className="flex flex-col gap-8">
            {/* Doughnut Chart */}
            <div className="w-full md:w-1/2 mx-auto">
                <Doughnut data={riskData} options={riskOptions} />
            </div>
            {/* Bar Chart */}
            <div className="w-full md:w-1/2 mx-auto">
                <Bar data={creditData} options={creditOptions} />
            </div>
        </div>
    )
}

export default DebtorCreditRiskCharts
