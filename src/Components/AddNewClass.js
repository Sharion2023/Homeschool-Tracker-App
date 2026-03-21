import Nav from "./Nav";
import { useState } from "react";

export default function AddNewClass({ data, setData }) {
  const [className, setClassName] = useState(" ");
  const [category, setCategory] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!className || !category) {
    alert("All fields are required!");
  }

  const newClass = {
    name: className,
    category: category,
  };

  setData((prev) => ({
    ...prev,
    classes: [...prev.classes, newClass],
  }));

  return (
    <>
      <div>
        <Nav />
      </div>
      <form onSubmit={handleSubmit} className="hours-form">
        <h3 className="hours-form-title">Add Your New Class Here</h3>
        //Set class name
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        //Category dropdown
        <select
          className="form-select mb-2"
          value={category}
          onChange={setCategory}
        >
          <option value=" ">Select Category</option>
        </select>
        <input class="btn btn-primary" type="submit" value="Submit"></input>
      </form>
    </>
  );
}
