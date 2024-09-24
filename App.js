// const heading=React.createElement("h1",{id:"heading"},"hello world from react");
//   const root=ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);

  /* <div id="parent">
    <div id="children1">
        <h1>
            "i m h1"
        </h1>
        <h2>i m h2</h2>
    </div>
    <div id="children2">
        <h1>
            "i m h1"
        </h1>
        <h2>i m h2</h2>
    </div>
</div> */
// const parent=React.createElement("div",{id:"parent"},
//   [
//     React.createElement("div",{id:"child1"},
   
//       [React.createElement("h1",{},"i m h1"),
//       React.createElement("h1",{},"i m h2")
//     ]
//   ), 
//   React.createElement("div",{id:"child2"},
   
//     [
//       React.createElement("h3",{},"i m h1"),
//       React.createElement("h4",{},"i m h2")
//     ]
//   )
// ]);
// const root1=ReactDOM.createRoot(document.getElementById("root"));

// root1.render(parent);

const parent = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { id: "child1" },
      [
        React.createElement("h1", {}, "I am h1"),
        React.createElement("h1", {}, "I am h2")
      ]
    ), 
    React.createElement("div", { id: "child2" },
      [
        React.createElement("h3", {}, "I am h1"),
        React.createElement("h4", {}, "I am h2")
      ]
    )
  ]
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

