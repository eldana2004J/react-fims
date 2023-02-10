import React from "react";

export default function Loader({ onClick }) {
  return (
    <button className="loader" onClick={onClick}>
      Loader
    </button>
  );
}
