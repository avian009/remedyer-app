import React, { useState } from "react";

function CreateArea(props) {
  const [details, setDetails] = useState({
    name: "",
    age: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value
      };
    });
  }
  function submitDetails(event) {
    props.onadd(details);
    setDetails({
      name: "",
      age: ""})
    event.preventDefault();
  }

  return (
    <div>
      <form className="firstform">
        <input
          onChange={handleChange}
          name="name"
          value={details.name}
          placeholder="Enter the name"
        />
        <input
          onChange={handleChange}
          name="age"
          value={details.age}
          placeholder="Enter the age"
        />
        <button onClick={submitDetails}>Enter</button>
      </form>
    </div>
  );
}

export default CreateArea;
