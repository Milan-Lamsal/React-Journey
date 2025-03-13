
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'


// Context API 
///StateManagement
// https://react.dev/reference/react/useContext

function App() {

  return (

    <UserContextProvider>
      <h1> React is here </h1>
      <Login />
      <Profile />
    </UserContextProvider>

  );
}

export default App
