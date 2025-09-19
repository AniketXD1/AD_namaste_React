// how to create h1 tag in react

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world from javascript!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Nested Element

/* <div id="parent">
  <div id = "child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag </h2>
  </div>
</div> 
how to create slibling ?
1. we have to pass one child and
2. convert into array pass to second child and create array of childern

ReactElement(object) => HTML (browser understands)
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
