
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    age: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Form Submitted Successfully");
  }

  return (
    <div>
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Department:</label>
        <input
          type="text"
          name="dept"
          value={formData.dept}
          onChange={handleChange}
        />

        <br /><br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;
