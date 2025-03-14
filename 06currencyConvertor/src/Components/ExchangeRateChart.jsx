import React, { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import useExchangeRateHistory from '../hooks/useExchangeRateHistory'
import { useTheme } from '../contexts/ThemeContext'

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

const timeRanges = [
    { label: '7D', days: 7 },
    { label: '14D', days: 14 },
    { label: '30D', days: 30 }
]

export default function ExchangeRateChart({ fromCurrency, toCurrency }) {
    const [selectedRange, setSelectedRange] = useState(timeRanges[0])
    const [isReversed, setIsReversed] = useState(false)
    const { historyData, isLoading, error } = useExchangeRateHistory(
        isReversed ? toCurrency : fromCurrency,
        isReversed ? fromCurrency : toCurrency,
        selectedRange.days
    )
    const { isDarkMode } = useTheme()

    const displayFrom = isReversed ? toCurrency : fromCurrency
    const displayTo = isReversed ? fromCurrency : toCurrency

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: [
                    'Exchange Rate',
                    `1 ${displayFrom.toUpperCase()} = ${displayTo.toUpperCase()}`
                ],
                color: isDarkMode ? '#fff' : '#1f2937',
                font: {
                    size: 16,
                    weight: 'bold'
                },
                padding: 20
            },
            tooltip: {
                backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                titleColor: isDarkMode ? '#fff' : '#1f2937',
                bodyColor: isDarkMode ? '#fff' : '#1f2937',
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        const rate = context.raw.toFixed(4);
                        return `1 ${displayFrom.toUpperCase()} = ${rate} ${displayTo.toUpperCase()}`;
                    }
                }
            }
        },
        scales: {
            y: {
                grid: {
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)',
                    drawBorder: true,
                    borderDash: [5, 5]
                },
                ticks: {
                    color: isDarkMode ? '#fff' : '#1f2937',
                    callback: function(value) {
                        return value.toFixed(4);
                    }
                },
                title: {
                    display: true,
                    text: `${displayTo.toUpperCase()} value`,
                    color: isDarkMode ? '#fff' : '#1f2937'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: isDarkMode ? '#fff' : '#1f2937',
                    maxRotation: 45,
                    minRotation: 45
                }
            }
        }
    }

    const chartData = {
        labels: historyData.labels,
        datasets: [
            {
                label: `Exchange Rate`,
                data: historyData.rates,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBackgroundColor: '#3b82f6',
                pointHoverBackgroundColor: '#2563eb',
                pointBorderColor: isDarkMode ? '#1f2937' : '#ffffff',
                pointHoverBorderColor: isDarkMode ? '#1f2937' : '#ffffff',
                pointBorderWidth: 2,
                pointHoverBorderWidth: 2
            }
        ]
    }

    if (error) {
        return (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
            </div>
        )
    }

    return (
        <div className="mt-6 p-4 bg-white dark:bg-black/20 rounded-lg backdrop-blur-sm border border-gray-300 dark:border-white/10 shadow-lg">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                <button
                    onClick={() => setIsReversed(!isReversed)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 bg-gray-100 dark:bg-black/30 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-black/40 border border-gray-300 dark:border-white/10 shadow-sm"
                >
                    <span>{displayFrom.toUpperCase()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                    <span>{displayTo.toUpperCase()}</span>
                </button>
                <div className="flex gap-2">
                    {timeRanges.map((range) => (
                        <button
                            key={range.label}
                            onClick={() => setSelectedRange(range)}
                            className={`px-3 py-1 rounded-md transition-all duration-200 ${
                                selectedRange.label === range.label
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : 'bg-gray-100 dark:bg-black/30 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-black/40 border border-gray-300 dark:border-white/10 shadow-sm'
                            }`}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>
            
            {isLoading ? (
                <div className="h-[300px] flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="bg-white dark:bg-black/20 p-4 rounded-lg border-2 border-gray-300 dark:border-white/5 shadow-md" style={{ height: '400px' }}>
                    <Line options={chartOptions} data={chartData} />
                </div>
            )}
        </div>
    )
}