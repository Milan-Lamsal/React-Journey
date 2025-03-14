// This is the components 
import React, { useId } from 'react'
// useId - > https://react.dev/reference/react/useId  
// 
import { getFlagUrl } from '../utils/currencyFlags'
import { currencyNames } from '../utils/currencyNames'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amountInputId = useId()
    const presetAmounts = [100, 1000, 5000]

    return (
        <div className={`bg-white/5 dark:bg-black/20 p-4 sm:p-5 rounded-lg text-sm flex flex-col sm:flex-row gap-3 sm:gap-0 backdrop-blur-md border border-black/5 dark:border-white/10 hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-200 ${className}`}>
            <div className="w-full sm:w-1/2">
                <label htmlFor={amountInputId} className="text-gray-700 dark:text-white/90 mb-2 inline-block font-medium">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2.5 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white/50 text-lg focus:ring-2 focus:ring-blue-500/40 rounded-md px-2"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    step="0.0001"
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value.includes('.')) {
                            const [whole, decimal] = value.split('.');
                            if (decimal.length > 4) {
                                onAmountChange && onAmountChange(whole + '.' + decimal.slice(0, 4));
                                return;
                            }
                        }
                        onAmountChange && onAmountChange(value);
                    }}
                />
                {!amountDisabled && (
                    <div className="flex gap-2 mt-2">
                        {presetAmounts.map((presetAmount) => (
                            <button
                                key={presetAmount}
                                type="button"
                                onClick={() => onAmountChange && onAmountChange(presetAmount.toString())}
                                className="px-2 py-1 text-xs rounded-md bg-white/10 dark:bg-black/30 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/40 transition-all duration-200 border border-black/5 dark:border-white/10"
                            >
                                {presetAmount.toLocaleString()}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="w-full sm:w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-gray-700 dark:text-white/90 mb-2 w-full font-medium flex items-center sm:justify-end justify-start">
                    {getFlagUrl(selectCurrency) && (
                        <img 
                            src={getFlagUrl(selectCurrency)} 
                            alt={`${selectCurrency} flag`}
                            className="inline-block mr-2 h-8 w-auto rounded shadow-sm"
                        />
                    )}
                    <span className="flex flex-col sm:items-end items-start">
                        <span>Currency Type</span>
                        <span className="text-xs text-gray-500 dark:text-white/70">
                            {currencyNames[selectCurrency.toLowerCase()] || selectCurrency.toUpperCase()}
                        </span>
                    </span>
                </p>
                <select
                    className="rounded-lg px-3 py-2 bg-white/10 dark:bg-black/30 cursor-pointer outline-none text-gray-800 dark:text-white w-full hover:bg-white/20 dark:hover:bg-black/40 transition-all duration-200 focus:ring-2 focus:ring-blue-500/40"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="bg-white dark:bg-gray-900">
                            {currency.toUpperCase()} - {currencyNames[currency.toLowerCase()] || currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
