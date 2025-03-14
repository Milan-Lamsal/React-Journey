import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './Components/ThemeToggle'
import ExchangeRateChart from './components/ExchangeRateChart'

function App() {
  //  count is a variable and setCount is a function , we gonna make custome hook
  // const [amount, setAmount] = useState(0)
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState("npr")
  const [to, setTo] = useState("usd")
  // const [convertedAmount, setConvertedAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  // final result display 
  const convert = () => {
    // setConvertedAmount(Number(amount) * currencyInfo[to])
    const result = Number(amount) * currencyInfo[to];
    setConvertedAmount(Number(result.toFixed(4)));
  }

  return (
    <ThemeProvider>
      <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#f1f5f9,#ffffff,#e2e8f0)] dark:bg-[linear-gradient(45deg,#1e293b,#0f172a,#1e293b)] opacity-80 transition-colors duration-300"></div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>

        <div className="relative w-full max-w-4xl px-4">
          <div className="w-full mx-auto border border-white/20 rounded-2xl p-4 sm:p-7 backdrop-blur-md bg-white/10 dark:bg-black/10 shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="relative mb-5">
              <div className="absolute right-0 top-0">
                <ThemeToggle />
              </div>
              <h2 className="text-gray-800 dark:text-white text-2xl sm:text-3xl font-bold text-center transition-colors">💵 Currency Converter </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-2 transition-colors text-sm sm:text-base">By Milan Lamsal</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                  }}
                >
                  <div className="w-full mb-1">
                    <InputBox
                      label="From"
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      selectCurrency={from}
                      onAmountChange={(amount) => setAmount(amount)}
                      amountDisabled={false}
                    />
                  </div>
                  <div className="relative w-full h-0.5">
                    <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/20 rounded-full bg-black/30 dark:bg-white/10 text-white p-2 sm:p-3 transition-all hover:bg-black/40 dark:hover:bg-white/20 active:scale-95 backdrop-blur-md shadow-lg hover:scale-110"
                      onClick={swap}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                    <InputBox
                      label="To"
                      amount={convertedAmount}
                      currencyOptions={options}
                      onCurrencyChange={(currency) => setTo(currency)}
                      selectCurrency={to}
                      amountDisabled
                    />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 active:scale-[0.99] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
                </form>
              </div>
              <div className="mt-4 lg:mt-0">
                <ExchangeRateChart fromCurrency={from} toCurrency={to} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
