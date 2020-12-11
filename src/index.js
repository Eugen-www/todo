import React from "react";
import ReactDOM from "react-dom";

<<<<<<< HEAD
import App from "./app/app";

ReactDOM.render(<App />, document.querySelector("#root"));
=======
const el = (
  <div>
    <h1>My Todo list</h1>
    <input placeholder="search"/>
    <ul>
      <li>Learn React</li>
      <li>Build awesome app</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById("root"));
>>>>>>> 1cd92ab21b141eb596934df4581252ca3b39b9cf
