import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function RelatoButton() {
  return (
    <div>
      <Link to="/relato">
        <button
          className="waves-effect grey darken-1 btn"
          style={{ fontSize: "0.8em", height:"4em", lineHeight: '1.5', width:"12em" }}
        >
          Conte sua História
        </button>
      </Link>
    </div>
  );
}
