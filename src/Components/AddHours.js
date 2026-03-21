import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function AddHours({
  addHours,
  setAddHours,
  location,
  setLocation,
}) {
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
  };

  return (
    <form className="hours-form">
      <h3 className="hours-form-title">Log Your Hours</h3>

      <div className="form-group">
        <label className="form-label">Class</label>
        <select
          className="form-select"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">Select class</option>
          <option value="Home">Home Location</option>
          <option value="Other">Other</option>
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
    // <form className="text-center">
    //   <div className="hours-display">
    //     <select
    //       class="custom-select custom-select-lg mb-3"
    //       value={addHours}
    //       onChange={handleHoursChange}
    //     >
    //       <option selected>Hours to log</option>
    //       <option value="1">1</option>
    //       <option value="1.5">1.5</option>
    //       <option value="2">2</option>
    //       <option value="2.5">2.5</option>
    //       <option value="3">3</option>
    //       <option value="3">3.5</option>
    //     </select>
    //   </div>

    //   <div className="form-group">
    //     <select
    //       class="custom-select custom-select-lg mb-3"
    //       value={location}
    //       onChange={handleLocationChange}
    //     >
    //       <option selected>Location</option>
    //       <option value="Home">Home Location</option>
    //       <option value="Other">Other</option>
    //     </select>
    //   </div>

    //   <input
    //     class="btn btn-primary"
    //     type="submit"
    //     value="Submit"
    //     onSubmit={handleSubmit}
    //   ></input>
    //   <Button>My Button</Button>
    // </form>
  );
}
