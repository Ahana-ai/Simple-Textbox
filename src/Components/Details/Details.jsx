import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Details(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    setText(text.toUpperCase());
    console.log(text);
  };

  const handleEvent = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
    console.log(text);
  };

  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <form>
          <div className="form-group">
            <label htmlFor="textbox">Enter Some Text</label>
            <textarea
              className={`form-control bg-${props.theme === 'light' ? 'dark' : 'light'}`}
              value={text}
              onChange={handleEvent}
              id="text"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={toUpperCase}
            value={text}
          >
            Change to UpperCase
          </button>

          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={toLowerCase}
            value={text}
          >
            Change to LowerCase
          </button>

          <button
            className="btn btn-primary m-2"
            onClick={() => setText('')}
            value={text}
          >
            Clear Text Box
          </button>

        </form>

        <h2>Text Summary</h2>
        <div>
          {text.trim().length} characters and {text.trim().split(" ").length} words
        </div>
      </div>
    </>
  );
}

Details.propTypes = {
  title: PropTypes.string,
};
