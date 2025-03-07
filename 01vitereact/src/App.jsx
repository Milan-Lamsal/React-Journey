

import Coffee from "./second_vite";// Importing coffee function in the file called Second  

function App() {
  const username = "coffee with Debal"
 
  return (
 
  // <h1>Hello World with  with vite </h1>, I commented this part because this can only return one tag but if you want to to return multiple tags then enclose them with div tag like this, you can return empty div as well like this one <> <coffee/> <h1>Hello world  <p> How are you</p></> in js <> this is called fragmant
// {username} -> it treat as a variable which is called evaluated expression the final of javascript is written in {} here  ,  like in Js `${usernames}` , //
  <div>
 <Coffee/>
 <h1>Hello How are you {username}</h1> 
 <p>Test </p>
  </div> 
  ) 
}

export default App
