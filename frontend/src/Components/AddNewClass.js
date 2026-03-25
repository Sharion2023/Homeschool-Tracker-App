import Nav from "./Nav";
import { useState } from "react";

export default function AddNewClass({
  data,
  setData,
  categories,
  isCore,
  setIsCore,
}) {
  const [courseName, setCourseName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!courseName || !category) {
      alert("All fields are required!");
      return;
    }

    if (category !== "Elective") {
      setIsCore(true);
    }

    {
      /*Create new class with category*/
    }
    const newCourse = {
      name: courseName,
      category: category,
      classification: isCore ? "core" : "elective",
    };

    {
      /*Set new class info*/
    }
    setData((prev) => ({
      ...prev,
      courses: [...prev.courses, newCourse],
    }));

    {
      /*Reset form*/
    }
    setCourseName("");
    setCategory("");

    console.log(data);
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <form onSubmit={handleSubmit} className="hours-form">
        <h3 className="hours-form-title">Add Your New Course Here</h3>
        {/* Class Name */}
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter class name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        {/*Create category dropdown*/}
        <select
          className="form-select mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=" ">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary">
          Add Course
        </button>
      </form>
    </>
  );
}
