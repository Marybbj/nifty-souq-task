import React from "react";
import LinkButton from "../components/LinkButton";

function Details(props) {
  const { state } = props;
  const { inputValue, fileName, text } = state;

  return (
    <div className="container">
      <h1>Name: {inputValue}</h1>
      <p> <b>File:</b> {fileName}</p>
      <p> <b>Details:</b> {text}</p>
      <LinkButton
        text={"Go back"}
        url={"/"}
        isDisabled={false}
      />
    </div>
  );
}

export default Details;
