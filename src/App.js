// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddHours from "./Components/AddHours";
import Home from "./Components/Home";
import CurrentHours from "./Components/CurrentHours";
import AddNewClass from "./Components/AddNewClass";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  //parent state here because all pages need to communicate and share state
  const [trackedData, setTrackedData] = useState({
    addHours: 0,
    coreHours: 0,
    location: " ",
    regLocationHours: 0,
    classes: [],
  });

  const categories = [
    "Math",
    "Reading",
    "Science",
    "Social Studies",
    "Language Arts",
    "Elective",
  ];

  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        //Add hours page
        <Route
          path="/AddHours"
          element={<AddHours data={trackedData} setData={setTrackedData} />}
        />
        /*Current Hours page */
        <Route
          path="/CurrentHours"
          element={<CurrentHours data={trackedData} />}
        />
        /*Add New Class page */
        <Route
          path="/AddNewClass"
          element={
            <AddNewClass
              data={trackedData}
              setData={setTrackedData}
              categories={categories}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
