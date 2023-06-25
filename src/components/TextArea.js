import React, { useState } from "react";

function TextArea(props) {
  const handleUpClick = () => {
    //console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    //console.log("changed");
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          placeholder="enter your text here"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to upperCase
      </button>
    </div>
  );
}
export default TextArea;
