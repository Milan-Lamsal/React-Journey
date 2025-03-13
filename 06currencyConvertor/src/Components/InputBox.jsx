// This is the components 
import React, { useId } from 'react'
// useId - > https://react.dev/reference/react/useId  
// 

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amountInputId = useId() // gives the unique value 

    return (
        <div className={`bg-black/20 p-5 rounded-lg text-sm flex backdrop-blur-md border border-white/20 hover:bg-black/30 transition-all duration-200 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-white/90 mb-2 inline-block font-medium">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2.5 text-white placeholder-white/50 text-lg focus:ring-2 focus:ring-blue-500/40 rounded-md px-2"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white/90 mb-2 w-full font-medium">Currency Type</p>
                <select
                    className="rounded-lg px-3 py-2 bg-black/30 cursor-pointer outline-none text-white w-full hover:bg-black/40 transition-all duration-200 focus:ring-2 focus:ring-blue-500/40"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="bg-gray-900">
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
