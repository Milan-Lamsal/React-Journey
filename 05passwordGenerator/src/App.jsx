import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false) // default value false
  const [charAllowed, setCharAlloed] = useState(false)// default value false
  const [password, setPassword] = useState("")

  //useRef HOOK
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = " "
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += " 0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}|\;:,<>?/~'"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-red-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-3 mb-4 rounded-md '
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
            className='outline-none bg-red-500 text-white px-4 py-2 mb-4 rounded-md '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center  gap-x-4'></div>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label> Legth: {length}</label>
          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div >
      </div >
    </>
  )
}

export default App
