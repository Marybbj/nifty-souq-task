import React from "react";
import LinkButton from "../components/LinkButton";

function Upload(props) {
  const { state, setState } = props;
  const { inputValue, fileName } = state;

  return (
    <div className="container">
      <h1>Hello {inputValue}</h1>
      <div>
        <label htmlFor="file">Upload file:</label>
        <input
          type="file"
          name="file"
          className="custom-file-input"
          onChange={(event) => {
            setState({
              ...state,
              fileName: event.target.files[0].name
            })
          }}
        />
      </div>
      <div>
        <label htmlFor="descrip">File description:</label>
        <textarea
          id="descrip"
          name="descrip"
          rows="4"
          cols="29"
          onChange={(event) => {
            setState({
              ...state,
              text: event.target.value
            })
          }}
        />
      </div>
      <LinkButton
        text="Show Data"
        url={"/details"}
        isDisabled={!fileName}
      />
    </div>
  );
}

export default Upload;
