import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Details(props) {
  const [text, setText] = useState("");
  const [arr, setarr] = useState([]);
  const [charArr, setCharArr] = useState([]);

  let myChar;

  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    console.log(newText);
  };

  const handleEvent = (event) => {
    setText(event.target.value);

    //Removing extra whitespaces from the words
    setarr(text.split(' '));
    console.log(arr);
    setarr((previous) => {
      return previous.filter((currvalue) => {
        return currvalue !== '';
      });
    });

    //Removing extra whitespaces to calculate characters
    setCharArr(text.split(''));
    setCharArr((previous) => {
      return previous.filter((currvalue) => {
        return currvalue !== ' ';
      });
    });
    console.log('=====>>>>', charArr);
    // console.log(event.target.value);
  };

  const removeSpace = () => {
    setText(charArr.join(''));
    console.log(myChar);
  }

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    console.log(newText);
  };

  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-group">
            <label htmlFor="textbox">Enter Some Text</label>
            <textarea
              className={`form-control bg-${
                props.theme === "light" ? "dark" : "light"
              } text-${props.theme === "dark" ? "dark" : "light"}`}
              value={text}
              onChange={handleEvent}
              id="text"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={toUpperCase}
          >
            Change to UpperCase
          </button>

          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={toLowerCase}
          >
            Change to LowerCase
          </button>

          <button
            className="btn btn-primary m-2"
            onClick={() => {
              setText("");
              setCharArr("");
              setarr("");
            }}
          >
            Clear Text Box
          </button>

          <button className="btn btn-primary m-2" onClick={removeSpace}>
            Remove Spaces
          </button>
        </form>

        <h2>Text Summary</h2>
        <div>
          {charArr.length} characters and {arr.length}{" "}
          words
        </div>
      </div>
    </>
  );
}

Details.propTypes = {
  title: PropTypes.string,
};
