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
    location: "",
    regLocationHours: 0,
    courses: [],
  });

  const categories = [
    "Math",
    "Reading",
    "Science",
    "Social Studies",
    "Language Arts",
    "Elective",
  ];

  const [selectedCourse, setSelectedCouse] = useState("");

  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*Add hours page*/}
        <Route
          path="/AddHours"
          element={
            <AddHours
              addHours={trackedData.addHours}
              setAddHours={(value) =>
                setTrackedData((prev) => ({ ...prev, addHours: value }))
              }
              location={trackedData.location}
              setLocation={(value) =>
                setTrackedData((prev) => ({ ...prev, location: value }))
              }
              courses={trackedData.courses}
              selectedCourse={selectedCourse}
              setSelectedCouse={setSelectedCouse}
            />
          }
        />
        {/*Current Hours page */}
        <Route
          path="/CurrentHours"
          element={<CurrentHours data={trackedData} />}
        />
        {/*Add New Class page */}
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
