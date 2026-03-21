export default function AddNewClass() {
  return (
    <form className="hours-form">
      <h3 className="hours-form-title">Add Your New Class Here</h3>

      <div class="form-group">
        <label for="formGroupExampleInput">Class Name</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Input class name"
        ></input>
      </div>

      <div className="form-group">
        <select class="custom-select custom-select-lg mb-3">
          <option selected>Class category</option>
          <option value="1">Math</option>
          <option value="2">Reading</option>
          <option value="3">Social Studies</option>
          <option value="4">Science</option>
          <option value="5">Language Arts</option>
          <option value="6">Elective</option>
        </select>
      </div>

      <input class="btn btn-primary" type="submit" value="Submit"></input>
    </form>
  );
}
