import ReactDOM from "react-dom";
import React, { useState } from "react";
import { searchGif } from "./gifs.js";

import "./styles.css";

const Instructions = () => (
  <>
    <h2>Gif search excercise</h2>
    <ul>
      <li>Should search the gifs based on the query</li>
      <li>Should only search when the button is pressed</li>
      <li>Should only show the number of gifs based on the counter</li>
      <li>Minus button should decrease 1 to the counter</li>
      <li>Plus button should increase 1 to the counter</li>
      <li>
        Counter minimun should be 1 if there are gifs, if there are no gifs the
        counter should be 0
      </li>
      <li>Counter maximun should be the total number of gifs</li>
    </ul>
  </>
);

function App() {
  // una pista darwin, aqui puedes usar hooks
  const [query, setQuery] = useState(""); // esto lo puedes usar para hacer un input controlado
  return (
    <>
      <Instructions />
      <div className="filters">
        <div className="form-group">
          <input
            type="text"
            placeholder="Search Gif"
            onChange={event => setQuery(event.target.value)}
          />
          <button onClick={() => resp(query)}>Search</button>
        </div>
      </div>
      <div id="result" />
    </>
  );
}

const resp = async event => {
  const _val = await searchGif(event);
  const res =
    _val != null
      ? _val.data.map(e => {
          return "<div>" + (e.title.length > 0 ? e.title : "") + "</div>";
        })
      : "";
  document.getElementById("result").innerHTML = res;
};

ReactDOM.render(<App />, document.getElementById("root"));
