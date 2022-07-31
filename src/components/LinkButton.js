import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  const { text, url, isDisabled = true } = props;

  return (
    <Link to={isDisabled ? "" : url} className="btn">
      <button disabled={isDisabled}>
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
