import { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "./Nav";

export default function AddHours({
  data,
  addHours,
  setAddHours,
  location,
  setLocation,
  courses,
  selectedCourse,
  setSelectedCouse,
}) {
  const handleSetCourse = (e) => {
    setSelectedCouse(e.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(location);
  };

  const handleHoursChange = (event) => {
    setAddHours(event.target.value);
    console.log("Adding hours:" + addHours);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Process the submitted text here
    console.log("location changed");
    console.log("Submitted location:", location);
    console.log("hours changed");
    console.log("Submitted hours:", addHours);
    //add hours at location to database

    // Reset the text field after submission (optional)
    //setLocation('');
    console.log(data);
  };

  return (
    <>
      <Nav />
      <form className="hours-form">
        <h3 className="hours-form-title">Log Your Hours</h3>

        <div className="form-group">
          <label className="form-label">Class</label>
          <select
            className="form-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCouse(e.target.value)}
          >
            <option value=" ">Select course</option>
            {courses.length === 0 ? (
              <option disabled>No Courses Available</option>
            ) : (
              courses.map((course, index) => (
                <option key={index} value={course.name}>
                  {course.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Hours to log</label>
          <select
            className="form-select"
            value={addHours}
            onChange={handleHoursChange}
          >
            <option value="">Select hours</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Location</label>
          <select
            className="form-select"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Select location</option>
            <option value="Home">Home Location</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-actions">
          <input
            className="form-submit"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          />
          <button type="button" className="form-btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
