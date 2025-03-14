import { useState, useEffect } from 'react'
import { subDays, format } from 'date-fns'

export default function useExchangeRateHistory(fromCurrency, toCurrency, days = 7) {
    const [historyData, setHistoryData] = useState({
        labels: [],
        rates: []
    })
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchHistoricalData = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const endDate = new Date()
                const startDate = subDays(endDate, days)
                
                // Format dates for API
                const endDateStr = format(endDate, 'yyyy-MM-dd')
                const startDateStr = format(startDate, 'yyyy-MM-dd')
                
                // Fetch current rate
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`
                )
                
                if (!response.ok) {
                    throw new Error('Failed to fetch exchange rate history')
                }

                const data = await response.json()
                const currentRate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()]

                // Generate simulated historical data with smoother transitions
                const simulatedRates = Array.from({ length: days }).map((_, index) => {
                    const date = subDays(endDate, days - 1 - index)
                    // Create a more realistic trend with smaller variations
                    const variation = Math.sin(index / (days / Math.PI)) * 0.005 // Smooth sine wave variation
                    const randomFactor = (Math.random() - 0.5) * 0.002 // Small random noise
                    const rate = currentRate * (1 + variation + randomFactor)
                    
                    return {
                        date: format(date, 'MMM dd'),
                        rate: Number(rate.toFixed(4))
                    }
                })

                setHistoryData({
                    labels: simulatedRates.map(d => d.date),
                    rates: simulatedRates.map(d => d.rate)
                })
                
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }

        if (fromCurrency && toCurrency) {
            fetchHistoricalData()
        }
    }, [fromCurrency, toCurrency, days])

    return { historyData, isLoading, error }
} 