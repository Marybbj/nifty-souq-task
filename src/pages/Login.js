import React from "react";
import LinkButton from "../components/LinkButton";

function Login(props) {
  const { state, setState } = props;

  const onInputChange = (e) => {
    const newText = e.target.value;
    setState({ ...state, inputValue: newText });
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name..."
          value={state.inputValue}
          onChange={onInputChange}
        />
      </div>
      <LinkButton
        text={"Next >"}
        url={"/upload"}
        isDisabled={!state.inputValue}
      />
    </div>
  );
}

export default Login;
