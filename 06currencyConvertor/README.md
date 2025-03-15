# Currency Converter React App

## 🔴Live Demo (https://milan-currency-convertor.netlify.app)

## New Features

### 1. Theme Toggle
- Added a button to toggle between light and dark themes.
- Uses the `useTheme` context to manage theme state.
- Includes icons for sun (light mode) and moon (dark mode).

### 2. Exchange Rate Chart
- Displays historical exchange rate data in a line chart.
- Allows users to select different time ranges (7 days, 14 days, 30 days).
- Provides a toggle to reverse the currency pair in the chart.

### 3. Improved UI/UX
- Enhanced the UI with glassmorphism design.
- Added smooth animations and transitions for better user experience.
- Implemented a responsive design that works well on both desktop and mobile devices.

### 4. Error Handling
- Improved error handling to provide clear messages to the user.
- Ensures the application handles errors gracefully without breaking.

### 5. Custom Hooks
- Utilized custom React hooks for fetching currency data and managing state.
- Ensures a clean separation of concerns and reusability of code.

## Core Functionality (The 20% that matters most)

### 1. Main Features
- Real-time currency conversion using latest exchange rates
- Swap functionality between currencies
- Support for multiple currency pairs
- Modern, responsive UI with dark theme

### 2. Key Components

#### App.jsx (Main Component)
```jsx
// Core States
const [amount, setAmount] = useState('')        // Stores input amount
const [from, setFrom] = useState("npr")         // From currency
const [to, setTo] = useState("usd")             // To currency
const [convertedAmount, setConvertedAmount] = useState('') // Stores result

// Main Functions
const convert = () => {
    setConvertedAmount(Number(amount) * currencyInfo[to])
}
const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
}
```

#### InputBox.jsx (Reusable Component)
- Handles both amount input and currency selection
- Props based configuration for input/currency fields
- Reused for both "From" and "To" sections

#### useCurrencyInfo.js (Custom Hook)
- Fetches real-time currency rates
- Updates rates when currency changes
- API: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest`

### 3. Data Flow
1. User enters amount in "From" input
2. Selects currencies from dropdowns
3. Clicks convert → Fetches rate → Shows result
4. Can swap currencies instantly

### 4. Styling Highlights
- Gradient background with pattern overlay
- Glass-morphism effect on components
- Responsive design with Tailwind CSS
- Interactive hover and focus states

## Technical Stack
- React.js
- Tailwind CSS
- Custom Hooks
- Free Currency API

## Key Files Structure
```
src/
├── App.jsx           # Main application logic
├── Components/
│   └── InputBox.jsx  # Reusable input component
└── hooks/
    └── useCurrencyInfo.js  # Currency API integration
```

## Development Notes
- Uses controlled components for form handling
- Implements real-time currency conversion
- Maintains clean separation of concerns
- Follows React best practices
