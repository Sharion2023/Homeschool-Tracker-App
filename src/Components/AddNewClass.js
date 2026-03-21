import Nav from "./Nav";
import { useState } from "react";

export default function AddNewClass({ data, setData, categories }) {
  const [className, setClassName] = useState(" ");
  const [category, setCategory] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    setData((prev) => ({
      ...prev,
      classes: [...prev.classes, newClass],
    }));
  };

  if (!className || !category) {
    alert("All fields are required!");
  }

  const newClass = {
    name: className,
    category: category,
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <form onSubmit={handleSubmit} className="hours-form">
        <h3 className="hours-form-title">Add Your New Class Here</h3>
        {/* Class Name */}
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
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
        <button className="btn btn-primary">Add Class</button>
      </form>
    </>
  );
}
