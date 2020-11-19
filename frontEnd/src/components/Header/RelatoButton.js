import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function RelatoButton() {
  return (
    <div>
      <Link to="/relato">
        <button
          className="waves-effect grey darken-1 btn"
          style={{ fontSize: "1em" }}
        >
          Relate aqui sua história
        </button>
      </Link>
    </div>
  );
}
