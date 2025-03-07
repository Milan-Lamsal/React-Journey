// how does react see when its compile

function customRender(Element, container) {
  /*
  const domElement = document.createElement(Element.type);
  domElement.innerHTML = Element.children; // addd children from react element
  domElement.setAttribute("href", Element.props.href); //attributes
  domElement.setAttribute("target", Element.props.target);
  container.appendChild(domElement); // append to the container to show up in the browser
  */

  //Making it modular by doing loop in it

  const domElement = document.createElement(Element.type);
  domElement.innerHTML = Element.children;

  for (const prop in Element.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, Element.props[prop]);
  }
  container.appendChild(domElement); // append to the container to show up in the browser
}

const reactElement = {
  type: "a", // This represent an <a> anchor tag
  props: {
    // which is properties which is an object and can
    href: "https://google.com/",
    target: "_blank", // Opens in a new Tab
  },

  children: "click me to visit google", // The text inside the link
};
//  The above is all you get from react

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer); // expect to this to render what and where to inject

/*
📌 Custom React Renderer - Summary & Notes

🔹 This function `customRender` mimics how React renders elements in the DOM.
🔹 React uses a Virtual DOM (JavaScript objects) to describe UI elements before rendering them.

------------------------------------------------------------
📝 1. Defining a Virtual DOM Object (React-like Element)
------------------------------------------------------------
const reactElement = {
  type: "a",  // Specifies the type of HTML tag (anchor <a>)
  props: {
    href: "https://google.com/",  // Link destination
    target: "_blank",  // Opens link in a new tab
  },
  children: "Click me to visit Google",  // Text inside the tag
};

------------------------------------------------------------
📝 2. Converting Virtual DOM to Real DOM
------------------------------------------------------------
function customRender(Element, container) {
  // Step 1: Create an actual HTML element
  const domElement = document.createElement(Element.type);

  // Step 2: Set the text content (children)
  domElement.textContent = Element.children; 

  // Step 3: Set attributes dynamically
  domElement.setAttribute("href", Element.props.href);
  domElement.setAttribute("target", Element.props.target);

  // Step 4: Append the new element to the container in the DOM
  container.appendChild(domElement);
}

------------------------------------------------------------
📝 3. Rendering the Element inside the #root div
------------------------------------------------------------
const mainContainer = document.querySelector("#root");  // Selects the root div
customRender(reactElement, mainContainer);  // Calls customRender to display the element

------------------------------------------------------------
✅ Expected Output in HTML:
------------------------------------------------------------
<div id="root">
  <a href="https://google.com/" target="_blank">Click me to visit Google</a>
</div>

------------------------------------------------------------
🎯 Key Takeaways:
------------------------------------------------------------
✔️ This simulates how React renders components internally.
✔️ React works with a Virtual DOM (JS objects) before converting to real HTML.
✔️ `customRender` manually creates elements, sets attributes, and appends them.
✔️ React’s diffing algorithm (not shown here) optimizes updates instead of reloading everything.
*/
