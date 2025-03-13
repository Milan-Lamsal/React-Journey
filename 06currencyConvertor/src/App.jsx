import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'



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
    // setConvertedAmount(amount * currencyInfo[to])
    setConvertedAmount(Number(amount) * currencyInfo[to])
  }




  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat relative bg-gradient-to-br from-blue-900 via-black to-purple-900"
    >
      {/* Add animated gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#0235a3,#000000,#4c0270)] opacity-80"></div>
      
      {/* Add pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <div className="relative w-full">
        <div className="w-full max-w-md mx-auto border border-white/20 rounded-2xl p-7 backdrop-blur-md bg-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          <div className="mb-5">
            <h2 className="text-white text-3xl font-bold text-center">💱 Currency Converter</h2>
            <p className="text-white/80 text-center mt-2">Latest Currency Rates</p>
          </div>
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
                // onCurrencyChange={(currency) => setFrom(amount)}

                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                amountDisabled={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/20 rounded-full bg-black/30 text-white p-3 transition-all hover:bg-black/40 active:bg-black/50 backdrop-blur-md shadow-lg hover:scale-110"
                onClick={swap}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default App
