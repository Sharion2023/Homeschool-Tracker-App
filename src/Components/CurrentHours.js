import React, { useState } from "react";
import AddHours from "./AddHours";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CurrentHours() {
  const [current, setCurrentHours] = useState(0);
  return (
    <>
      <div>
        <Link to="/" className="btn btn-secondary mb-3">
          Home
        </Link>
      </div>
      <Container>
        <div className="hours-display">
          <h3 className="hours-display-title">Your Current Hours</h3>

          <div className="hours-metrics">
            <div className="hours-metric">
              <span className="hours-metric-label">Cumulative Hours</span>
              <span className="hours-metric-value">{current}</span>
            </div>

            <div className="hours-metric">
              <span className="hours-metric-label">Core Hours</span>
              <span className="hours-metric-value">{AddHours.coreHours}</span>
            </div>

            <div className="hours-metric">
              <span className="hours-metric-label">Regular Location Hours</span>
              <span className="hours-metric-value">
                {AddHours.regLocationHours}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
