import React from "react";

export default function Button(props) {
  return (
    <div
      className={`button-wrapper ${isNaN(props.children) ? "operator" : null}
    ${props.label} `}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}
