import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <header className="App-header">
        <h1>Welcome to Homeschool Hours Tracker</h1>
        <h2 className="text-center">
          <FontAwesomeIcon icon={faSchool} />
        </h2>
      </header>

      <div className="App-content">
        <div className="App-card">
          <h2>What would you like to do?</h2>
          <a
            className="btn btn-lg btn primary"
            href="/CurrentHours"
            role="button"
          >
            <button className="App-button">See Current Hours</button>
          </a>

          <a className="btn btn-lg btn primary" href="/AddHours" role="button">
            <button className="App-button">Add Hours</button>
          </a>

          <a
            className="btn btn-lg btn primary"
            href="/AddNewClass"
            role="button"
          >
            <button className="App-button">Add New Class</button>
          </a>
        </div>
      </div>
    </>
  );
}
