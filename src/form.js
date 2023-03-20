import React, { useState } from "react";

export default function Form() {
  const [val, setVal] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log("I was clicked");
    console.log(val);
    fetch(`https://jsonplaceholder.typicode.com/todos/${val}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  function handleChange(e) {
    setVal(e.target.value);
    console.log(val);
  }

  return (
    <div className="Form">
      <form onSubmit={(event) => handleClick(event)}>
        <input
          type="text"
          value={val}
          onChange={(event) => handleChange(event)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
