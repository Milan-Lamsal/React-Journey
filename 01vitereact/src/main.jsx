import React from 'react';
import ReactDOM from 'react-dom/client';
import {jsx as _jsx} from "react/jsx-runtime.js"

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custome App || and My Name</h1>
    </div>
  )
}

// const reactElement = {
//   type: "a", // This represent an <a> anchor tag
//   props: {
//     // which is properties which is an object and can
//     href: "https://google.com/",
//     target: "_blank", // Opens in a new Tab
//   },

//   children: "click me to visit google", // The text inside the link
// };

const anotherElement= (
  <a href='https://google.com' target='_blank'>Visit to  Google</a>
)

const anotherUser ="coffe with Debal"

const reactElement = React.createElement(
  'a', // first parameter tag 
  {href:'https://google.com', target:'_blank'}, //second is object, 
  'click me to visit google', // third is text
  anotherUser
);

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  
);