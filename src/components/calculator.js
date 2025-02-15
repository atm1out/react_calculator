import React, { useState } from "react";
import "../styles/calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value, type) => {
    if (type === "clear") {
      setInput("");
      return;
    }
    if (type === "equal") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("error");
      }
      return;
    }
    if (input === "error") {
      setInput();
    }
    setInput((prev) => prev + value);
  };

  return (
    <div className="calculator">
      <div className="display">{input === "" ? "0" : input}</div>
      <div className="buttons">
        <button
          className="button clear"
          onClick={() => handleClick("", "clear")}
        >
          C
        </button>
        <button
          className="button operator"
          onClick={() => handleClick("/", "operator")}
        >
          /
        </button>
        <button
          className="button operator"
          onClick={() => handleClick("*", "operator")}
        >
          *
        </button>
        <button
          className="button operator"
          onClick={() => handleClick("-", "operator")}
        >
          -
        </button>
        <button className="button" onClick={() => handleClick("7", "number")}>
          7
        </button>
        <button className="button" onClick={() => handleClick("8", "number")}>
          8
        </button>
        <button className="button" onClick={() => handleClick("9", "number")}>
          9
        </button>
        <button
          className="button operator"
          onClick={() => handleClick("+", "operator")}
        >
          +
        </button>
        <button className="button" onClick={() => handleClick("4", "number")}>
          4
        </button>
        <button className="button" onClick={() => handleClick("5", "number")}>
          5
        </button>
        <button className="button" onClick={() => handleClick("6", "number")}>
          6
        </button>
        <button
          className="button equal"
          onClick={() => handleClick("", "equal")}
        >
          =
        </button>
        <button className="button" onClick={() => handleClick("1", "number")}>
          1
        </button>
        <button className="button" onClick={() => handleClick("2", "number")}>
          2
        </button>
        <button className="button" onClick={() => handleClick("3", "number")}>
          3
        </button>
        <button
          className="button"
          style={{ gridColumn: "span 2" }}
          onClick={() => handleClick("0", "number")}
        >
          0
        </button>
        <button className="button" onClick={() => handleClick(".", "number")}>
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;