// const parent = React.createElement(
//   "h1",
//   { id: "parent" },"I am an H1 tag")


const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
      "div",
      { id: "child" },
      [React.createElement(
        "h1",
        {},
        "I am an H1 tag"
      ),React.createElement(
        "h2",
        {},
        "I am an H2 tag"
      )]
    ),React.createElement(
      "div",
      { id: "child" },
      [React.createElement(
        "h1",
        {},
        "I am an H1 tag"
      ),React.createElement(
        "h2",
        {},
        "I am an H2 tag"
      )]
    )]
  );
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  