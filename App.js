import React from "react";
import ReactDOM from "react-dom/client";

// jsx 
const jsxheading=<h1 id="heading">hello from jsx</h1>
console.log(jsxheading);
const root=ReactDOM.createRoot(document.getElementById("root"));

// functional base component
const Title=()=>
(
    <h1 className="head" tabIndex="5">
        hello using functional base component
    </h1>
);
// if u use curly braces use return
const HeadingComponent=()=>{
  return ( <div id="container">
        <Title/> 
        <h1 className="heading">hello using component composition</h1>
    </div>)
};
root.render(<HeadingComponent/>);